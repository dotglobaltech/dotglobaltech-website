<template>
  <section class="blog__grid grey-bg-4 pt-90 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6" v-for="successstory in successstories.slice(
          (currentPage - 1) * perPage,
          currentPage * perPage,
        )" :key="successstory.id">
          <div class="blog__item-10 white-bg transition-3 mb-30 fix">
            <div class="blog__thumb-10 w-img fix">
              <NuxtLink :to="'/success-details/' + successstory.attributes.slug" class="d-block">
                <img :src="successstory.attributes.image.data.attributes.url" alt="blog">
              </NuxtLink>
            </div>
            <div class="blog__content-10">
              <div class="blog__content-10-top">
                <h3 class="blog__title-10">
                  <NuxtLink :to="'/success-details/' + successstory.attributes.slug">
                    {{ successstory.attributes.title }}
                  </NuxtLink>
                </h3>
                <p>{{ successstory.attributes.shortDesc }}...</p>
              </div>
              <div class="blog__content-10-bottom d-flex align-items-center justify-content-between">
                <div class="blog__meta-author-10 d-flex align-items-center">
                  <div class="blog__meta-author-thumb-10">
                    <a href="#">
                      <img :src="successstory.attributes.avtar.data.attributes.url" alt="avtar">
                    </a>
                  </div>
                  <div class="blog__meta-author-content-10">
                    <span>
                      By <a href="#">{{ successstory.attributes.author }}</a>
                    </span>
                  </div>
                </div>
                <div class="blog__meta-10 blog-meta-10-2">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  {{ successstory.attributes.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-4">
          <div class="tp-pagination mt-20">
            <blog-pagination />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogPagination from '../common/pagination/BlogPagination.vue';
import axios from 'axios'

export default {
  name: 'GridArea',
  components: {
    BlogPagination,
  },
  data() {
    return {
      successstories: [],
      rows: 0,
      currentPage: 1,
      perPage: 9,
    }
  },
  created: async function () {
    const response = await axios.get('https://cms.dotglobaltech.com/api/successstories?populate=*')
    this.successstories = response.data.data.sort((b, a) => a.id - b.id);
    this.rows = this.successstories?.length;
  },
}
</script>