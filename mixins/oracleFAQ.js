export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: " What is Oracle Cloud? ",
          show: true,
          desc: "Oracle Cloud is a comprehensive suite of cloud-based services encompassing everything from Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) to Software as a Service (SaaS). It is a secure, scalable, and flexible online platform for hosting your applications, data, and business processes. ",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "How Much Does Oracle Cloud Cost?",
          desc: "Oracle Cloud pricing is flexible and depends on your specific needs. Factors like your chosen services, resource usage, and subscription model influence it. However, Oracle offers various pricing options, including pay-as-you-go, subscription-based, and committed-use models, allowing you to tailor your spending to your budget. Dot Global Technologies, your trusted Oracle Cloud third-party vendors, customize the solution to your business-specific needs.  ",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "What Business Outcomes Can You Achieve By Adopting Oracle Cloud?",
          desc: "Adopting Oracle Cloud unlocks a plethora of benefits: ",
          parent:"faqaccordion",
        },
        
      ],
    };
  },
};