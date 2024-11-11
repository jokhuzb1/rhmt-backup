export const starLoader = (totalFunctions, functions) => {
  return new Promise(async (resolve, reject) => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const counterElement = document.querySelector(".counter");
      const overlay = document.querySelector(".overlay");
      const bar = document.querySelectorAll(".bar");
      let currentProgress = 0;
      const progressIncrement = 100 / totalFunctions;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";

      function enableScroll() {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        overlay.style.visibility = "hidden";
      }

      function updateCounter() {
        counterElement.textContent = `${Math.round(currentProgress)}%`;
      }

      const executedFunctions = new Set();

      for (const func of functions) {
        if (!executedFunctions.has(func)) {
          await func();
          executedFunctions.add(func);
          currentProgress += progressIncrement;
          updateCounter();
        }
      }
      gsap.to(".counter", {
        opacity: 0,
        visibility: "hidden",
        delay: 0.1,
        duration: 0.3,
        onComplete: async () => {
          const barAnimations = Array.from(bar).map((i, index) =>
            gsap
              .to(i, {
                height: 0,
                opacity: 0,
                duration: 1,
                backgroundColor: "white",
                ease: "power4.inOut",
                delay: 0.02 * (index + 1),
              })
              .then()
          );

          await Promise.all(barAnimations);

          enableScroll();
          resolve("Loader animation complete");
        },
      });
    } catch (err) {
      console.log("Error in loader animation:", err);
      reject(err);
    }
  });
};
