export const AdvantagesAnimation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const button = document.getElementById("scrollToNextButton");
      const sections = document.querySelectorAll(".advantages-details");

      // GSAP animation for '.advantages-left span'
      const animation = gsap.to(".advantages-left span", {
        top: "-158px",
        stagger: {
          each: 0.1,
        },
        ease: "none",
      });
      // ScrollTrigger setup
      ScrollTrigger.create({
        trigger: ".advantages-section",
        start: "top top",
        end: "bottom bottom",
        pin: ".advantages-left",
        animation,
        marker: true,
        scrub: 1,
      });
      const advantages = [
        document.querySelector(".advantages-1"),
        document.querySelector(".advantages-2"),
        document.querySelector(".advantages-3"),
      ];
      advantages.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 300, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 1,
            duration: 3,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "5% top",
              scrub: true,
              toggleActions: "restart none none none",
            },
          }
        );
      });

      let currentSectionIndex = 0;

      function scrollToNextSection() {
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        } else {
          currentSectionIndex = sections.length - 1;
        }
        sections[currentSectionIndex].scrollIntoView({
          behavior: "smooth",
        });
      }

      button.addEventListener("click", scrollToNextSection);
      resolve("advantages animation is ready");
    } catch (err) {
      console.log(err, "advantages gsap animation");
      reject(err);
    }
  });
};
