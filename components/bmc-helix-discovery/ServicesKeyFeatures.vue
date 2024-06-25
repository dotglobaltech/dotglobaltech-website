<template>
  <section :class="`services__area ${style_2 ? 'pb-110' : el_style ? 'pt-110 pb-90' : 'pb-50'}`">
    <div class="container">
      <div class="row justify-content-center pt-80">
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div :class="`services__item-9 ${style_2 ? 'services__item-style-2' : ''} mb-30 transition-3`">
            <div class="services__item-9-top d-flex align-items-start justify-content-between">
              <div class="services__icon-9">
                <span>
                  <span>
                    <img src="~/assets/img/bmc-helix-discovery/Optimize_performance.svg" alt="" />
                  </span>
                  <img src="~/assets/img/services/9/services-icon-shape.png" alt="" />
                </span>
              </div>
            </div>
            <div class="services__content-9" style="height:300px;">
              <h3 class="services__title-9">
                Optimize performance
              </h3>
              <span class="services-project">
                Gain real-time insights into your entire IT ecosystem, from multi-cloud environments to hybrid deployments and on-premises assets.
              </span>
            </div>
          </div>
        </div>

        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div :class="`services__item-9 ${style_2 ? 'services__item-style-2' : ''} mb-30 transition-3`">
            <div class="services__item-9-top d-flex align-items-start justify-content-between">
              <div class="services__icon-9">
                <span>
                  <span>
                    <img src="~/assets/img/bmc-helix-discovery/Reduce_costs-01.svg" alt="" />
                  </span>
                  <img src="~/assets/img/services/9/services-icon-shape.png" alt="" />
                </span>
              </div>
            </div>
            <div class="services__content-9" style="height:300px;">
              <h3 class="services__title-9">
               Reduce costs
              </h3>
              <span class="services-project">
                Eliminate manual data collection and streamline operations with automated discovery and dependency mapping.
              </span>
            </div>
          </div>
        </div>

        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div :class="`services__item-9 ${style_2 ? 'services__item-style-2' : ''} mb-30 transition-3`">
            <div class="services__item-9-top d-flex align-items-start justify-content-between">
              <div class="services__icon-9">
                <span>
                  <span>
                    <img src="~/assets/img/bmc-helix-discovery/Enhance_security_and_compliance-01.svg" alt="" />
                  </span>
                  <img src="~/assets/img/services/9/services-icon-shape.png" alt="" />
                </span>
              </div>
            </div>
            <div class="services__content-9" style="height:300px;">
              <h3 class="services__title-9">
                Enhance security and compliance
              </h3>
              <span class="services-project">
                Through our unmatched BMC Helix Discovery Managed Services ensure regulatory adherence and mitigate security risks with comprehensive asset management and audit support.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

};
</script>