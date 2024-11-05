export const HowItWorksBusinessAnimation = () => {
  return new Promise((resolve, reject) => {
    try {
      const videos = document.querySelectorAll(".vid");
      const overlayTexts = document.querySelectorAll(".overlay-text");
      let currentIndex = 0;

      ScrollTrigger.create({
        trigger: ".video-section",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const newIndex = Math.floor(self.progress * videos.length);

          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            changeVideoAndText(currentIndex);
          }
        },
      });

      function changeVideoAndText(index) {
        // Hide all videos first
        videos.forEach((video) => {
          gsap.to(video, { opacity: 0, duration: 0.5 });
          video.pause(); // Pause all videos
        });

        // Hide all overlay texts first
        overlayTexts.forEach((text) => {
          gsap.to(text, { opacity: 0, duration: 0.5 }); // Hide all texts
        });

        // Show the current video
        gsap.to(videos[index], { opacity: 1, duration: 0.5 });
        videos[index].play(); // Play the current video

        // Show the overlay texts for the current video
        const textsToShow = [
          document.querySelectorAll(".text-top-left")[index],
          document.querySelectorAll(".text-top-right")[index],
          document.querySelectorAll(".text-bottom-left")[index],
          document.querySelectorAll(".text-bottom-right")[index],
        ];

        textsToShow.forEach((text) => {
          gsap.to(text, { opacity: 1, duration: 0.5 }); // Show active corner texts
        });
      }

      changeVideoAndText(currentIndex); // Initial call to set the first video and texts

      resolve("How it works animation is ready");
    } catch (err) {
      console.error("Error in 'How it works' animation:", err);
      reject(err);
    }
  });
};
