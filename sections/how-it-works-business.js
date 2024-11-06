const html = (strings, ...values) => strings.raw[0];

export const HowItWorksBusinessSection = () => {
  return new Promise((resolve, reject) => {
    const howItWorks = document.getElementById("how-it-works-business");

    if (howItWorks) {
      howItWorks.innerHTML = html`
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div class="video-section col-span-1 relative">
            <div
              class="video-container relative p-5"
              style="padding-top: 60px; background:black;"
            >
              <!-- Video 1 -->
              <video
                class="vid w-full h-auto active"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/1.webm" type="video/webm" />
              </video>
              <div class="overlay-text text-top-left ">Scan QR-code</div>
              <div class="overlay-text text-top-right">01</div>
              <div class="overlay-text text-bottom-left">
                <h2>Guest scans the QR code</h2>
              </div>
              <div class="overlay-text text-bottom-right">
                <p>
                  The QR code provides quick access to the menu and ordering
                  options, enhancing convenience.
                </p>
              </div>

              <!-- Video 2 -->
              <video
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/2.mp4" type="video/mp4" />
              </video>
              <div class="overlay-text text-top-left">Menu</div>
              <div class="overlay-text text-top-right">02</div>
              <div class="overlay-text text-bottom-left">
                <h2>Reviewing the menu and form an order</h2>
              </div>
              <div class="overlay-text text-bottom-right">
                <p>
                  Easily browse our menu and place orders directly through
                  Rahmat's online platform, without waiting for a waiter.
                </p>
              </div>

              <!-- Video 3 -->
              <video
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/3.mp4" type="video/mp4" />
              </video>
              <div class="overlay-text text-top-left">Pay the bill and tip</div>
              <div class="overlay-text text-top-right">03</div>
              <div class="overlay-text text-bottom-left">
                <h2>Upon completion, the bill and tip are paid.</h2>
              </div>
              <div class="overlay-text text-bottom-right">
                <p>
                  After menu review, order and pay bill plus tip seamlessly via
                  Rahmat's integrated system.
                </p>
              </div>

              <!-- Video 4 -->
              <video
                class="vid w-full h-auto"
                autoplay
                muted
                loop
                playsinline
                webkit-playsinline
              >
                <source src="./assets/howitworks/4.mp4" type="video/mp4" />
              </video>
              <div class="overlay-text text-top-left">Leave review</div>
              <div class="overlay-text text-top-right">04</div>
              <div class="overlay-text text-bottom-left">
                <h2>The waiter may offer to leave a review.</h2>
              </div>
              <div class="overlay-text text-bottom-right">
                <p>You can leave a review upon the waiter's request.</p>
              </div>
            </div>
          </div>
        </div>
      `;

      resolve("How it works loaded");
    } else {
      reject(new Error("How it works element not found!"));
    }
  });
};
