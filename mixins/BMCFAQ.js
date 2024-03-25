export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "What is BMC?",
          show: true,
          desc: "BMC is a leading provider of enterprise software solutions for service management, workflow orchestration, automation, DevOps, AIOps, and security. ",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "What is BMC Used For? ",
          desc: "BMC solutions help businesses automate and improve IT operations, manage IT assets, optimize service delivery, and gain valuable insights into their IT environment.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "How Much Do BMC Solutions Cost?",
          desc: "The cost of BMC solutions varies depending on the specific products and services you need. Dot Global Technologies offers competitive pricing and can help you find a solution that fits your budget. ",
          parent:"faqaccordion",
        },
        {
          id:"four",
          title: "Is BMC Cloud-Based or On-Premise?",
          desc: "BMC offers various deployment options, including on-premise, cloud-based, and hybrid. Dot Global Technologies can help you choose the best-suited deployment model for your operational needs. ",
          parent:"faqaccordion",
        },
        {
          id:"five",
          title: " Why Work With a BMC Support Services Provider? ",
          desc: "Working with a BMC support services provider like Dot Global Technologies can help you ensure that your BMC solutions are implemented and maintained correctly. We have the expertise and experience to help you get the best ROI on your investment in BMC solutions.",
          parent:"faqaccordion",
        },
      ],
    };
  },
};