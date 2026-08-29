import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import "./Faq.css";

const textMap = {
  initial:
    "Welcome to the R.B.B securities company limited Frequently asked questions sections. Please select an option from the left sidebar to view to go according to your required context questions.",
  all: "Showing all categories related questions which are frequently asked.",
  kyc: "Showing all frequently asked questions regarding identity verification, required documents, and account safety.",
  demat:
    "Showing all frequently asked questions about opening, managing, and maintaining your Demat account.",
  collateral:
    "Showing all frequently asked questions regarding cash loading, trading limits.",
  payment:
    "Showing all frequently asked questions about depositing funds, paying for purchased shares, and managing bank transfers.",
  settlement:
    "Showing all frequently asked questions about the T+2 trade cycle, EDIS deadlines, and receiving money for sold shares.",
};

const faqData = [
  {
    id: "kyc",
    categoryName: "For KYC",
    items: [
      {
        q: "I'm new to the stock market. What do I need before I can trade?",
        a: `Before you can start trading, you'll need:

* **Demat (BOID) account** – to hold your shares electronically.
* **MeroShare account** – to manage your investments, apply for IPOs and transfer shares.
* **Trading account** – to buy and sell shares through us.

If you don't have any of these accounts yet, our team will help you open them. In most cases, the process can be completed online, or you can visit our office or nearest branch for assistance.`,
      },
      {
        q: "How can I Open an account? What documents do I need to open an account with R.B.B. Securities?",
        a: `To open an account at R.B.B. Securities, you need to fill up your KYC form and submit the following documents:

**Required documents for TMS KYC (Individual) form:**
* Scan copy of Citizenship.
* Clear Scan copy of National identity card (NID).
* Clear Scan copy of PAN (If client has).
* Clear Scan copy of Demat Confirmation.
* Clear Scan copy of Employee ID (If client is employed).
* Clear Scan copy of Student ID (If client is Student).

**Required documents for TMS KYC (Individual) form (In case of Minor):**
* Clear Scan copy of Birth Certificate.
* Clear Scan copy of Guardian's National identity card (NID).
* Clear Scan copy of Guardian's Citizenship.
* Clear Scan copy of Demat Confirmation.
* Clear Scan copy of Guardian's Employee ID (If Guardian is employed).
* Clear Scan copy of Student ID (If client is Student).`,
      },
      {
        q: "Do I need to visit your office in person, or can I open an account online?",
        a: `You can visit our office at Durbarmarg in person for account opening.
OR
We offer KYC account opening for clients through RBBL Branch office. Please visit any of RBB branch offices to complete account opening. If you're unsure which applies to you, just call us and we'll guide you through the fastest option. For those customers who opens TMS account through RBB Branch office, online registration is mandatory at [TMS Client Registration](https://tms97.nepsetms.com.np/client-registration).`,
      },
      {
        q: "Can I open an account if I live outside Kathmandu?",
        a: `Yes. We offer KYC account opening for clients through any RBB Branch office across the country.

*Please note: Online registration is mandatory for branch-assisted account opening at [TMS Client Registration](https://tms97.nepsetms.com.np/client-registration).*`,
      },
      {
        q: "Do I need to register my TMS account online and fill out a physical form as well?",
        a: `If you visit in person our R.B.B. Securities office at Durbarmarg, online registration is not mandatory but If you opens TMS account through RBB Branch office, online registration is mandatory at [TMS Client Registration](https://tms97.nepsetms.com.np/client-registration).`,
      },
      {
        q: "How long does account opening take?",
        a: "Once we receive your complete set of documents, your Demat and TMS accounts are usually approved within 1 business day.",
      },
      {
        q: "I need to change my email/Mobile number of tms account.",
        a: "You can find the update form in the Downloads section of our website. Please fill it out, attach a copy of your ID, and send it to us at securitiesrbb@gmail.com.",
      },
      {
        q: "I forgot my TMS password — what do I do?",
        a: "You can reset by clicking forgot password in the online TMS login or you can contact us for reset mail.",
      },
      {
        q: "What are the charges of opening and renewing of TMS / broker account?",
        a: "Opening a TMS (Trading/Broker) account with R.B.B. Securities is free of charge. There are no renewal fees.",
      },
      {
        q: "I'm not 18 yet — can I still invest?",
        a: "A parent or legal guardian can open and operate an account on a minor's behalf.",
      },
      {
        q: "What are your trading hours?",
        a: "We follow NEPSE's official trading hours: Monday to Friday, 10:00 AM to 5:00 PM. We're closed on Saturdays, Sundays and NEPSE-declared holidays.",
      },
      {
        q: "How do I place a buy or sell order?",
        a: `Once your trading account is active:

* Log in to the TMS platform at [tms97.nepsetms.com.np/login](https://tms97.nepsetms.com.np/login) using your assigned credentials.
* View live market prices and place buy/sell orders directly.
* Track your order status in real time.`,
      },
      {
        q: "How quickly are my trades settled, and when do I get my money after selling?",
        a: "We follow a T+2 settlement cycle, meaning funds from a sale are typically credited to your linked bank account two working days after the trade date.",
      },
    ],
  },
  {
    id: "demat",
    categoryName: "For Demat",
    items: [
      {
        q: "What documents do I need to open a demat account with R.B.B. Securities?",
        a: `To open a Demat account at R.B.B. Securities, fill out your Demat form and submit the following documents:

**Required documents for Demat (Individual) form:**
* Scan copy of Citizenship.
* Clear Scan copy of National identity card (NID).
* Clear Scan copy of PAN (If client has).
* Clear Scan copy of Employee ID (If client is employed).
* Clear Scan copy of Student ID (If client is Student).

**Required documents for Demat (In case of Minor):**
* Clear Scan copy of Birth Certificate.
* Clear Scan copy of Guardian's National identity card (NID).
* Clear Scan copy of Guardian's Citizenship.
* Clear Scan copy of Guardian's Employee ID (If Guardian is employed).
* Clear Scan copy of Student ID (If client is Student).`,
      },
      {
        q: "Do I need to visit your office in person, or can I open an account online?",
        a: "You can visit our office at Durbarmarg in person for demat account opening. Currently there is no facility for online demat account opening.",
      },
      {
        q: "What are the charges for demat account opening?",
        a: `To open a Demat account, you have to pay a total fee of **Rs. 200**:

* **Account Opening Fee:** Rs. 50
* **Account Maintenance Fee:** Rs. 100
* **MeroShare Fee:** Rs. 50

*These are standard CDSC/DP charges, not additional charges from us. We don't charge a separate account maintenance fee for inactivity.*`,
      },
      {
        q: "Can I open multiple Demat accounts?",
        a: "Yes. You may open a maximum of two Demat accounts, provided they are maintained with different Depository Participants (DPs).",
      },
      {
        q: "What is the main difference between a Demat and Trading account?",
        a: "A Trading account is used to buy and sell shares, while a Demat account stores shares safely.",
      },
      {
        q: "How do I receive cash dividends from my shares?",
        a: "Cash dividends are credited directly to your linked bank account, not into your Demat account.",
      },
      {
        q: "What charges are involved in running a Demat account?",
        a: "The main costs are an Annual Maintenance Charge (AMC) and a small transaction fee whenever you sell shares.",
      },
    ],
  },
  {
    id: "collateral",
    categoryName: "For Collateral",
    items: [
      {
        q: "Is collateral required for trading?",
        a: "Collateral is mandatory for trading. In order to buy shares, you must load collateral amount and get the trading limit. R.B.B. Securities maintains a 1:1 collateral policy.",
      },
      {
        q: "How can I load collateral?",
        a: `To load collateral via TMS:

* Log in to your TMS account at [tms97.nepsetms.com.np](https://tms97.nepsetms.com.np).
* Go to **"Fund Management"** from the navigation panel.
* Click on **"Collateral Management"**.
* Select **"Load Collateral"**.
* Select your bank, account type, and enter the amount.
* Click **"Submit"** to complete the transaction.

*Alternative Method: You can also transfer funds directly via Connect IPS or bank transfer to our linked accounts.*`,
      },
      {
        q: "How can we Manage Collateral from TMS?",
        a: `To manage collateral from your dashboard:

* Log in to your TMS account at [tms97.nepsetms.com.np](https://tms97.nepsetms.com.np).
* Go to **"Fund Management"** -> **"Collateral Management"**.
* Perform key actions: **Load Collateral** (add funds), **Refund Collateral** (withdraw funds), or view your **Collateral Balance** and **Transaction History**.`,
      },
      {
        q: "How can we refund the collateral?",
        a: `To request a collateral refund:

* Log in to your TMS account at [tms97.nepsetms.com.np](https://tms97.nepsetms.com.np).
* Go to **"Fund Management"** -> **"Collateral Management"** -> **"Refund Collateral"**.
* Enter your bank account number and the amount to refund.
* Click **"Submit"**.`,
      },
      {
        q: "What happens to my collateral if I don't buy any shares?",
        a: "It remains safely in your trading/TMS account as a free limit, and you can request a collateral refund back to your bank account at any time.",
      },
      {
        q: "How do I reach customer support?",
        a: `You can reach our team through the following channels:

* **Phone:** 9851364896 / 015921895 / 015921895
* **Email:** info@rbbsecurities.com.np, securitiesrbb@gmail.com
* **Office Hours:** 9:00 AM – 5:00 PM
* **Branch Address:** Durbarmarg, Kathmandu`,
      },
    ],
  },
  {
    id: "payment",
    categoryName: "For Payment",
    items: [
      {
        q: "What payment methods are supported?",
        a: "We support eBanking, mobile wallets (like eSewa/Khalti), connectIPS, and direct bank transfers/cheques.",
      },
      {
        q: "What is the deadline to pay for shares I bought?",
        a: "Payments must be settled by T+2 (within 2 business days of placing the buy trade).",
      },
      {
        q: "What happens if I fail to pay for my bought shares on time?",
        a: "The broker may freeze your trading account, charge interest(12%) on the due balance as decided by management",
      },
      {
        q: "Can I use someone else's bank account to pay for my trades?",
        a: "No. Payments must be made strictly from a bank account registered in your own name to comply with Anti-Money Laundering (AML) regulations.",
      },
    ],
  },
  {
    id: "settlement",
    categoryName: "For Settlement",
    items: [
      {
        q: "What is the standard timeline for trade settlements?",
        a: "Equities follow a standard T+2 settlement cycle, meaning funds or shares will be credited/debited two business days after the transaction date.",
      },
      {
        q: "When will I receive money in my bank account after selling shares?",
        a: "Settlement occurs on T+2. You will receive the payout directly in your linked bank account by T+2 working days, provided you complete EDIS on time.",
      },
      {
        q: "Why haven't I received payment for shares I sold?",
        a: "Your payment can be delayed if you missed the EDIS transfer deadline, there is a public holiday, or your bank details do not match.",
      },
      {
        q: "What is EDIS, and why is it necessary to get my money?",
        a: "EDIS (Electronic Debit Instruction Slip) authorizes your broker to transfer sold shares from your Demat account to the buyer. Without EDIS, the trade cannot settle, and payment cannot be released.",
      },
    ],
  },
];

