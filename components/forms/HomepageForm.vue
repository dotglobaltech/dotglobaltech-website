<template>
    <!-- </form> -->
    <div class="contact-form">
        <form @submit.prevent="submitContent" id="contactForm" v-if="show">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.name" type="text" required name="name" id="name" class="form-control"
                            placeholder="Your Name">
                        <div v-if="formErrors.name" class="error-message">{{ formErrors.name }}
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.email" type="email" required name="email" id="email"
                            class="form-control" placeholder="Your Email">
                        <div v-if="formErrors.email" class="error-message">{{ formErrors.email }}
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.phone_number" type="number" required name="phone_number"
                            id="phone_number" class="form-control" placeholder="Your Phone">
                        <div v-if="formErrors.phone_number" class="error-message">{{
            formErrors.phone_number }}</div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.msg_subject" type="text" required name="msg_subject" id="msg_subject"
                            class="form-control" placeholder="Your Subject">
                        <div v-if="formErrors.msg_subject" class="error-message">{{
            formErrors.msg_subject }}</div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.companyName" type="text" required name="companyName" id="companyName"
                            class="form-control" placeholder="Company Name">
                        <div v-if="formErrors.companyName" class="error-message">{{
            formErrors.companyName }}</div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="contact__input-2">
                        <input v-model="formData.country" required class="form-control" id="country" cols="30" rows="6"
                            placeholder="Your country">
                        <div v-if="formErrors.country" class="error-country">{{ formErrors.country
                            }}</div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="contact__input-2">
                        <textarea v-model="formData.message" required class="form-control" id="message" cols="30"
                            rows="6" placeholder="Your Message"></textarea>
                        <div v-if="formErrors.message" class="error-message">{{ formErrors.message
                            }}</div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="contact__agree d-flex align-items-start mb-25">
                        <input class="e-check-input" required type="checkbox" id="e-agree" />
                        <label class="e-check-label" for="e-agree">
                            I am bound by the terms of the Service I accept Privacy
                            Policy.
                        </label>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="cta__btn-2 text-lg-center">
                        <button type="submit" class="tp-btn btn-cta bg-btn lnk">Send Message <i
                                class="fas fa-chevron-right fa-icon"></i>
                            <span class="circle"></span></button>
                    </div>
                </div>
            </div>
            <!-- </form> -->
        </form>
        <div v-else>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Thank you!</h4>
                <p>Your message has been sent successfully.</p>
                <hr>
                <p class="mb-0">We will contact you as soon as possible.</p>
            </div>
        </div>
    </div>
</template>

<script>

import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    name: 'Contactme',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone_number: '',
                msg_subject: '',
                companyName: '',
                country: '',
                message: '',
            },
            formErrors: {
                name: '',
                email: '',
                phone_number: '',
                msg_subject: '',
                message: '',
            },
            show: true,
        };
    },
    methods: {
        submitContent() {
            // Clear previous error messages
            this.formErrors = {};
            const payload = {
                name: this.formData.name,
                email: this.formData.email,
                phone_number: this.formData.phone_number,
                msg_subject: this.formData.msg_subject,
                companyName: this.formData.companyName,
                country: this.formData.country,
                message: this.formData.message,
            };

            axios
                .post('https://forms.antixxtechhub.in/contact-us-form', payload)
                .then((response) => {
                    this.isButtonDisabled = false;
                    this.show = false;
                    // Handle the response here
                    setTimeout(() => {
                        this.show = true;
                        this.formData = {
                            name: '',
                            email: '',
                            phone_number: '',
                            msg_subject: '',
                            companyName: '',
                            country: '',
                            message: '',
                        }
                        // window.location.href = "https://antixxtechhub.com"

                    }, 4000)
                })
                .catch((error) => {
                    // Handle any errors
                    this.show = false;
                    console.error('Error:', error);
                });
        },
        isValidEmail(email) {
            // Simple email validation using a regular expression
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        alertContent() {
            Swal.fire({
                title: 'Great',
                text: 'Thanks for submitting the form',
                icon: 'success',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        },
    },
};
</script>