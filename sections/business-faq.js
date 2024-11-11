const html = (strings, ...values) => strings.raw[0];

export const BusinessFaqSection = () => {
  return new Promise((resolve, reject) => {
    // Wait for the DOM to be ready
    document.addEventListener("DOMContentLoaded", function () {
      const faq = document.getElementById("business-faq");

      if (faq) {
        faq.innerHTML = html`
          <div class="business-faq-section">
            <h2>Questions & Answers</h2>

            <div class="business-faq-item">
              <div class="business-faq-question">
                <span>1. What is your return policy?</span>
                <button class="toggle-answer">+</button>
              </div>
              <div class="business-faq-answer">
                <p>
                  Our return policy is simple... You can return items within 30
                  days of purchase.
                </p>
              </div>
            </div>

            <div class="business-faq-item">
              <div class="business-faq-question">
                <span>2. Do you offer free shipping?</span>
                <button class="toggle-answer">+</button>
              </div>
              <div class="business-faq-answer">
                <p>Yes! We offer free shipping on orders over $50.</p>
              </div>
            </div>

            <!-- Add more FAQ items here -->
          </div>
        `;

        console.log("something");
        // Set up the FAQ interactions
        const faqItems = document.querySelectorAll(".business-faq-item");

        faqItems.forEach((item) => {
          const question = item.querySelector(".business-faq-question");
          const button = question.querySelector(".toggle-answer");
          const answer = item.querySelector(".business-faq-answer");

          // Initially hide answers
          answer.style.display = "none";
          answer.style.height = "0";
          answer.style.opacity = "0";

          // GSAP animation to open and close the answer
          question.addEventListener("click", function () {
            const isOpen = answer.classList.contains("open");

            // Toggle question open state and change background
            question.classList.toggle("open");
            if (isOpen) {
              // Closing the answer
              gsap.to(answer, {
                duration: 0.5,
                height: 0,
                opacity: 0,
                padding: 0,
                ease: "power2.out",
                onComplete: function () {
                  answer.style.display = "none";
                  button.textContent = "+"; // Change to +
                },
              });
            } else {
              // Opening the answer
              answer.style.display = "block"; // Make sure it is displayed before animating
              gsap.to(answer, {
                duration: 0.5,
                height: "auto", // Let the content determine height
                opacity: 1,
                padding: "15px",
                ease: "power2.out",
                onStart: function () {
                  // Ensure GSAP runs after the element is available
                  if (!answer) {
                    console.error("Answer element not found for animation.");
                    return;
                  }
                },
              });
              button.textContent = "-";
            }
          });
        });
        resolve("faq loaded");
      } else {
        reject(new Error("faq element not found!"));
      }
    });
  });
};
