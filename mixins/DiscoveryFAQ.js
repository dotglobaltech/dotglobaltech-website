export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "What is BMC Helix Remedyforce?",
          show: true,
          desc: "BMC Helix Remedyforce is a comprehensive IT service management solution that easily scales to meet the needs of mid-sized businesses.It integrates seamlessly with Salesforce to combine IT operations management (ITOM) and cognitive capabilities, ensuring improved security, compliance, and productivity for your business.",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "Is BMC Helix Discovery cloud-based?",
          desc: "Yes! BMC Helix Discovery is a SaaS-based solution that can be deployed in cloud, hybrid, or on-premises environments, offering maximum flexibility and scalability.",
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