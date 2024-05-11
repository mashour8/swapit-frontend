import { useState } from "react";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfer. You can choose the payment method that is most convenient for you during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track the status of your order on our website or the courier's website.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries worldwide. Shipping rates and delivery times may vary depending on your location. Please refer to our shipping policy for more information.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the item(s) within 30 days of delivery for a full refund or exchange. Please refer to our return policy for more details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "If you have any questions or need assistance, our customer support team is available to help you. You can contact us via email, phone, or live chat during our business hours.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-md">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-6">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
