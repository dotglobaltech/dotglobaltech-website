<template>
  <section class="job__details-area pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="job__details-wrapper">
            <div class="job__details-content mb-50">
              <div class="job__details-tag mb-10">
                Job Status: <span>{{ details[0].attributes.JobStatus }}</span>
              </div>
              <h3 class="job__details-title">{{ details[0].attributes.title }}</h3>
              <div class="job__meta-wrapper job__details-meta mb-60 d-sm-flex flex-wrap align-items-center">
                <div class="job__meta-item">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.5826 10.2259L8.41256 8.93093C8.03456 8.70693 7.72656 8.16793 7.72656 7.72693V4.85693"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {{ details[0].attributes.EmploymentType }}
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
                    {{ details[0].attributes.Location }}
                  </span>
                  <span>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.32662 7.74699C9.18975 7.74699 10.7001 6.23662 10.7001 4.37349C10.7001 2.51036 9.18975 1 7.32662 1C5.46349 1 3.95312 2.51036 3.95312 4.37349C3.95312 6.23662 5.46349 7.74699 7.32662 7.74699Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.8072 15C12.8072 12.3889 10.1613 10.2771 6.90361 10.2771C3.64597 10.2771 1 12.3889 1 15"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    No. of Vacancies: {{ details[0].attributes.JobPosition }}
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.37844 15H11.1216C14.0075 15 14.5244 13.873 14.6751 12.501L15.2135 6.90099C15.4074 5.19299 14.9048 3.79999 11.8394 3.79999H4.66055C1.59516 3.79999 1.09264 5.19299 1.28647 6.90099L1.82489 12.501C1.97565 13.873 2.49253 15 5.37844 15Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M5.375 3.8V3.24C5.375 2.001 5.375 1 7.67225 1H8.82087C11.1181 1 11.1181 2.001 11.1181 3.24V3.8"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M9.68406 8.7V9.4C9.68406 9.407 9.68406 9.407 9.68406 9.414C9.68406 10.177 9.67688 10.8 8.24828 10.8C6.82686 10.8 6.8125 10.184 6.8125 9.421V8.7C6.8125 8 6.8125 8 7.53039 8H8.96617C9.68406 8 9.68406 8 9.68406 8.7Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M15.1794 7.29999C13.521 8.47599 11.6258 9.17599 9.6875 9.41399" stroke="currentColor"
                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.51562 7.48898C3.13088 8.56698 4.95432 9.21798 6.81365 9.42098" stroke="currentColor"
                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Experience: {{ details[0].attributes.Experience }}
                  </span>
                </div>
                <div class="job__tag">
                  Role Category: <span>{{ details[0].attributes.RoleCategory }}</span>
                </div>
                <div class="job__tag">
                  Work Mode: <span>{{ details[0].attributes.WorkMode }}</span>
                </div>
              </div>
              <!-- <div class="job__details-thumb m-img mb-60">
                <img src="~/assets/img/job/details/job-details-1.jpg" alt="">
              </div> -->
            </div>
            <div class="job__details-about mb-35">
              <p v-html="details[0].attributes.detailsText"></p>
            </div>

            <div class="job__details-cv">
              <p>Please, upload your CV in PDF format.</p>
            </div>

            <div class="job__details-btn">
              <button @click="handleApplyForm" type="button" class="tp-btn job-form-open-btn">Apply for this
                position</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: 'BlogDetails',
  props: ['detailsContent'],
  components: {
  },
  data: function () {
    return {
      details: this.detailsContent
    }
  }
}
</script>