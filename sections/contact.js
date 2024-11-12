const html = (strings, ...values) => strings.raw[0];

export const Contacts = () => {
  return new Promise((resolve, reject) => {
    const contacts = document.getElementById("contacts");

    if (contacts) {
      contacts.innerHTML = html`
        <div class="flex-container">
          <div class="text-content">
            <h2
              data-key="contactUs"
              style="
                padding: 2px 23px;
                border-radius: 50px;
                border: 1px solid #d8d9d8;
                font-size: 16px;
                width: max-content;
                "
            >
              Contact Us
            </h2>
            <h3
              class="text-[50px] text-[#010101] mt-[40px] w-full max-w-[500px] max-md:text-[25px] max-md:!text-center"
              data-key="becomePartnerTitle"
            >
              Become a Valued Partner Today !
            </h3>
          </div>
          <div class="form-container"></div>
        </div>
        <style>
          #contacts {
            padding: 30px;
            background-color: #ffff;
            border-radius: 8px;
          }
          .b24-form-shadow {
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
          }
          .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: start;
            flex-wrap: wrap;
          }

          .text-content {
            flex: 1;
            max-width: 50%;
            margin-right: 20px;
            min-width: 250px;
            text-align: start;
            font-family: "Arial", sans-serif;
            color: #333;
          }

          .text-content h2 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .text-content p {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .form-container {
            flex: 1;
            max-width: 70%;
            min-width: 250px;
          }

          .b24-form-btn-container,
          .b24-form-btn-block {
            display: flex !important;
            justify-content: center;
            align-items: center;
          }
          .form-container form > div:first-child {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .b24-form-btn {
            background-color: #010101;
            color: white;
            padding: 0 14px !important;
            border-radius: 50px !important;
            cursor: pointer;
            font-size: 1.2rem;
            transition: opacity 0.3s, color 0.3s;
            margin-top: 15px;
            text-transform: uppercase;
            min-width: 177px !important;
            max-width: auto !important;
            width: auto !important;
            max-height: auto !important;
            height: 40px !important;
            min-height: auto !important;
          }

          .b24-form-btn:hover {
            opacity: 0.9;
            background-color: #010101 !important;
            color: white !important;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .text-content,
            .form-container {
              max-width: 100%;
            }
            .text-content {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .text-conent h2,
            .text-conent {
              text-align: center !important;
              margin: 0 auto;
              background: blue !important;
            }
          }

          @media (max-width: 400px) {
            .form-container form > div:first-child {
              grid-template-columns: repeat(1, minmax(0, 1fr));
              gap: 10px;
            }
          }
          /* .b24-form-control-alert-message::before,
          .b24-form-control-alert-message::after {
            content: "" !important;
          } */
        </style>
      `;

      const script = document.createElement("script");
      script.setAttribute("data-b24-form", "inline/37/fui8yo");
      script.setAttribute("data-skip-moving", "true");
      script.async = true;
      script.src =
        "https://crm.multibank.uz/upload/crm/form/loader_37_fui8yo.js";

      contacts.querySelector(".form-container").appendChild(script);
      // const observer = new MutationObserver((mutationsList, observer) => {
      //   const alertElements = document.querySelectorAll(
      //     ".b24-form-control-alert-message"
      //   );
      //   if (alertElements.length > 0) {
      // alertElements.forEach((i) => {
      //   i.setAttribute("data-key", "alert");
      //   i.innerText = "";
      // });
      //     observer.disconnect();
      //     resolve("contacts loaded");
      //   }
      // });

      // observer.observe(contacts.querySelector(".form-container"), {
      //   childList: true,
      //   subtree: true,
      // });

      resolve("contacts loaded");
    } else {
      reject(new Error("contacts element not found!"));
    }
  });
};
