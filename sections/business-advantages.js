const html = (strings, ...values) => strings.raw[0];

export const BusinessAdvantages = () => {
  return new Promise((resolve, reject) => {
    const advantages = document.getElementById("business-advantages");

    if (advantages) {
      advantages.innerHTML = html`
        <div class="card-wrapped">
          <section id="horizontal-scoll">
            <span class="ad-title">Advantages</span>
            <div class="horizontal-scoll-wrapper">
              <div class="horizontal">
                <div>
                  <div class="card">
                    <h2>01</h2>
                    <!-- <img src="../menu.png" alt="test" class="image" /> -->
                    <video
                      src="../assets/business/order.mp4"
                      class="image"
                      autoplay
                      loop
                      muted
                    ></video>
                    <div class="content-text">
                      <h2>Instant Online Orders</h2>
                      <p>
                        The Rahmat online menu allows visitors to your
                        establishment to choose the desired dish and place an
                        order on their own, without waiting for the waiter.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>02</h2>
                    <video
                      src="../assets/business/noapplication.mp4"
                      class="image"
                      autoplay
                      loop
                      muted
                    ></video>
                    <div class="content-text">
                      <h2>No need application</h2>
                      <p>No need to install a separate application.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>03</h2>
                    <video
                      src="../assets/business/advantages.mp4"
                      class="image"
                      autoplay
                      loop
                      muted
                    ></video>
                    <div class="content-text">
                      <h2>Seamless Ordering and Tipping</h2>
                      <p>
                        The built-in QR payment service RAHMAT will make it
                        possible to pay for an order and tip without a terminal.
                        Leave a royal review!
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>04</h2>
                    <video
                      src="../assets/business/scheme.mp4"
                      class="image"
                      autoplay
                      loop
                      muted
                    ></video>
                    <div class="content-text">
                      <h2>Fast Sales Boost</h2>
                      <p>
                        Increases sales volumes, thanks to fast customer
                        service.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>05</h2>
                    <img src="../menu.png" alt="test" class="image" />
                    <div class="content-text">
                      <h2>Easy Menu Updates</h2>
                      <p>
                        Always up-to-date menu, easy change of the list of
                        dishes.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>06</h2>
                    <img src="../menu.png" alt="test" class="image" />
                    <div class="content-text">
                      <h2>Save your time!</h2>
                      <p>Everything will be quick and easy!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;

      // GSAP ScrollTrigger animation
      gsap.registerPlugin(ScrollTrigger);

      let horizontalSection = document.querySelector(".horizontal");

      // console.log(horizontalSection.scrollWidth);

      gsap.to(horizontalSection, {
        x: () => horizontalSection.scrollWidth * -1.1,
        xPercent: 100,
        scrollTrigger: {
          trigger: ".horizontal",
          start: "center center",
          end: "+=2000px",
          pin: "#horizontal-scoll",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      resolve("advantages loaded");
    } else {
      reject(new Error("advantages element not found!"));
    }
  });
};
