<template>
  <div class="blog-area pb-100 pt-100">
    <div class="container">
      <div class="pagination-area">
        <div class="nav-links">
        <ul v-for="category in categories" :key="category.id">
          <!-- <li> -->
            <NuxtLink :to="`/glossary-category-details/${category.attributes.slug}`" class="page-numbers">{{
          category.attributes.name }}</NuxtLink>
          <!-- </li> -->
        </ul>
      </div>
      </div>

      <div class="row justify-content-center pt-50">
        <div class="col-lg-12 col-md-12" v-for="glossary in groupby" :key="glossary.value">
          <h3 class="glossary-category ml-5"> {{ glossary.value }} </h3>
          <div class="single-blog-post bg-FAFAFA pt-1">
            <div class="row contents">
              <div class="col-sm-3" v-for="glossData in glossary.data" :key="glossData.id">
                <NuxtLink class="text-decoration-underline" :to="'/glossary/' + glossData.attributes.slug">
                  {{ glossData.attributes.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'BlogDetails',
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
      categories: [],
      glossaries: [],
      groupby: {}
    }
  },
  created: async function () {
    const response1 = await axios.get('https://cms.dotglobaltech.com/api/glossary-categories');
    const sortCat = response1?.data?.data.sort((a, b) => a.id - b.id);
    this.categories = sortCat;
    const response = await axios.get('https://cms.dotglobaltech.com/api/glossaries?populate=*')
    this.glossaries = response.data.data;
    let groupby = {};
    this.categories.map(x => {
      const r = this.glossaries.filter(v =>
        v.attributes.glossary_categories.data.map(e => e.id).includes(x.id)
      )
      groupby = { ...groupby, [x.attributes.name]: r };
    })
    const dd = []
    Object.keys(groupby).map(key => {
      dd.push({ value: key, data: groupby[key] })
    });
    this.groupby = dd;
    console.log(this.groupby, 'groupby');
  },
}
</script>