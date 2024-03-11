<template>
  <div class="job__item transition-3" data-sal-duration="1000" v-for="joblisting in joblistings.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  )" :key="joblisting.id">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-7 col-md-9">
        <div class="job__content">
          <h3 class="job__title">
            <nuxt-link :to="`/career-details/${joblisting.attributes.slug}`">
              {{ joblisting.attributes.title }}
            </nuxt-link>
          </h3>

          <div class="job__meta-wrapper d-sm-flex flex-wrap align-items-center">
            <div class="job__meta-item">
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.5826 10.2259L8.41256 8.93093C8.03456 8.70693 7.72656 8.16793 7.72656 7.72693V4.85693"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {{ joblisting.attributes.EmploymentType }}
              </span>
              <span>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.03611 9.003C8.2426 9.003 9.22065 8.02495 9.22065 6.81846C9.22065 5.61197 8.2426 4.63391 7.03611 4.63391C5.82962 4.63391 4.85156 5.61197 4.85156 6.81846C4.85156 8.02495 5.82962 9.003 7.03611 9.003Z"
                    stroke="currentColor" stroke-width="1.5" />
                  <path
                    d="M1.16997 5.54414C2.54932 -0.519378 11.5326 -0.512376 12.9049 5.55114C13.7101 9.10803 11.4976 12.1188 9.55807 13.9812C8.15072 15.3396 5.92416 15.3396 4.50981 13.9812C2.57732 12.1188 0.36477 9.10103 1.16997 5.54414Z"
                    stroke="currentColor" stroke-width="1.5" />
                </svg>
                {{ joblisting.attributes.Location }}
              </span>
            </div>
            <div class="job__tag">
              <span>{{ joblisting.attributes.RoleCategory }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
        <div class="job__vacancies">
          <span>Job Status: {{ joblisting.attributes.JobStatus }}</span>
          <p>No of vacancies: {{ joblisting.attributes.JobPosition }}</p>
        </div>
      </div>
      <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6">
        <div class="job__btn text-xl-end">
          <nuxt-link :to="`/job-details/${joblisting.attributes.slug}`" class="tp-btn-border">
            Apply Now
            <i class="fas fa-chevron-right fa-icon">
            </i><span class="circle"></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import axios from "axios";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      joblistings: [],
      rows: 0,
      currentPage: 1,
      perPage: 6,
    }
  },
  created: async function () {
    const response = await axios.get('https://cms.dotglobaltech.com/api/job-listings?populate=*')
    this.joblistings = response.data.data.sort((b, a) => a.id - b.id);
    this.rows = this.joblistings?.length;
  },
}
</script>