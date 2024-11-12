const html = (strings, ...values) => strings.raw[0];

export const BusinessAdvantages = () => {
  return new Promise((resolve, reject) => {
    const advantages = document.getElementById("business-advantages");

    if (advantages) {
      advantages.innerHTML = html`
        <div class="card-wrapped untouchable">
          <section id="horizontal-scoll">
            <span class="ad-title" data-key="advantagesTitleSpan"
              >Advantages</span
            >
            <div class="horizontal-scoll-wrapper">
              <div class="horizontal">
                <div>
                  <div class="card">
                    <h2>01</h2>
                    <video
                      src="../assets/business/order.webm"
                      class="image"
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>
                    <div class="content-text">
                      <h2 data-key="advantagesTitleInstant">
                        Instant Online Orders
                      </h2>
                      <p data-key="advantagesTitleOnline">
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
                      src="../assets/business/noapplication.webm"
                      class="image"
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>
                    <div class="content-text">
                      <h2 data-key="advantagesTitleApplication">
                        No need application
                      </h2>
                      <p data-key="advantagesTitleInstall">
                        No need to install a separate application.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="content-text">
                      <h2 class="top">03</h2>
                    </div>
                    <video
                      src="../assets/business/advantages.webm"
                      class="image"
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>
                    <div class="content-text">
                      <h2 data-key="advantagesTitleSeamless">
                        Seamless Ordering and Tipping
                      </h2>
                      <p data-key="advantagesTitleBuilt">
                        The built-in QR payment service RAHMAT will make it
                        possible to pay for an order and tip without a terminal.
                        Leave a royal review!
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2 class="top">04</h2>
                    <video
                      src="../assets/business/scheme.webm"
                      class="image"
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>

                    <div class="content-text">
                      <h2 data-key="advantagesTitleFast">Fast Sales Boost</h2>
                      <p data-key="advantagesTitleIncreases">
                        Increases sales volumes, thanks to fast customer
                        service.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2 class="top">05</h2>
                    <video
                      src="../assets/business/5.webm"
                      class="image "
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>
                    <div class="content-text top">
                      <h2 data-key="advantagesTitleEasy">Easy Menu Updates</h2>
                      <p data-key="advantagesTitleAlways">
                        Always up-to-date menu, easy change of the list of
                        dishes.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <h2>06</h2>
                    <video
                      src="../assets/business/6.webm"
                      class="image"
                      autoplay
                      loop
                      muted
                      type="video/webm"
                    ></video>
                    <div class="content-text">
                      <h2 data-key="advantagesTitleSave">Save your time!</h2>
                      <p data-key="advantagesTitleEverything">
                        Everything will be quick and easy!
                      </p>
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
