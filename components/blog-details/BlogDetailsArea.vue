<template>
  <section class="postbox__area grey-bg-4 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 pt-80">
          <div class="postbox__wrapper">
            <div class="postbox__main">
              <div class="row">
                <div class="col-lg-8">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__top">
                      <div class="postbox__thumb m-img mb-55">
                        <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                      </div>
                    </div>
                    <div class="postbox__meta-wrapper d-flex align-items-center flex-wrap">
                      <div class="postbox__meta-item mb-30">
                        <div class="postbox__meta-author d-flex align-items-center">
                          <div class="postbox__meta-author-thumb">
                            <a href="#">
                              <img src="~/assets/img/users/user-12.jpg" alt="">
                            </a>
                          </div>
                          <div class="postbox__meta-content">
                            <span class="postbox__meta-type">Author</span>
                            <p class="postbox__meta-name">Fig Nelson</p>
                          </div>
                        </div>
                      </div>
                      <div class="postbox__meta-item mb-30">
                        <div class="postbox__meta-content">
                          <span class="postbox__meta-type">Published</span>
                          <p class="postbox__meta-name">April 24, 2022</p>
                        </div>
                      </div>
                      <div class="postbox__meta-item mb-30">
                        <div class="postbox__meta-content">
                          <span class="postbox__meta-type">2 Comments</span>
                          <!-- for wp comment, this link will redirected to its coment section -->
                          <p class="postbox__meta-name"><a href="#tp-blog-details-comment">Join the Conversation</a></p>
                        </div>
                      </div>
                      <div class="postbox__meta-item mb-30">
                        <div class="postbox__meta-content">
                          <span class="postbox__meta-type">View</span>
                          <p class="postbox__meta-name">12,145 views</p>
                        </div>
                      </div>
                    </div>
                    <div class="postbox__details-content-wrapper">
                      <h3 class="postbox__details-title">{{ details[0].attributes.title }}</h3>
                      <span v-html="details[0].attributes.longDesc"></span>
                    </div>

                  </div>
                </div>
                <div class="col-lg-4">
                  <!-- blog sidebar start -->
                  <blog-sidebar />
                  <!-- blog sidebar end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleBlogGridItem from '../blogs/single-blog/SingleBlogGridItem.vue';
import BlogSidebar from '../common/sidebar/BlogSidebar.vue';

export default {
  components: { BlogSidebar, SingleBlogGridItem, },
  props: ['detailsContent'],
  data: function () {
    return {
      details: this.detailsContent,
    }
  },
}
</script>