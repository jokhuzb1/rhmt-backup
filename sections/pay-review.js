const html = (strings, ...values) => strings.raw[0];

export const PayReviewSection = () => {
  return new Promise((resolve, reject) => {
    const payReview = document.getElementById("pay-review");

    if (payReview) {
      payReview.innerHTML = html`
        <div
          class="right-illustrator illustration absolute opacity-0 -z-[99] invisible"
        >
          <img
            src="./assets/icons/showcase-right-illustrator.svg"
            alt="Right Illustrator"
          />
        </div>
        <div
          class="container-pay-review  flex flex-col items-center justify-center max-w-[80%] overflow-hidden w-full opacity-0"
        >
          <div
            class="top-divs flex gap-[10px] z-[999] mb-[175px] -translate-x-[2000px]"
          >
            <img
              src="/assets/payment-images/img_0.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_1.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_2.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_3.png"
              alt="animated payment img"
              class="top-div w-[230px] py-[5px]"
            />
          </div>
          <div class="main-div w-[200px] h-[350px] absolute rotate-[90deg]">
            <img
              src="/assets/phone.png"
              width="200px"
              alt="animated phone"
              class="phone-image w-full h-full object-contain z-[9999]"
            />
          </div>
          <div
            class="bottom-divs flex gap-[10px] z-[999] mt-[175px] translate-x-[2000px]"
          >
            <img
              src="/assets/payment-images/img_4.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_5.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_6.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px]"
            />
            <img
              src="/assets/payment-images/img_6.png"
              alt="animated payment img"
              class="bottom-div w-[230px] py-[5px]"
            />
          </div>
        </div>
        <div
          class="left-illustrator illustration absolute opacity-0 -z-[99] invisible"
        >
          <img
            src="./assets/icons/showcase-left-illustrator.svg"
            alt="Left Illustrator"
          />
        </div>
      `;
      resolve("pay review loaded");
    } else {
      reject(new Error("pay review element not found!"));
    }
  });
};
