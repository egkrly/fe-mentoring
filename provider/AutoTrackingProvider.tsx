import React, { useEffect, ReactNode } from "react";
import { trackEvent } from "@/tracking";

interface AutoTrackingProviderProps {
  children: ReactNode;
  excludeSelectors?: string;
}

export const AutoTrackingProvider: React.FC<AutoTrackingProviderProps> = ({
  children,
  excludeSelectors = ".no-track, .no-track *",
}) => {
  useEffect(() => {
    // Primary click handler for document
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      trackInteraction(target);
    };

    // Tracking logic
    const trackInteraction = (target: HTMLElement) => {
      if (!target || target.matches(excludeSelectors)) {
        return;
      }

      let element = target;
      let depth = 0;
      const maxDepth = 10;

      while (element && depth < maxDepth) {
        // Basic element data
        const id = element.id;
        const classes = Array.from(element.classList || []).join(" ");
        const tag = element.tagName?.toLowerCase() || "unknown";
        const text = element.textContent?.trim().substring(0, 50);
        const dataTracking = element.getAttribute("data-tracking");

        // Use data-tracking if available
        if (dataTracking) {
          const parts = dataTracking.split("|");
          const category = parts[0] || "CustomTracking";
          const action = parts[1] || "click";
          const name = parts[2] || "";

          console.log("Data-attribute tracking:", category, action, name);
          trackEvent(category, action, name);
          return;
        }

        // Modal-specific detection
        const isInModal =
          element.closest(".chakra-modal") !== null ||
          element.closest("[role='dialog']") !== null;

        // Interactive element detection
        const isButton =
          tag === "button" ||
          element.getAttribute("role") === "button" ||
          (tag === "div" && classes.includes("button"));

        const isLink = tag === "a";

        const isInteractive =
          isButton ||
          isLink ||
          element.hasAttribute("aria-haspopup") ||
          (element as any).onclick !== null;

        if (isInteractive) {
          // Element type classification
          const elementType = isButton
            ? "button"
            : isLink
            ? "link"
            : element.getAttribute("role") || tag;

          // Find best name for the action
          let actionName = "";
          if (text && text.length < 30) actionName = text;
          else if (element.getAttribute("aria-label"))
            actionName = element.getAttribute("aria-label") || "";
          else if (id) actionName = id;
          else if (element.getAttribute("name"))
            actionName = element.getAttribute("name") || "";
          else if (classes) actionName = classes;
          else actionName = `${tag} element`;

          const contextPrefix = isInModal ? "Modal:" : "";

          console.log(
            `Tracking ${isInModal ? "MODAL" : "normal"} element:`,
            `${contextPrefix}${elementType}`,
            actionName
          );

          trackEvent(
            "AutoTracking",
            `${contextPrefix}${elementType}`,
            actionName
          );
          return;
        }

        element = element.parentElement as HTMLElement;
        depth++;
      }
    };

    // Set up MutationObserver for dynamic content
    const setupModalObserver = () => {
      // Create observer instance
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // Look for modal additions
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as HTMLElement;

                // Look for modal elements
                const modal = element.classList?.contains("chakra-modal")
                  ? element
                  : element.querySelector(".chakra-modal");

                if (modal) {
                  console.log("Modal detected via MutationObserver");

                  // Add direct click listeners to all buttons in the modal
                  const buttons = modal.querySelectorAll(
                    'button, [role="button"], .chakra-button'
                  );
                  buttons.forEach((button) => {
                    if (!(button as any).__modalTracked) {
                      (button as any).__modalTracked = true;

                      button.addEventListener(
                        "click",
                        (e) => {
                          e.stopPropagation(); // Try to prevent event bubbling issues
                          console.log("Direct modal button click!", e.target);
                          trackEvent(
                            "AutoTracking",
                            "Modal:button",
                            button.textContent?.trim() || "Modal button"
                          );
                        },
                        true
                      ); // Use capture phase to get event first
                    }
                  });
                }
              }
            });
          }
        });
      });

      // Start observing document for modal appearances
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return observer;
    };

    // Add global document listener
    document.addEventListener("click", handleGlobalClick, true); // true = capture phase

    // Set up observer for dynamic content
    const observer = setupModalObserver();

    // Cleanup function
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      observer.disconnect();
    };
  }, [excludeSelectors]);

  return <>{children}</>;
};
