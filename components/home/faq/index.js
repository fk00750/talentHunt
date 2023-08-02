import React, { useState } from "react";

function FAQs() {
  const [isOpen, setIsOpen] = useState({});

  const toggleAnswer = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const questions = [
    {
      question: "What is the MKC Talent Hunt?",
      answer:
        "The MKC Talent Hunt is a competitive exam that is designed to assess the academic potential of students who are preparing for the JEE, NEET, or Defence exams. The talent hunt will include a mock test, personalized feedback, scholarship opportunities, networking opportunities, and motivational talks.",
    },
    {
      question: "How can I get more information about the MKC Talent Hunt?",
      answer:
        "You can get more information about the MKC Talent Hunt by visiting the MKC Talent Hunt website or by contacting the MKC helpline number 9696330033.",
    },
    {
      question: "What are the dates and timings of the MKC Talent Hunt?",
      answer: "The dates and timings will be mentioned on the Admit Card.",
    },
    {
      question: "What is eligibility for MKC Talent Hunt?",
      answer:
        "The students who are appearing in 10th, 11th, 12th and 12th passed out from any board.",
    },
    {
      question:
        "What are the prizes and scholarships that are offered by the MKC Talent Hunt?",

      answer:
        "The talent hunt will offer a number of prizes and scholarships to the top performers. The prizes include cash prizes, scholarships, and study materials.",
    },
    // Add more questions and answers as needed
  ];

  return (
    <section className="bg-white">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
          Frequently asked questions
        </h1>

        <div className="mt-12 space-y-8">
          {questions.map((faq, index) => (
            <div key={index} className="border-2 border-gray-100 rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className="font-semibold text-gray-700">{faq.question}</h1>
                <span
                  className={`text-white ${
                    isOpen[index] ? "bg-blue-500" : "bg-gray-200"
                  } rounded-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen[index] ? "M18 12H6 " : "M18 12H6"}
                    />
                  </svg>
                </span>
              </button>

              {isOpen[index] && (
                <>
                  <hr className="border-gray-200" />
                  <p className="p-8 text-sm text-gray-500">{faq.answer}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
