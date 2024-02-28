<template>
  <a
    v-for="(item, i) in social_links"
    :key="i"
    :href="item.link"
    :target="item.target"
  >
    <i :class="item.icon"></i>
  </a>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "https://www.facebook.com/profile.php?id=61550086483260",
          target: "_blank",
          icon: "fa-brands fa-facebook-f",
          name: "Facebook",
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fa-brands fa-twitter",
          name: "Twitter",
        },
        {
          link: "https://www.linkedin.com/company/dot-global-technologies",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "Linkedin",
        },
        {
          link: "https://www.youtube.com/channel/UCLGScKccLcq0qDkx5epBemw",
          target: "_blank",
          icon: "fa-brands fa-youtube",
          name: "Youtube",
        },
        {
          link: "https://www.instagram.com/dotglobaltech/",
          target: "_blank",
          icon: "fa-brands fa-instagram",
          name: "Youtube",
        },
      ],
    };
  },
};
</script>
