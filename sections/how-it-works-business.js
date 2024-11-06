export const HowItWorksSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works-business");

    const html = (strings, ...values) => strings.raw[0]; // Define the html function here

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="h-[450vh]">
          <div class="video-section">
            <div class="video-container">
              <video
                class="vid active"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/1.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/2.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/3.mp4" type="video/mp4" />
              </video>
              <video
                class="vid"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/4.mp4" type="video/mp4" />
              </video>

              <!-- Additional video content and descriptions here -->
            </div>
          </div>
        </div>
      `;
      resolve("How it works loaded");
    } else {
      reject(new Error("how-it-works-business element not found!"));
    }
  });
};
