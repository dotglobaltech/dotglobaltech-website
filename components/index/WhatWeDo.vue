<template>
  <section id="tpabout" class="elements__carousel-area whatwe-bg pt-60 pb-80">
    <div class="container justify-content-top">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-30 text-center">
            <h3 class="section__title">What We <span class="section__title-highlight">Do<svg width="220" height="27"
                  viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"></path>
                </svg></span>
              <p>Bridging the gap between ideas and solutions
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="elements__carousel p-relative">
            <Carousel ref="detailsSlider" :items-to-show="3" :autoplay="false" :wrap-around="true" :snapAlign="'center'"
              :breakpoints="{
                992: {
                  itemsToShow: 3,
                },
                700: {
                  itemsToShow: 2,
                },
                0: {
                  itemsToShow: 1,
                },
              }" class="elements__carousel-active">

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/software-development">Software Development</nuxt-link>
                  </h4>
                  <ul class="-service-list">
                      <li> <nuxt-link href="/">React</nuxt-link></li>
                      <li> <nuxt-link href="/php">Angular</nuxt-link></li>
                      <li> <nuxt-link href="/">Python</nuxt-link></li>
                      <li> <nuxt-link href="/">.Net</nuxt-link></li>
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                          <div class="img-iconbb"><img src="~/assets/img/home/react-icon.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/angular-icon.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/python.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/microsoft-dot-net-icon.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">With more than ten years of industry experience, we offer reliable, scalable, and secure
                    solutions.</p>
                  <nuxt-link href="/software-development" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/testing-qa">Testing & QA</nuxt-link></h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">Selenium</nuxt-link> </li>
                    <li> <nuxt-link href="/">Appium</nuxt-link> </li>
                    <li> <nuxt-link href="/">Cypress</nuxt-link> </li>
                    <!-- <li> <nuxt-link href="/">Cucumber</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/selenium.svg" alt="img"></div>
                        </nuxt-link></li>
                        <li><nuxt-link href="/">
                          <div class="img-iconbb"><img src="~/assets/img/home/appium.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/cypress.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/cucumber.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">Specializing in compliance assessment, automated testing, and comprehensive quality
                    engineering.</p>
                  <nuxt-link href="/testing-qa" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/application-services">Application Services</nuxt-link>
                  </h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">OWASP ZAP</nuxt-link> </li>
                    <li> <nuxt-link href="/">Nmap</nuxt-link> </li>
                    <li> <nuxt-link href="/">Burp Suite</nuxt-link> </li>
                    <!-- <li> <nuxt-link href="/">Metasploit Framework</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/zaproxy.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/nmap.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/burpsuite-security-software.svg" alt="img"></div>
                        </nuxt-link></li>
                        <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/metasploit-framework.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">As a reliable Application Managed Services Provider, we specialize in managing and
                    supporting</p>
                  <nuxt-link href="/application-services" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/ui-ux-design">UI/UX Design</nuxt-link></h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">Figma</nuxt-link> </li>
                    <li> <nuxt-link href="/">Marvel</nuxt-link> </li>
                    <li> <nuxt-link href="/">Photoshop</nuxt-link> </li>
                    <!-- <li> <nuxt-link href="/">Adobe Illustrator</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/figma.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/marvel.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/photoshop.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/illustrator.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">We empower your business by delivering impactful, meticulously crafted user experience
                  </p>
                  <nuxt-link href="/ui-ux-design" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/">Staff Augmentation</nuxt-link></h4>
                  <ul class="-service-list">
                    <li><nuxt-link href="/">Hubspot</nuxt-link></li>
                    <li><nuxt-link href="/">Slack </nuxt-link> </li>
                    <li><nuxt-link href="/">Jira</nuxt-link></li>
                    <!-- <li><nuxt-link href="/">HipChat</nuxt-link></li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/hubspot.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/slack.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/jira.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/hipchat.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">We engage a team of seasoned and specialized IT professionals for a defined period to
                    conceptualize.</p>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/data-analytics">Data Analytics</nuxt-link></h4>
                  <ul class="-service-list">
                    <li><nuxt-link href="/">QlikView</nuxt-link></li>
                    <li><nuxt-link href="/">Power BI</nuxt-link></li>
                    <li><nuxt-link href="/">Hadoop</nuxt-link> </li>
                    <!-- <li><nuxt-link href="/">Apache Spark</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/qlikview.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/power-bi.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/hadoop.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/apache-spark.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">We assist businesses in making informed decisions by transforming historical and
                    real-time data.</p>
                  <nuxt-link href="/data-analytics" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/">Help Desk Services</nuxt-link></h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">Zendesk</nuxt-link> </li>
                    <li> <nuxt-link href="/">Zoho Desk</nuxt-link> </li>
                    <li> <nuxt-link href="/">Solarwinds</nuxt-link> </li>
                    <!-- <li> <nuxt-link href="/">SysAid</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/zendesk.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/zoho-desk.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/solarwinds.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/syssaid.jpg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">Professional help desk services tailored for your IT environment or software products.
                  </p>
                  <nuxt-link href="/" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/infrastructure-services">Infrastructure
                      Services</nuxt-link></h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">Puppet</nuxt-link> </li>
                    <li> <nuxt-link href="/">SaltStack</nuxt-link> </li>
                    <li> <nuxt-link href="/">Kubernetes</nuxt-link> </li>
                    <!-- <li> <nuxt-link href="/">Terraform</nuxt-link> </li> -->
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/puppet.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/saltstack-icon.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/kubernetes.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/terraform.svg" alt="img"></div>
                        </nuxt-link></li>
                    </ul>
                  </div>
                  <p class="mt20">With over a decade of expertise, we provide a comprehensive range of infrastructure
                    services.</p>
                  <nuxt-link href="/infrastructure-services" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <Slide class="elements__carousel-item w-img">
                <div class="service-card-app hoshd">
                  <h4 class="features__title-7"><nuxt-link href="/cybersecurity">Cybersecurity Services</nuxt-link></h4>
                  <ul class="-service-list">
                    <li> <nuxt-link href="/">Sprinto</nuxt-link> </li>
                    <li> <nuxt-link href="/">Kali Linux.</nuxt-link> </li>
                  </ul>
                  <div class="tec-icon pt-20">
                    <ul class="servc-icon-sldr">
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/sprinto-inc.svg" alt="img"></div>
                        </nuxt-link></li>
                      <li><nuxt-link href="/">
                        <div class="img-iconbb"><img src="~/assets/img/home/kali-linux.svg" alt="img"></div>
                        </nuxt-link></li>
                    
                    </ul>
                  </div>
                  <p class="mt20">With over a decade of expertise in information security and adherence to management best
                    practices</p>
                  <nuxt-link href="/cybersecurity" class="mt20 link-prbs">Read More <i
                      class="fas fa fa-arrow-circle-right"></i></nuxt-link>
                </div>
              </Slide>

              <template #addons>
                <pagination />
              </template>
            </Carousel>
            <div class="elements-arrow">
              <button @click="handlePrev" type="button" class="elements-button-prev slick-prev slick-arrow">
                <i class="fa-solid fa-angle-left"></i>
              </button>
              <button @click="handleNext" type="button" class="elements-button-next slick-next slick-arrow">
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {

    };
  },
  methods: {
    handlePrev() {
      this.$refs.detailsSlider?.prev();
    },
    handleNext() {
      this.$refs.detailsSlider?.next();
    },
  },
};
</script>