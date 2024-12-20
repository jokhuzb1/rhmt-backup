export const HeaderAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const HeaderText = document.querySelector(".header-text");
      const HeaderSection = document.querySelector(".showcase-section");

      if (HeaderText) {
        const headerTextWords = HeaderText.innerText.split(" ");
        HeaderText.innerHTML = headerTextWords
          .map((word) => `<span class="header-text-word">${word}</span>`)
          .join(" ");
      } else {
        console.warn("Header text element not found.");
        return resolve("Header animation skipped due to missing element.");
      }

      const headerTextSpan = document.querySelectorAll(".header-text-word");
      if (headerTextSpan) {
        Array.from(headerTextSpan).map((i, idx) => {
          gsap.fromTo(
            i,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 2,
              delay: 2 + 0.1 * idx,
              ease: "power4.out",
              scrollTrigger: {
                trigger: HeaderSection,
              },
            }
          );
        });
      } else {
        console.log("header sapn not found");
      }

      gsap.to(HeaderSection, {
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.from(".header-img-1", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top 75%",
        },
        xPercent: -3,
      });

      gsap.from(".header-img-2", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top 75%",
        },
        xPercent: -6,
      });

      gsap.from(".header-img-3", {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        delay: 3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: HeaderSection,
          start: "top 75%",
        },
        xPercent: -9,
      });

      /* NAVBAR */
      const logo = document.querySelector(".logo");
      const dropdownButtons = document.querySelectorAll(".dropdown-button");
      const onemoreDropDownButton = document.querySelector(".become-partner");
      const buttons = [...dropdownButtons, onemoreDropDownButton];
      const BurgerIcon = document.querySelector(".burger-icon");

      gsap.fromTo(
        logo,
        {
          opacity: 0,
          scale: 0.7,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: HeaderSection,
            start: "top bottom",
          },
        }
      );
      buttons.forEach((dropdownButton) => {
        gsap.fromTo(
          dropdownButton,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 2,
            stagger: 0.1,
            scrollTrigger: {
              trigger: HeaderSection,
              start: "top bottom",
            },
          }
        );
      });

      gsap.fromTo(
        BurgerIcon,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: HeaderSection,
            start: "top bottom",
          },
        }
      );

      resolve("Header animation is ready");
    } catch (err) {
      console.error("Error in header GSAP animation:", err);
      reject(err);
    }
  });
};
