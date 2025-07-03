import React from "react";

function CreateTicket() {
  const sections = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Finovue Account",
      icon: "fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-line-chart",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-credit-card",
      links: ["Add money", "Withdraw money", "Failed transfers", "Fund statement"],
    },
    {
      title: "Console",
      icon: "fa-desktop",
      links: ["Portfolio", "Corporate actions", "Tax P&L", "Reports", "Family accounts"],
    },
    {
      title: "Coin",
      icon: "fa-circle-o",
      links: ["Mutual funds", "National Pension Scheme (NPS)", "SIP", "Coin app issues"],
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="fs-4 fw-bold mb-4 text-center">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row">
        {sections.map((section, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="p-3">
              <h5 className="mb-3">
                <i className={`fa ${section.icon} me-2`} aria-hidden="true"></i>
                {section.title}
              </h5>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href="?"
                      className="text-decoration-none text-primary"
                      style={{ lineHeight: "1.8", fontSize: "15px" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
