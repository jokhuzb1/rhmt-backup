export const FaqAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      // Safely query the FAQ section
      const faqSection = document.querySelector(".faq-section");

      if (!faqSection) {
        console.warn("FAQ section not found.");
        return resolve("FAQ animation skipped due to missing element.");
      }

      // Apply GSAP animation to the FAQ section
      gsap.fromTo(
        faqSection,
        {
          className: "z-[5] relative faq-section",
        },
        {
          className: "z-[5] relative faq-section active",
          stagger: 0.5,
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: faqSection,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            toggleActions: "restart none none none",
          },
        }
      );

      resolve("FAQ animation is ready");
    } catch (err) {
      console.error("Error in FAQ animation:", err);
      reject(err);
    }
  });
};
