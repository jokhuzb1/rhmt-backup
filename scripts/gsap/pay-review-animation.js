export const PayReviewAnimation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const TopDivs = document.querySelector(".top-divs");
      const BottomDivs = document.querySelector(".bottom-divs");
      const container = document.querySelector(".container-pay-review");
      const phoneElement = document.querySelector(".main-div");
      const rightIllustrator = document.querySelector(".right-illustrator");
      const leftIllustrator = document.querySelector(".left-illustrator");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "+=3000",
            scrub: true,
          },
        })
        .fromTo(
          phoneElement,
          {
            left: "50%",
            bottom: "-50%",
            autoAlpha: 1,
            position: "fixed",
            opacity: 0,
          },
          {
            top: "50%",
            yPercent: -50,
            left: "50%",
            position: "fixed",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          }
        )
        .to(phoneElement, {
          rotate: 0,
          ease: "power2.inOut",
          duration: 0.5,
        })
        .fromTo(
          rightIllustrator,
          {
            opacity: 0,
            position: "fixed",
            left: "50%",
            xPercent: -50,
          },
          {
            opacity: 1,
            position: "fixed",
            x: "-12vw",
            ease: "power2.out",
            duration: 0.5,
          },
          "-=0.1"
        )
        .fromTo(
          leftIllustrator,
          {
            opacity: 0,
            position: "fixed",
            left: "50%",
            xPercent: -50,
          },
          {
            opacity: 1,
            position: "fixed",
            x: "12vw",
            ease: "power2.out",
            duration: 0.5,
          },
          "-=0.5"
        )
        .to(
          [rightIllustrator, leftIllustrator],
          {
            opacity: 0,
            visibility: "hidden",
            duration: 0.5,
            ease: "power2.out",
          },
          "+=0.5"
        )
        .fromTo(
          TopDivs,
          { x: "-1700px" },
          {
            x: "0px",
            duration: 1,
            stagger: 0.2,
          }
        )
        .fromTo(
          BottomDivs,
          { x: "1700px" },
          {
            x: "0px",
            duration: 1,
            stagger: 0.2,
          },
          "-=0.5"
        );

      gsap.fromTo(
        container,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: container,
            start: "-35% bottom",
            end: "+=3000",
            scrub: true,
          },
        }
      );

      //Pin the container
      ScrollTrigger.create({
        trigger: container,
        start: "top 0%",
        end: "+=3000",
        pin: container,
        pinSpacing: true,
        onLeave: () => {
          gsap.to(TopDivs, {
            x: "1700px",
            duration: 0.5,
            ease: "power2.inOut",
          });

          gsap.to(BottomDivs, {
            x: "-1700px",
            duration: 0.5,
            ease: "power2.inOut",
          });

          gsap.to(container, { opacity: 0, duration: 1 });
        },
      });

      resolve("Pay review animation is ready");
    } catch (err) {
      console.log(err, "pay review gsap animation");
      reject(err);
    }
  });
};
