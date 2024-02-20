export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          title: "What We Do",
          megaMenu: true,
          link: "/",
          mega_menus: [
            {
              title: "BMC",
              link: "#",
              submenus: [
                { title: "BMC Helix ITSM", link: "/bmc-helix-itsm" },
                { title: "BMC Helix Remedyforce", link: "/bmc-helix-remedyforce" },
                { title: "BMC Helix Discovery", link: "/bmc-helix-discovery" },
                { title: "BMC Truesight", link: "/bmc-truesight" },
                { title: "BMC Control-M", link: "/bmc-control-m" },
                { title: "BMC Smart Reporting", link: "/bmc-smart-reporting" },
                { title: "BMC Client Management", link: "/bmc-client-management" },
                { title: "BMC Helix DWP", link: "/bmc-helix-dwp" },
                { title: "BMC Blade Logic", link: "/bmc-blade-logic" },
                { title: "BMC Training", link: "/bmc-training" },
              ],
            },
            {
              title: "Salesforce",
              link: "#",
              submenus: [
                { title: "Salesforce Sales Cloud", link: "/salesforce-sales-cloud" },
                { title: "Salesforce Service Cloud", link: "/salesforce-service-cloud" },
                { title: "Salesforce Commerce Cloud", link: "/salesforce-commerce-cloud" },
                { title: "Salesforce Marketing Cloud", link: "/salesforce-marketing-cloud" },
                { title: "Salesforce Comunity Cloud", link: "/salesforce-community-cloud" },
                { title: "Salesforce Integration Cloud", link: "/salesforce-integration-cloud" },
                { title: "Salesforce Data Cloud", link: "/salesforce-data-cloud" },
              ],
            },
            {
              title: "ServiceNow",
              link: "#",
              submenus: [
                { title: "ServiceNow It Service Management", link: "/servicenow-it-service-management" },
                { title: "ServiceNow IT Workflows", link: "/servicenow-it-workflows" },
                { title: "ServiceNow Knowledge Management", link: "/servicenow-knowledge-management" },
                { title: "ServiceNow Audit Management", link: "/servicenow-audit-management" },
                { title: "ServiceNow Configuration Compliance", link: "/servicenow-configuration-compliance" },
                { title: "ServiceNow IT Operations Management", link: "/servicenow-it-operations-management" },
              ],
            },
            {
              title: "AWS",
              link: "#",
              submenus: [
                { title: "Aws Consulting", link: "/aws-consulting" },
                { title: "Aws Cloud Migration", link: "/aws-cloud-migration" },
                { title: "Aws Cloud Security", link: "/aws-cloud-security" },
                { title: "Managed Cloud Services", link: "/managed-cloud-services" },
                { title: "Serverless Computing", link: "/serverless-computing" },
                { title: "Aws Market Enablement", link: "/aws-market-enablement" },
              ],
            },
            {
              title: "SAP",
              link: "#",
              submenus: [
                { title: "Sap Hana", link: "/sap-hana" },
                { title: "Sap Crm", link: "/sap-crm" },
                { title: "Sap Erp", link: "/sap-erp" },
                { title: "Sap Hr", link: "/sap-hr" },
                { title: "Sap Business Objects", link: "/sap-business-objects" },
                { title: "Sap Plm", link: "/sap-plm" },
              ],
            },
            {
              title: "Analytics",
              link: "#",
              submenus: [
                { title: "Qlikview", link: "/qlikview" },
                { title: "Tableau", link: "/tableau" },
                { title: "Power-Bi", link: "/power-bi" },
                { title: "QlikSense", link: "/qliksense" },
                { title: "Sap-Analytics", link: "/sap-analytics" },
              ],
            },
            {
              title: "Microsoft Dynamics 365",
              link: "#",
              submenus: [
                { title: "Business Central", link: "/business-central" },
                { title: "Finance", link: "/finance" },
                { title: "Supply Chain Management", link: "/supply-chain-management" },
                { title: "Sales", link: "/sales" },
                { title: "Customer Service", link: "/customer-service" },
                { title: "Project Operations", link: "/project-opertations" },
                { title: "Marketing", link: "/marketing" },
                { title: "Human Resource", link: "/human-resource" },

              ],
            },
            {
              title: "Oracle",
              link: "#",
              submenus: [
                { title: "OCI AI Services", link: "/oci-ai-services" },
                { title: "Application Development", link: "/application-development" },
                { title: "OCI Solutions", link: "/oci-solutions" },
                { title: "Oracle Managed services", link: "/oracle-managed-services" },
                { title: "Advisory Services", link: "/advisory-services" },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Offering",
          megaMenu: true,
          link: "/",
          mega_menus: [
            {
              title: "Solution",
              link: "#",
              submenus: [
                { title: "ERP", link: "/erp" },
                { title: "Operations Management", link: "/operations-management" },
                { title: "Finanacial Management", link: "/finanacial-management" },
                { title: "Payment Management", link: "/payment-management" },
                { title: "Supply Chain Management", link: "/supply-chain-management" },
                { title: "Data Analytics", link: "/data-analytics" },
                { title: "Asset Management", link: "/asset-management" },
                { title: "Fleet Management", link: "/fleet-management" },
                { title: "Human Resources", link: "/human-resources" },
                { title: "eLearning", link: "/elearning" },
                { title: "Document Management", link: "/document-management" },
                { title: "Project Management", link: "/project-management" },
                { title: "Ecommerce", link: "/ecommerce" },
                { title: "Marketing & Advertising", link: "/marketing-advertising" },
                { title: "Content Management", link: "/content-management" },
                { title: "Kiosk Software", link: "/kiosk-software" },
                { title: "Web Portals", link: "/web-portals" },
              ],
            },
            {
              title: "Services",
              link: "#",
              submenus: [
                { title: "Software Development", link: "/software-development" },
                { title: "Web Development", link: "/web-development" },
                { title: "Mobile App Development", link: "/mobile-app-development" },
                { title: "Testing & QA", link: "/testing-qa" },
                { title: "Application Services", link: "/application-services" },
                { title: "UI/UX Design", link: "/ui-ux-design" },
                { title: "Infrastructure Services", link: "/infrastructure-services" },
                { title: "Digital Transformation", link: "/digital-transformation" },
                { title: "Managed IT Services", link: "/managed-it-services" },
                { title: "IT Outsourcing", link: "/it-outsourcing" },
                { title: "IT Consulting", link: "/it-consulting" },
                { title: "IT Support", link: "/it-support" },
                { title: "Data Analytics", link: "/data-analytics" },
                { title: "Cybersecurity", link: "/cybersecurity" },

              ],
            },
          ],
        },
        // {
        //   id: 3,
        //   hasDropdown: true,
        //   title: "Innovation",
        //   link: "/",
        //   submenus: [
        //     { title: "Cloud", link: "/cloud" },
        //     { title: "Software as a Service(SAAS)", link: "/software-as-a-service" },
        //     { title: "Internet of Things", link: "/internet-of-things" },
        //     { title: "Big Data", link: "/big-data" },
        //     { title: "Data Science", link: "/data-science" },
        //     { title: "Machine Learning", link: "/machine-learning" },
        //     { title: "Artificial Intelligence", link: "/artificial-intelligence" },
        //     { title: "Blockchain", link: "/blockchain" },
        //     { title: "Virtual Reality", link: "/virtual-reality" },
        //     { title: "Computer Vision", link: "/computer-vision" },
        //     { title: "Microsoft", link: "/microsoft" },
        //     { title: "Azure", link: "/azure" },
        //     { title: "Power Apps", link: "/power-apps" },
        //     { title: "Dynamics 365", link: "/dynamics-three-sixty-five" },
        //     { title: "Sharepoint and Office 365", link: "/sharepoint-and-office-three-sixty-five" },
        //     { title: "PowerBI", link: "/powerbi" },
        //     { title: "Aamzon Web Services", link: "/aamzon-web-services" },
        //     { title: "Adobe Commerce", link: "/adobe-commerce" },
        //     { title: "Pimcore", link: "/pimcore" },
        //     { title: "Metaverse as a Service (MAAS)", link: "/metaverse-as-a-service" },
        //     { title: "IAAS", link: "/iaas" },

        //   ],
        // },

        {
          id: 3,
          title: "Innovation",
          megaMenu: true,
          link: "/",
          mega_menus: [
            {
              title: "Technology",
              link: "#",
              submenus: [
                { title: "Cloud", link: "/cloud" },
            { title: "Software as a Service(SAAS)", link: "/software-as-a-service" },
            { title: "Internet of Things", link: "/internet-of-things" },
            { title: "Big Data", link: "/big-data" },
            { title: "Data Science", link: "/data-science" },
            { title: "Machine Learning", link: "/machine-learning" },
            { title: "Artificial Intelligence", link: "/artificial-intelligence" },
            { title: "Blockchain", link: "/blockchain" },
            { title: "Virtual Reality", link: "/virtual-reality" },
            { title: "Computer Vision", link: "/computer-vision" },
            { title: "Microsoft", link: "/microsoft" },
            { title: "Azure", link: "/azure" },
            { title: "Power Apps", link: "/power-apps" },
            { title: "Dynamics 365", link: "/dynamics-three-sixty-five" },
            { title: "Sharepoint and Office 365", link: "/sharepoint-and-office-three-sixty-five" },
            { title: "PowerBI", link: "/power-bi" },
            { title: "Aamzon Web Services", link: "/aamzon-web-services" },
            { title: "Adobe Commerce", link: "/adobe-commerce" },
            { title: "Pimcore", link: "/pimcore" },
            { title: "Metaverse as a Service (MAAS)", link: "/metaverse-as-a-service" },
            { title: "IAAS", link: "/iaas" },

              ],
            },
            {
              title: "Industries",
              link: "#",
              submenus: [
                { title: "Financial Services", link: "/financial-services" },
                { title: "Banking", link: "/banking" },
                { title: "Insurance", link: "/insurance" },
                { title: "Lendin", link: "/lendin" },
                { title: "Investment", link: "/investment" },
                { title: "Fintech", link: "/fintech" },
                { title: "Payments", link: "/payments" },
                { title: "Retail", link: "/retail" },
                { title: "Healthcare", link: "/healthcare" },
                { title: "Manufacturing", link: "/manufacturing" },
                { title: "Professional Services", link: "/professional-services" },
                { title: "Transportation and Logistics", link: "/transportation-and-logistics" },
                { title: "Telecommunications", link: "/telecommunications" },
                { title: "Oil and Gas", link: "/oil-and-gas" },
                { title: "Construction", link: "/construction" },
                { title: "Travel and Hospitality", link: "/travel-and-hospitality" },


              ],
            },
          ],
        },
        {
          id: 4,
          hasDropdown: true,
          title: "Staff Augmentation",
          link: "/",
          submenus: [
            { title: "Java", link: "/java" },
            { title: ".NET", link: "/dot-net" },
            { title: "Python", link: "/python" },
            { title: "PHP", link: "/php" },
            { title: "Golang", link: "/golang" },
            { title: "C++", link: "/c-plus" },
            { title: "Node.js", link: "/nodejs" },
            { title: "React Native", link: "/react-native" },
            { title: "JavaScript", link: "/javascript" },
            { title: "Mobile", link: "/mobile" },

          ],
        },
        {
          id: 5,
          hasDropdown: true,
          title: "Company",
          link: "/",
          submenus: [
            { title: "About Us", link: "/about" },
            { title: "Testimonials", link: "/testimonials" },
            { title: "Contact Us", link: "/contact" },
            { title: "Company Brouchure", link: "/company-brouchure" },
            { title: "Job Opening", link: "/job-opening" },
            { title: "Free Trail", link: "/freetrail" },
            { title: "Portfolio", link: "/portfolio-2" },
          ],
        },
        // {
        //   id: 5,
        //   title: "Company",
        //   megaMenu: true,
        //   link: "/",
        //   pages: true,
        //   mega_menus: [
        //     {
        //       title: "Page Layout 1",
        //       link: "#",
        //       submenus: [
        //         { title: "About Us", link: "/about" },
        //         { title: "About Me", link: "/about-me" },
        //         { title: "Service Creative", link: "/services" },
        //         { title: "Service Standard", link: "/services-2" },
        //         { title: "Service Basic", link: "/services-3" },
        //         { title: "Service Details", link: "/service-details" },
        //         { title: "Help Center", link: "/help" },
        //       ],
        //     },
        //     {
        //       title: "Page Layout 2",
        //       link: "#",
        //       submenus: [
        //         { title: "Team Classic", link: "/team" },
        //         { title: "Team Details", link: "/team-details" },
        //         { title: "Event Details", link: "/event-details" },
        //         { title: "Job List", link: "/job" },
        //         { title: "Job Details", link: "/job-details" },
        //         { title: "Pricing Table", link: "/pricing" },
        //         { title: "Coming soon", link: "/coming-soon" },
        //       ],
        //     },
        //     {
        //       title: "Page Layout 3",
        //       link: "#",
        //       submenus: [
        //         { title: "Shop", link: "/shop" },
        //         { title: "Shop Right Sidebar", link: "/shop-right-sidebar" },
        //         { title: "Shop Details", link: "/product-details" },
        //         { title: "FAQs", link: "/faq" },
        //         { title: "Search Result", link: "/search" },
        //         { title: "Privacy & Policy", link: "/policy" },
        //         { title: "Terms & Conditions", link: "/terms" },
        //       ],
        //     },
        //     {
        //       title: "Page Layout 4",
        //       link: "#",
        //       submenus: [
        //         { title: "Error 404", link: "/404" },
        //         { title: "Login", link: "/login" },
        //         { title: "Register", link: "/register" },
        //         { title: "Forgot Password", link: "/forgot" },
        //         { title: "My Cart", link: "/cart" },
        //         { title: "My Wishlist", link: "/wishlist" },
        //         { title: "Checkout", link: "/checkout" },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   id: 6,
        //   hasDropdown: true,
        //   title: "Contact",
        //   link: "/contact",
        //   submenus: [
        //     { title: "Contact Agency", link: "/contact" },
        //     { title: "Contact: Classic", link: "/contact-2" },
        //   ],
        // },
      ],
    };
  },
};
