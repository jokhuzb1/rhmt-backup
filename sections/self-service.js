const html = (strings, ...values) => strings.raw[0];

export const SelfService = () => {
  return new Promise((resolve, reject) => {
    const advantages = document.getElementById("self-service");

    if (advantages) {
      advantages.innerHTML = html`
        <div class="self-wrapper">
          <span data-key="SelfService" class="ad-title"
            >Self-service information terminal</span
          >
          <div class="self-container">
            <div class="self-text-wrapper">
              <div class="self-top-text text-content">
                <h2 data-key="SelfServiceInformation">
                  Self-service information terminal
                </h2>
                <p data-key="SelfServiceInfoterminal">
                  Infoterminal is a hardware and software complex that ensures
                  the acceptance of payments from individuals.
                </p>
              </div>
              <div class="self-bottom-text text-content unres ">
                <h2 data-key="SelfServiceHow">How it works</h2>
                <p>
                  Guests can browse the menu, place orders, and pay, all without
                  waiting for a waiter. Payment and tipping are done directly
                  through the Infoterminal.
                </p>
              </div>
            </div>
            <div class="terminal">
              <img src="../assets/selfservice/machine.png" />
            </div>
            <div class="self-bottom-text text-content responsive">
              <h2>How it works</h2>
              <p>
                Guests can browse the menu, place orders, and pay, all without
                waiting for a waiter. Payment and tipping are done directly
                through the Infoterminal.
              </p>
            </div>
            <div class="self-steps">
              <img src="../assets/selfservice/1.png" />
              <img src="../assets/selfservice/2.png" />
              <img src="../assets/selfservice/3.png" />
            </div>
          </div>
        </div>
      `;

      // Initialize GSAP animations
      const animateSection = () => {
        const selfWrapper = document.querySelector(".self-wrapper");
        const texts = selfWrapper.querySelectorAll(".text-content");

        // Center the section vertically in the viewport
        selfWrapper.style.display = "flex";
        selfWrapper.style.flexDirection = "column";
        selfWrapper.style.alignItems = "center";
        selfWrapper.style.justifyContent = "center";

        // GSAP animations for text
        gsap.fromTo(
          texts,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
        );

        // Animate images with stagger effect
        const images = selfWrapper.querySelectorAll("img");
        gsap.from(images, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          stagger: 0.2,
        });
      };

      // Set up Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSection(); // Trigger animation when section is in view
          }
        });
      });

      observer.observe(advantages); // Observe the advantages section

      resolve("advantages loaded");
    } else {
      reject(new Error("advantages element not found!"));
    }
  });
};
