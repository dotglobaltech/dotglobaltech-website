export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: " What is Salesforce? ",
          show: true,
          desc: "Salesforce is a San Francisco-based cloud software solutions company providing customer relationship management solutions and tools focused on sales, service management, analytics, marketing automation, and application development. As a Salesforce Partner, we customize and implement these solutions per your business-specific requirements.",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "What is Salesforce used for? ",
          desc: "Salesforce is a globally renowned customer relationship management platform. Through our Salesforce Managed Services, we help you adopt this solution to unify your teams and deliver exceptional customer experiences.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "What does the Salesforce company do? ",
          desc: "Salesforce develops cloud-based solutions to help businesses find prospects, win business, and enhance customer experiences. As reputed Salesforce vendors, we deploy and ensure your business maximizes these solutions.",
          parent:"faqaccordion",
        },
        {
          id:"four",
          title: "What are the benefits of Salesforce?",
          desc: "Enjoy improved customer satisfaction, enhanced team collaboration, seamless reporting, excellent data accessibility, effective automation, and increased productivity with Salesforce.",
          parent:"faqaccordion",
        },
        {
          id:"five",
          title: " Why do you need a Salesforce Service Provider?",
          desc: "A Salesforce Third-Party Vendor deploys certified professionals to customize and implement solutions tailored to your business. Their expertise is crucial for effective customization, troubleshooting, and ongoing management, including providing Salesforce training for your IT teams.",
          parent:"faqaccordion",
        },
      ],
    };
  },
};