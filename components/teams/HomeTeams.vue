<template>
  <section class="team__area pt-120 pb-80">
    <div class="container">
      <div v-if="el_style" class="row">
      </div>
      <div v-if="!el_style" class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
          <div class="section__title-wrapper-4 mb-60">
            <span class="section__title-pre-4">Team member</span>
            <h3 class="section__title-4">Meet our most talented attorneys</h3>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
          <div class="team__more-4 mb-70 text-md-end">
            <nuxt-link href="/team" class="tp-btn-border-brown">See all Attorneys
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="row" v-if="teams !== null">
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6" v-for="team in teams.singleTeam.slice(0, 4)" :key="team.id">
          <div class="team__item-4 p-relative z-index-1 fix mb-40">
            <div class="team__thumb-4 w-img fix">
              <img :src="team.image.data.attributes.url" alt="teams">
            </div>
            <div class="team__content-4 fix">
              <h3 class="team__title-4">
                <nuxt-link href="/team-details">{{ team.title }}</nuxt-link>
              </h3>
              <span class="team__designation-4">{{ team.designation }}</span>
              <p>{{ team.shortDesc }}</p>
              <div class="team__social-10 d-flex justify-content-center">
                <a :href="team.linkedin" target="_blank">
                  <i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      teams: null,
    }
  },
  created: async function () {
    const response = await axios.get('https://cms.dotglobaltech.com/api/team?populate=deep,5')
    const { data: { attributes } } = response.data
    this.teams = attributes
  },
};
</script>