export const PosSystemsAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const posSystemText = document.querySelector(".pos-system-text");
      const posSystemTitle = document.querySelector(".pos-system-title");
      const ellipseGif = document.querySelector(".ellipse-gif");
      const posSystemSection = document.querySelector(".pos-system-section");
      const sectionWithEllipse = document.querySelector(
        ".section-with-ellipse"
      );

      const words = posSystemText.innerText.split(" ");
      posSystemText.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
      const wordSpans = document.querySelectorAll(".word");
      gsap.fromTo(
        wordSpans,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: posSystemSection,
            start: "25% 75%",
            end: "bottom top",
            toggleActions: "restart none none none",
          },
        }
      );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: posSystemSection,
            start: "top top",
            end: "+=150%",
            scrub: 0.75,
            pin: true,
          },
        })
        .to(wordSpans, { color: "#F05039", stagger: 0.1 });

      const scaleAnimations = [
        { target: posSystemTitle, scale: 0.5, opacity: 1 },
        { target: ellipseGif, scale: 0, opacity: 1, duration: 1.2 },
      ];
      scaleAnimations.forEach(({ target, scale, opacity, duration = 1 }) => {
        gsap.fromTo(
          target,
          { scale, opacity: 0 },
          {
            scale: 1,
            opacity,
            duration,
            scrollTrigger: {
              trigger: posSystemSection,
              start: "25% 75%",
              end: "bottom top",
              toggleActions: "restart none none none",
            },
          }
        );
      });
      gsap.matchMedia().add("(max-width: 1300px)", () => {
        // If the viewport width is 1300px or less
        gsap.fromTo(
          ellipseGif,
          { left: "50%" },
          {
            left: "-30vw",
            top: "148%",
            scrollTrigger: {
              trigger: sectionWithEllipse,
              start: "top bottom",
              end: "bottom top",
              marker: true,
              scrub: true,
            },
          }
        );
      });

      // For viewports wider than 1300px
      gsap.matchMedia().add("(min-width: 1301px)", () => {
        gsap.fromTo(
          ellipseGif,
          { left: "50%" },
          {
            left: "-30vw",
            top: "148%",
            scrollTrigger: {
              trigger: sectionWithEllipse,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const posSystemRightContent = document.querySelector(
        ".pos-system-right-content"
      );
      const posSystemTextWords = document.querySelectorAll(
        ".pos-system-text-word"
      );

      gsap.fromTo(
        posSystemTextWords,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionWithEllipse,
            start: "top 20%",
            end: "bottom top",
            toggleActions: "restart none none none",
          },
        }
      );

      gsap.fromTo(
        posSystemRightContent,
        { className: "w-[50%] pos-system-right-content max-lg:!w-[100%]" },
        {
          className: "w-[50%] pos-system-right-content max-lg:!w-[100%] active",
          scrollTrigger: {
            trigger: sectionWithEllipse,
            stagger: 0.1,
            start: "top 10%",
            end: "top top",
            toggleActions: "restart none none none",
          },
        }
      );

      resolve("POS systems animation is ready.");
    } catch (err) {
      console.error("POS systems GSAP animation error:", err);
      reject(err);
    }
  });
};
