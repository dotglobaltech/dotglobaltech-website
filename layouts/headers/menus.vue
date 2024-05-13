<template>
  <ul>
    <li v-for="(menu, i) in menuData" :key="i" :class="`has-dropdown ${menu.megaMenu ? 'has-mega-menu' : ''}`">
      <NuxtLink :to="menu.link">
        {{ menu.title }}
      </NuxtLink>
      <ul v-if="menu.hasDropdown" class="submenu">
        <li v-for="(sub, i) in menu.submenus" :key="i">
          <NuxtLink :to="sub.link">
            {{ sub.title }}
          </NuxtLink>
        </li>
      </ul>
      <ul v-if="menu.mega_menus" class="mega-menu">
        <li v-for="(mega, i) in menu.mega_menus" :key="i">
          <div class="award__icon-5">
            <img class="award__icon-5" :src="mega.icon" alt="icons" />
          </div>
          <NuxtLink :to="mega.link" class="mega-menu-title">
            {{ mega.title }}
          </NuxtLink>
          <ul>
            <li v-for="(sub_mega, i) in mega.submenus" :key="i">
              <NuxtLink :to="sub_mega.link">
                {{ sub_mega.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import bmc from "~/assets/img/home/bmc.svg";
import salesforce from "~/assets/img/home/salesforce.svg";
import servicenow from "~/assets/img/home/servicenow.svg";
import aws from "~/assets/img/home/aws.svg";
import sap from "~/assets/img/home/sap.svg";
import analytics from "~/assets/img/home/analytics.svg";
import dynamic from "~/assets/img/home/dynamic.svg";
import oracle from "~/assets/img/home/oracle.svg";

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
              icon: bmc,
              id: 1,
              title: "BMC",
              link: "/bmc",
              submenus: [
                { title: "BMC Helix ITSM", link: "/bmc-helix-itsm" },
                { title: "BMC Helix Remedyforce", link: "/bmc-helix-remedyforce" },
                { title: "BMC Helix Discovery", link: "/bmc-helix-discovery" },
                { title: "BMC Truesight", link: "/coming-soon" },
                { title: "BMC Control-M", link: "/bmc-control-m" },
                { title: "BMC Smart Reporting", link: "/bmc-smart-reporting" },
                { title: "BMC Client Management", link: "/bmc-client-management" },
                { title: "BMC Helix DWP", link: "/bmc-helix-dwp" },
                { title: "BMC Blade Logic", link: "/coming-soon" },
                { title: "BMC Training", link: "/coming-soon" },
              ],
            },
            {
              icon: salesforce,
              title: "Salesforce",
              link: "/salesforce",
              submenus: [
                { title: "Salesforce Sales Cloud", link: "/coming-soon" },
                { title: "Salesforce Service Cloud", link: "/coming-soon" },
                { title: "Salesforce Commerce Cloud", link: "/coming-soon" },
                { title: "Salesforce Marketing Cloud", link: "/coming-soon" },
                { title: "Salesforce Comunity Cloud", link: "/coming-soon" },
                { title: "Salesforce Integration Cloud", link: "/coming-soon" },
                { title: "Salesforce Data Cloud", link: "/coming-soon" },
              ],
            },
            {
              icon: servicenow,
              title: "ServiceNow",
              link: "/servicenow",
              submenus: [
                { title: "ServiceNow It Service Management", link: "/coming-soon" },
                { title: "ServiceNow IT Workflows", link: "/coming-soon" },
                { title: "ServiceNow Knowledge Management", link: "/coming-soon" },
                { title: "ServiceNow Audit Management", link: "/coming-soon" },
                { title: "ServiceNow Configuration Compliance", link: "/coming-soon" },
                { title: "ServiceNow IT Operations Management", link: "/coming-soon" },
              ],
            },
            {
              icon: aws,
              title: "AWS",
              link: "/aws",
              submenus: [
                { title: "Aws Consulting", link: "/coming-soon" },
                { title: "Aws Cloud Migration", link: "/coming-soon" },
                { title: "Aws Cloud Security", link: "/coming-soon" },
                { title: "Managed Cloud Services", link: "/coming-soon" },
                { title: "Serverless Computing", link: "/coming-soon" },
                { title: "Aws Market Enablement", link: "/coming-soon" },
              ],
            },
            {
              icon: sap,
              title: "SAP",
              link: "/sap",
              submenus: [
                { title: "Sap Hana", link: "/coming-soon" },
                { title: "Sap Crm", link: "/coming-soon" },
                { title: "Sap Erp", link: "/coming-soon" },
                { title: "Sap Hr", link: "/coming-soon" },
                { title: "Sap Business Objects", link: "/coming-soon" },
                { title: "Sap Plm", link: "/coming-soon" },
              ],
            },
            {
              icon: analytics,
              title: "Analytics",
              link: "/coming-soon",
              submenus: [
                { title: "Qlikview", link: "/coming-soon" },
                { title: "Tableau", link: "/coming-soon" },
                { title: "Power-Bi", link: "/coming-soon" },
                { title: "QlikSense", link: "/coming-soon" },
                { title: "Sap-Analytics", link: "/coming-soon" },
              ],
            },
            {
              icon: dynamic,
              title: "Microsoft Dynamics 365",
              link: "/coming-soon",
              submenus: [
                { title: "Business Central", link: "/coming-soon" },
                { title: "Finance", link: "/coming-soon" },
                { title: "Supply Chain Management", link: "/coming-soon" },
                { title: "Sales", link: "/coming-soon" },
                { title: "Customer Service", link: "/coming-soon" },
                { title: "Project Operations", link: "/coming-soon" },
                { title: "Marketing", link: "/coming-soon" },
                { title: "Human Resource", link: "/coming-soon" },
              ],
            },
            {
              icon: oracle,
              title: "Oracle",
              link: "/oracle",
              submenus: [
                { title: "OCI AI Services", link: "/coming-soon" },
                { title: "Application Development", link: "/coming-soon" },
                { title: "OCI Solutions", link: "/oci-solutions" },
                { title: "Oracle Managed services", link: "/coming-soon" },
                { title: "Advisory Services", link: "/coming-soon" },
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
              link: "/coming-soon",
              submenus: [
                { title: "ERP", link: "/coming-soon" },
                { title: "Operations Management", link: "/coming-soon" },
                { title: "Finanacial Management", link: "/coming-soon" },
                { title: "Payment Management", link: "/coming-soon" },
                { title: "Supply Chain Management", link: "/coming-soon" },
                { title: "Data Analytics", link: "/coming-soon" },
                { title: "Asset Management", link: "/coming-soon" },
                { title: "Fleet Management", link: "/coming-soon" },
                { title: "Human Resources", link: "/coming-soon" },
                { title: "eLearning", link: "/coming-soon" },
                { title: "Document Management", link: "/coming-soon" },
                { title: "Project Management", link: "/coming-soon" },
                { title: "Ecommerce", link: "/coming-soon" },
                { title: "Marketing & Advertising", link: "/coming-soon" },
                { title: "Content Management", link: "/coming-soon" },
                { title: "Kiosk Software", link: "/coming-soon" },
                { title: "Web Portals", link: "/coming-soon" },
              ],
            },
            {
              title: "Services",
              link: "/coming-soon",
              submenus: [
                { title: "Software Development", link: "/coming-soon" },
                { title: "Web Development", link: "/coming-soon" },
                { title: "Mobile App Development", link: "/coming-soon" },
                { title: "Testing & QA", link: "/coming-soon" },
                { title: "Application Services", link: "/coming-soon" },
                { title: "UI/UX Design", link: "/coming-soon" },
                { title: "Infrastructure Services", link: "/coming-soon" },
                { title: "Digital Transformation", link: "/coming-soon" },
                { title: "Managed IT Services", link: "/coming-soon" },
                { title: "IT Outsourcing", link: "/coming-soon" },
                { title: "IT Consulting", link: "/coming-soon" },
                { title: "IT Support", link: "/coming-soon" },
                { title: "Data Analytics", link: "/coming-soon" },
                { title: "Cybersecurity", link: "/coming-soon" },

              ],
            },
          ],
        },
        {
          id: 3,
          title: "Innovation",
          megaMenu: true,
          link: "/",
          mega_menus: [
            {
              title: "Technology",
              link: "/",
              submenus: [
                { title: "Cloud", link: "/coming-soon" },
                { title: "Software as a Service(SAAS)", link: "/coming-soon" },
                { title: "Internet of Things", link: "/coming-soon" },
                { title: "Big Data", link: "/coming-soon" },
                { title: "Data Science", link: "/coming-soon" },
                { title: "Machine Learning", link: "/coming-soon" },
                { title: "Artificial Intelligence", link: "/coming-soon" },
                { title: "Blockchain", link: "/coming-soon" },
                { title: "Virtual Reality", link: "/coming-soon" },
                { title: "Computer Vision", link: "/coming-soon" },
                { title: "Microsoft", link: "/coming-soon" },
                { title: "Azure", link: "/coming-soon" },
                { title: "Power Apps", link: "/coming-soon" },
                { title: "Dynamics 365", link: "/coming-soon" },
                { title: "Sharepoint and Office 365", link: "/coming-soon" },
                { title: "PowerBI", link: "/coming-soon" },
                { title: "Aamzon Web Services", link: "/coming-soon" },
                { title: "Adobe Commerce", link: "/coming-soon" },
                { title: "Pimcore", link: "/coming-soon" },
                { title: "Metaverse as a Service (MAAS)", link: "/coming-soon" },
                { title: "IAAS", link: "/coming-soon" },

              ],
            },
            {
              title: "Industries",
              link: "/",
              submenus: [
                { title: "Financial Services", link: "/coming-soon" },
                { title: "Banking", link: "/coming-soon" },
                { title: "Insurance", link: "/coming-soon" },
                { title: "Lendin", link: "/coming-soon" },
                { title: "Investment", link: "/coming-soon" },
                { title: "Fintech", link: "/coming-soon" },
                { title: "Payments", link: "/coming-soon" },
                { title: "Retail", link: "/coming-soon" },
                { title: "Healthcare", link: "/coming-soon" },
                { title: "Manufacturing", link: "/coming-soon" },
                { title: "Professional Services", link: "/coming-soon" },
                { title: "Transportation and Logistics", link: "/coming-soon" },
                { title: "Telecommunications", link: "/coming-soon" },
                { title: "Oil and Gas", link: "/coming-soon" },
                { title: "Construction", link: "/coming-soon" },
                { title: "Travel and Hospitality", link: "/coming-soon" },
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
            { title: "Java", link: "/coming-soon" },
            { title: ".NET", link: "/coming-soon" },
            { title: "Python", link: "/coming-soon" },
            { title: "PHP", link: "/coming-soon" },
            { title: "Golang", link: "/coming-soon" },
            { title: "C++", link: "/coming-soon" },
            { title: "Node.js", link: "/coming-soon" },
            { title: "React Native", link: "/coming-soon" },
            { title: "JavaScript", link: "/coming-soon" },
            { title: "Mobile", link: "/coming-soon" },
          ],
        },
        {
          id: 5,
          hasDropdown: true,
          title: "Company",
          link: "/",
          submenus: [
            { title: "About Us", link: "/about" },
            { title: "Blogs", link: "/blogs" },
            { title: "Case Studies", link: "/case-studies" },
            { title: "Success Story", link: "/success-story" },
            { title: "eBook", link: "/ebook" },
            { title: "Glossary", link: "/glossary" },
            { title: "Job Opening", link: "/job-opening" },
            { title: "Testimonials", link: "/testimonials" },
            { title: "Company Brouchure", link: "/coming-soon" },
            { title: "Free Trail", link: "/freetrail" },
            { title: "Contact Us", link: "/contact" },
          ],
        },
      ],
    };
  },
};
</script>