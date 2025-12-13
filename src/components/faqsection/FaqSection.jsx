import { useState } from "react";

const faqs = [
  {
    question: "How do I become funded by Trading Hustler?",
    answer:
      "In order to trade a funded account all traders are required to pass our Evaluation  process. Simply select your preferred account size and sign-up for the Evaluation.  After completing the Evaluation process, you will be offered a funded account.",
  },
  {
    question: "How many accounts can I trade?",
    answer:
      "Copytrading is allowed in MTF only with your own accounts. The total funded amount must not exceed $300K. You may have one funded account from each challenge type: one from 1-Step, one from 2-Step, and one from Instant Funding.",
  },
  {
    question:
      "Can I have a free retry?",
    answer:
      "You can find your promo code in the 'Affiliated Program' page. Share it with clients—when they purchase a challenge, you receive 8% of the paid amount.",
  },
  {
    question: "Do we have a scaling plan?",
    answer:
      "Trading high-impact news such as PPI, CPI, FOMC, or NFP is prohibited. Profits generated from trading during these events will not be counted as valid profit and will be considered a breach of rules.",
  },
  {
    question: "Is there a breach for inactivity?",
    answer:
      "Trading high-impact news such as PPI, CPI, FOMC, or NFP is prohibited. Profits generated from trading during these events will not be counted as valid profit and will be considered a breach of rules.",
  },
  {
    question: "Am I trading real money?",
    answer:
      "Trading high-impact news such as PPI, CPI, FOMC, or NFP is prohibited. Profits generated from trading during these events will not be counted as valid profit and will be considered a breach of rules.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div
        id="faq"
        className=" w-full py-28 text-white flex flex-col items-center px-4"
      >
        <div className="flex flex-col items-center gap-3 mb-10">
          <button
            style={{
              background:
                "linear-gradient(90deg, #0D0C0C 0%, #131716 50%, #0D0C0C 100%)",
            }}
            className=" text-[#4de3c9] px-8 py-3        
             rounded-md text-[16px] mb-3 cursor-pointer "
          >
            FAQ’s
          </button>
          <h1 className="text-2xl md:text-5xl  mb-5 text-[#999999] font-medium text-center">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="w-full max-w-4xl space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group bg-[linear-gradient(180deg,#0D0C0C,#121615)] hover:bg-[#151917] transition-colors rounded-xl p-5 shadow-lg border border-[#1A1A1A]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center cursor-pointer justify-between text-left"
                >
                  <h2 className="text-lg lg:text-xl font-medium">{item.question}</h2>

                  <span
                    className="flex items-center justify-center  hover:text-[#4de3c9] text-white transition-transform duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="pt-4 text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="all-faq"
          className="mt-10 text-sm hover:text-[#FFFBFB] text-gray-300 transition flex items-center gap-1"
        >
          Read all FAQ’s ↗
        </a>
      </div>
    </>
  );
}
