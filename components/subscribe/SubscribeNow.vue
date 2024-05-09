<template>
    <section :class="`cta__area ${style_2 ? 'cta__style-3' : ''
        } p-relative z-index-1 pt-115 pb-60 ${style_2 ? '' : 'homecta-bg'
        }`">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-8">
                    <h3 class="cta__title-5">Get New Insights Weekly</h3>
                    <div class="cta__content-5"><span>Newsletter dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt. Enter your email.</span>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-4">
                    <div class="cta__input-13">
                        <form @submit="subscribe" class="newsletter-form">
                            <div class="cta__input-13">
                                <input type="email" v-model="form.email" id="email" required style="color: black;"
                                    class="input-newsletter" placeholder="info@dotglobaltech.com">

                                <div class="cta__btn-5 text-lg-end">
                                    <button type="submit" class="tp-btn btn-cta bg-btn lnk"
                                        style="pointer-events: all; cursor: pointer;">Subscribe Now
                                        <i class="fas fa-chevron-right fa-icon"></i>
                                        <span class="circle"></span></button>
                                </div>
                            </div>
                            <div v-if="show" class="alert alert-success" style="margin-top: 10px" role="alert">
                                <strong>Thank you for subscribing!</strong><br>You will now receive our newsletter at {{
        form.email }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    props: {
        style_2: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            form: {
                email: ""
            },
            show: false,
        }

    },
    methods: {
        subscribe(event) {
            event.preventDefault();

            axios
                .post('https://forms.antixxtechhub.in/subscribe-form', this.form)
                .then((response) => {
                    this.isButtonDisabled = false;
                    this.show = true;
                    // Handle the response here
                    setTimeout(() => {
                        this.show = false;
                        this.form.email = "";
                        // window.location.href = "https://antixxtechhub.com"
                    }, 2000)
                })
                .catch((error) => {
                    // Handle any errors
                    this.show = false;
                    console.error('Error:', error);
                });
        }
    }
};
</script>