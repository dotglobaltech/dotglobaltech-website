export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "What's ServiceNow? ",
          show: true,
          desc: "It's the cloud-based maestro of automation, streamlining workflows and empowering your business with a single platform.",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: " What does ServiceNow implementation cost? ",
          desc: "Dot Global Technologies, your trusted ServiceNow consultant, composes custom plans based on your needs and project scope, maximizing your ServiceNow ROI. We strive to offer ServiceNow customization, deployment, and support services at the most reasonable and competitive prices.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "Do I need a BMC Helix Discovery partner?",
          desc: "Absolutely! Partnering with a BMC Helix Discovery expert like Dot Global Technologies ensures you get the most out of your solution with customized implementation, ongoing support, and expert guidance, maximizing your return on investment.",
          parent:"faqaccordion",
        },
      ],
    };
  },
};