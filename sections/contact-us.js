const html = (strings, ...values) => strings.raw[0];

export const ContactUsSection = () => {
  return new Promise((resolve, reject) => {
    const contactUs = document.getElementById("contact-us");

    if (contactUs) {
      contactUs.innerHTML = html`
        <div class="container">
          <div class="py-[60px] contact-section">
            <div class="max-md:flex max-md:justify-center">
              <p
                class="section-title min-w-[150px] w-max !text-[#010101]"
                data-key="contactUsTitle"
              >
                Contact us
              </p>
            </div>
            <div
              class="mt-[40px] grid grid-cols-2 gap-[20px] max-md:grid-cols-1"
            >
              <div class="max-sm:flex max-sm:justify-center">
                <h2
                  class="become-valued-partner text-[60px] max-w-[500px] max-lg:text-[40px] max-md:text-center max-md:max-w-full max-sm:text-[25px] max-sm:max-w-[200px]"
                  data-key="becomePartnerTitle"
                >
                  Become a Valued Partner Today !
                </h2>
              </div>
              <div>
                <p
                  class="font-[500] text-[#888888] mb-[40px] max-md:text-center"
                  data-key="joinUsText"
                >
                  Join us to streamline your payment process!
                </p>
                <form id="contactForm">
                  <div class="grid grid-cols-2 gap-[30px] max-sm:grid-cols-1">
                    <input
                      type="text"
                      placeholder="Your name"
                      class="contact-input fullName"
                      data-key="yourNamePlaceholder"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your phone"
                      class="contact-input phoneNumber"
                      data-key="yourPhonePlaceholder"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your establishment"
                      class="contact-input organization"
                      data-key="yourEstablishmentPlaceholder"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Telegram link"
                      class="contact-input telegramLink"
                      data-key="telegramLinkPlaceholder"
                      required
                    />
                  </div>
                  <div
                    class="mt-[40px] flex items-center gap-[12px] max-sm:mt-[20px]"
                  >
                    <label class="checkbox" for="black">
                      <div>
                        <input
                          type="checkbox"
                          name="color"
                          id="black"
                          class="checkboxBtn"
                        />
                        <span class="checkmark"></span>
                      </div>
                      <span class="pl-[8px]" data-key="termsAndConditionsText">
                        You accept the
                        <a
                          href="#"
                          class="underline"
                          data-key="termsAndConditionsLink"
                          >Terms & Conditions</a
                        >
                        and <br />
                        <a
                          href="#"
                          class="underline"
                          data-key="privacyPolicyLink"
                          >Privacy Policy</a
                        >
                        by submitting your request.
                      </span>
                    </label>
                  </div>
                  <a href="#contact-us">
                    <button
                      class="btn dark big mt-[42px] max-sm:mt-[30px]"
                      data-key="becomePartnerButton"
                      id="submitBtn"
                    >
                      Become a partner
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      `;
      resolve("contact us loaded");
    } else {
      reject(new Error("contact us element not found!"));
    }
  });
};
