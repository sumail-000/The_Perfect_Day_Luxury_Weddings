import { useEffect } from "react";

let observer = null;

function getObserver() {
  if (observer) return observer;
  if (typeof window === "undefined") return null;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px 0px 0px" }
  );
  return observer;
}

function observeAll() {
  const obs = getObserver();
  if (!obs) return;
  document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
    obs.observe(el);
  });
}

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial pass — slight delay lets React finish painting
    const t = setTimeout(observeAll, 50);

    // Watch for any new [data-reveal] nodes added dynamically
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mutation.disconnect();
    };
  }, []);
}
