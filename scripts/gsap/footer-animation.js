export const FooterAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const footerTextElementsP = document.querySelectorAll(".footer p");
      const footerTextElementsA = document.querySelectorAll(".footer a");
      const both = [footerTextElementsA, footerTextElementsP];

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#footer",
          start: "50% bottom",
          end: "50% 70%",
          scrub: true,
          toggleActions: "play none none reset",
        },
      });

      both.forEach((footerElement) => {
        footerElement.forEach((i, idx) => {
          timeline.fromTo(
            i,
            {
              opacity: 0,
              scale: 0.7,
              y: 20, // Starting with a slight vertical offset
            },
            {
              scale: 1.05, // Scale slightly above 1 for a subtle pulse effect
              opacity: 1,
              y: 0, // Moves to the final position
              duration: 1.5, // Adjusted duration for a slower effect
              ease: "power2.out",
            },
            idx * 0.25 // Increased stagger for smoother element spacing
          );
        });
      });

      resolve("Footer animation is ready with added effects");
    } catch (err) {
      console.error("Error in Footer animation:", err);
      reject(err);
    }
  });
};
