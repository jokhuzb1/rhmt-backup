export const PayReviewAnimation = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const TopDivs = document.querySelector(".top-divs");
      const BottomDivs = document.querySelector(".bottom-divs");
      const container = document.querySelector(".container-pay-review");
      const phoneElement = document.querySelector(".main-div");
      const illustration = document.querySelector(".illustration");
      const rightIllustrator = document.querySelector(".right-illustrator");
      const leftIllustrator = document.querySelector(".left-illustrator");

      // Create a timeline
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
            left: "-10%",
            top: "200%",
            autoAlpha: 1,
            position: "fixed",
            opacity: 0,
          },
          {
            left: "50%",
            xPercent: -50,
            position: "fixed",
            top: "50%",
            opacity: 1,
            yPercent: -50,
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
          TopDivs,
          { x: "-2000px" },
          {
            x: "200px",
            duration: 1,
            stagger: 0.1,
          }
        )
        .fromTo(
          BottomDivs,
          { x: "2000px" },
          {
            x: "-200px",
            duration: 1,
            stagger: 0.1,
          },
          "-=0.5"
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: illustration,
            start: "350% bottom",
            end: "700% bottom",
            scrub: true,
            onEnter: () => {
              gsap.to(rightIllustrator, {
                opacity: 1,
                visibility: "visible",
                left: "25%",
                ease: "power2.out",
              });
              gsap.to(leftIllustrator, {
                opacity: 1,
                visibility: "visible",
                right: "30%",
                ease: "power2.out",
              });
            },
            onLeave: () => {
              gsap.to(rightIllustrator, {
                opacity: 0,
                visibility: "hidden",
              });
              gsap.to(leftIllustrator, {
                opacity: 0,
                visibility: "hidden",
              });
            },
          },
        })
        .fromTo(
          rightIllustrator,
          {
            opacity: 0,
            position: "fixed",
            left: 450,
            top: "30%",
          },
          {
            opacity: 1,
            position: "fixed",
            left: "22%",
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          leftIllustrator,
          {
            opacity: 0,
            position: "fixed",
            visibility: "hidden",
            right: 450,
            top: "30%",
          },
          {
            opacity: 1,
            position: "fixed",
            right: "20%",
            ease: "power2.out",
          },
          0
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

      ScrollTrigger.create({
        trigger: container,
        start: "top 15%",
        end: "+=3000",
        pin: container,
        pinSpacing: true,
        onLeave: () => gsap.to(container, { opacity: 0, duration: 0.5 }),
      });
      resolve(" pay review animation is ready");
    } catch (err) {
      console.log(err, "pay review gsap animation");
      reject(err);
    }
  });
};
