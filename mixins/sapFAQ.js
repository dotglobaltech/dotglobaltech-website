export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: " What is SAP?",
          show: true,
          desc: " SAP is a leading Enterprise Resource Planning (ERP) software provider, helping businesses seamlessly manage their data and operations. ",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "What are the benefits of SAP?  ",
          desc: "  SAP empowers businesses with increased efficiency, improved decision-making, enhanced customer experiences, and streamlined operations.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: " Is SAP cloud-based? ",
          desc: "Yes, SAP offers various cloud-based solutions, including SAP Analytics Cloud and SAP S/4HANA.",
          parent:"faqaccordion",
        },
        {
          id:"four",
          title: "How much does SAP cost? ",
          desc: "SAP pricing depends on your specific needs and requirements. Contact Dot Global Technologies for a personalized quote.",
          parent:"faqaccordion",
        },
        {
          id:"five",
          title: "Why choose DGT as your SAP Consultant? ",
          desc: "Dot Global Technologies provides comprehensive expertise, a client-centric approach, and a proven track record of success. We are your trusted partner for driving digital transformation with SAP. ",
          parent:"faqaccordion",
        },
      ],
    };
  },
};