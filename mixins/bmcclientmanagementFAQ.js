export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "What is BMC Helix Client Management?",
          show: true,
          desc: "It's a tool for automating and monitoring endpoints on a network. We are a BMC Helix Client Management Support Service Provider in India, customizing, deploying, and managing the solutions for our clients across various sectors.",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "What is BMC Helix Client Management Used For?",
          desc: "It helps manage IT assets, enforce security policies, and resolve technical issues faster.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "How Much Does BMC Helix Client Management Cost?",
          desc: "BMC Helix Client Management Pricing depends on your specific needs. Contact us for a custom quote.",
          parent:"faqaccordion",
        },
        {
          id:"four",
          title: "Why Do You Need a BMC Helix Client Management Service Provider?",
          desc: "Reputed BMC Helix Client Management Managed Service Providers like Dot Global Technologies offer expertise in implementing, managing, and supporting the solution.",
          parent:"faqaccordion",
        },
      ],
    };
  },
};