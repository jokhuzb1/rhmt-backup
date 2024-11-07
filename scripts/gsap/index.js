export const Gsap = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Initializing GSAP animations...");

      const { PayReviewAnimation } = await import("./pay-review-animation.js");
      const { applyGSAPAnimations } = await import("./apply-gsap-animation.js");
      const { AdvantagesAnimation } = await import("./advantages-animation.js");
      const { PosSystemsAnimation } = await import(
        "./pos-systems-animation.js"
      );
      const { PartnersAnimation } = await import("./partners-animation.js");
      const { HeaderAnimation } = await import("./header-animation.js");
      const { FooterAnimation } = await import("./footer-animation.js");
      const { FaqAnimation } = await import("./faq-animation.js");
      const { HowItWorksAnimation } = await import(
        "./how-it-works-animation.js"
      );

      gsap.registerPlugin(ScrollTrigger);
      //progressbar
      const progressBar = document.getElementById("progress-bar");
      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / documentHeight) * 100;
        gsap.to(progressBar, { width: `${progress}%`, duration: 0.2 });
      });

      await HeaderAnimation();
      await FaqAnimation();
      await FooterAnimation();
      await AdvantagesAnimation();
      await PosSystemsAnimation();
      await HowItWorksAnimation();
      await PartnersAnimation();
      await PayReviewAnimation();
      await applyGSAPAnimations();
      resolve("GSAP animations ready");
    } catch (err) {
      console.log(err, "gsap");
      reject(err);
    }
  });
};