// Helper to parse Markdown-style text inside answers safely
const formatAnswer = (text) => {
  let formattedText = text.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );
  formattedText = formattedText.replace(
    /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  const lines = formattedText.split("\n");
  let inList = false;
  let parsedHTML = "";

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("* ")) {
      if (!inList) {
        inList = true;
        parsedHTML += '<ul class="faq-bullet-list">';
      }
      parsedHTML += `<li>${trimmed.substring(2)}</li>`;
    } else {
      if (inList) {
        inList = false;
        parsedHTML += "</ul>";
      }
      if (trimmed.length > 0) {
        parsedHTML += `<p>${trimmed}</p>`;
      }
    }
  });

  if (inList) parsedHTML += "</ul>";
  return { __html: parsedHTML };
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("kyc");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const handleSidebarHeaderClick = () => {
    setActiveCategory("all");
    setOpenAccordion(null);
    setAnimKey((prev) => prev + 1);
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setOpenAccordion(null);
    setAnimKey((prev) => prev + 1);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const categoriesToDisplay =
    activeCategory === "all"
      ? faqData
      : faqData.filter((cat) => cat.id === activeCategory);

  return (
    <div className="faq-page">
      {/* Hero Banner Section */}
      <section className="custom-jpg-hero">
        <div className="hero-container">
          <h1 className="hero-title">FAQs</h1>
        </div>
      </section>

      {/* Interactive Main Area */}
      <div className="main-wrapper">
        <div className="faq-main-card">
          <div className="faq-container">
            {/* Sidebar Navigation */}
            <div className="faq-sidebar">
              <div
                className={`sidebar-header ${
                  activeCategory === "all" ? "active" : ""
                }`}
                onClick={handleSidebarHeaderClick}
              >
                <span>FAQ Categories</span>
              </div>

              {faqData.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <span>{cat.categoryName}</span>
                    <ArrowRight className="tab-btn-icon" size={16} />
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="faq-content" key={animKey}>
              <h2 className="faq-title">Frequently Asked Questions</h2>

              <div className="faq-context-desc mb-3 text-muted">
                {textMap[activeCategory] || textMap.initial}
              </div>

              <div className="tab-content active">
                {categoriesToDisplay.flatMap((cat) =>
                  cat.items.map((item, idx) => {
                    const uniqueId = `${cat.id}-${idx}`;
                    const isOpen = openAccordion === uniqueId;

                    return (
                      <div
                        key={uniqueId}
                        className={`accordion-item ${isOpen ? "active" : ""}`}
                      >
                        <button
                          className="accordion-header"
                          onClick={() => toggleAccordion(uniqueId)}
                        >
                          <span>{item.q}</span>
                          <ChevronDown className="toggle-icon" size={18} />
                        </button>
                        <div className="accordion-body">
                          <div
                            className="faq-answer"
                            dangerouslySetInnerHTML={formatAnswer(item.a)}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}