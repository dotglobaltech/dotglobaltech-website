export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "What is the cost of BMC Helix Discovery?",
          show: true,
          desc: "As your trusted BMC Helix Discovery Partner, we understand that pricing needs vary based on your specific requirements. Contact Dot Global Technologies today for a personalized quote tailored to your unique needs and budget.",
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