export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: " What is BMC Helix Control-M?",
          show: true,
          desc: "BMC Helix Control-M is a workflow orchestration solution with a centralized platform for managing and monitoring your workflows.",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "What are the benefits of using BMC Helix Control-M?",
          desc: "Benefits include increased efficiency, collaboration, visibility, and agility.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "How much does BMC Helix Control-M cost?",
          desc: "BMC Helix Control-M Pricing varies based on your specific requirements. Contact us for a customized quote.",
          parent:"faqaccordion",
        },
        {
          id:"four",
          title: "Is BMC Helix Control-M cloud-based or on-premise?",
          desc: "BMC Helix Control-M can be deployed on-premise or in the cloud.",
          parent:"faqaccordion",
        },
        {
          id:"five",
          title: "Why choose Dot Global Technologies as my BMC Helix Control-M Third-Party Vendor?",
          desc: "Ans: We offer unparalleled expertise, customization, flexibility, and comprehensive support to ensure your success with BMC Helix Control-M.",
          parent:"faqaccordion",
        },
      ],
    };
  },
};