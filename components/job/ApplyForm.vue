<template>
    <div>

        <b-button @click="$bvModal.show('modal-scoped')" class="default-btn"><i
                class='bx bxs-paper-plane'></i>Apply</b-button>

        <b-modal id="modal-scoped" hide-footer scrollable>
            <template #modal-header="{ close }">
                <!-- Emulate built in modal header close button action -->
                <h5>Appiction for {{ JobTitle }}</h5>
                <b-button size="sm" variant="outline-danger" @click="close()">
                    Close
                </b-button>
            </template>

            <template #default="{ hide }">
                <div class="contact-form">
                    <form @submit="onSubmit" v-if="show">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="name">Name:</label>
                                    <input v-model="form.name" type="text" required name="name" id="name"
                                        class="form-control" placeholder="Your Name">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input v-model="form.email" type="email" required name="email" id="email"
                                        class="form-control" placeholder="Your Email">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="number">Number:</label>
                                    <input v-model="form.number" type="number" required name="number" id="number"
                                        class="form-control" placeholder="Your Phone">
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="experience">Experience:</label>
                                    <select class="form-control" id="experience" v-model="form.experience" name="experience"
                                        required>
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="0 to 3 Years">0 to 3 Years</option>
                                        <option value="4 to 6 Years">4 to 6 Years</option>
                                        <option value="7 to 10 Years">7 to 10 Years</option>
                                        <option value="11 Years +">11 Years +</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="skillSet">Skills:</label>
                                    <textarea v-model="form.skillSet" class="form-control" id="skillSet" cols="30" rows="6"
                                        placeholder="Add your skills"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="description">Profile Description:</label>
                                    <textarea v-model="form.description" class="form-control" id="description" cols="30"
                                        rows="6" placeholder="Short description about your current profile"></textarea>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <label for="resume">Resume:</label>
                                    <input class="form-control-file" type="file" @change="previewFiles" required>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 " style="padding-top:20px">
                                <div class="form-group d-flex justify-content-center pt-20 ">
                                    <button type="submit" :disabled="isButtonDisabled" class="default-btn"><i
                                            class='bx bxs-paper-plane'></i>Apply<span>
                                        </span> </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div v-else>
                        <div class="alert alert-success" role="alert">
                                    <h4 class="alert-heading">Thank you for applying!</h4>
                                    <p>Your application has been sent successfully.</p>
                                    <hr>
                                    <p class="mb-0">We've received your application and will be in touch if you're selected for the next steps. Good luck!</p>
                        </div>
                    </div>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>

import axios from 'axios';
let fileContent;

export default {
    name: "ApplyForm",
    data() {
        return {
            form: {
                email: "",
                name: "",
                number: "",
                experience: "",
                skillSet: "",
                description: "",
                application: this.JobTitle,
                file: null
            },
            show: true,
            isButtonDisabled: false,
        };
    },
    methods: {
        previewFiles(event) {
            event.preventDefault();
            const selectedFile = event.target.files[0];
            this.form.fileName = selectedFile.name;
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = function (eventf) {
                    const base64String = eventf.target.result.split(',')[1];
                    fileContent = base64String;
                };
                reader.readAsDataURL(selectedFile);
            }
        },

        async onSubmit(event) {
            event.preventDefault();
            this.isButtonDisabled = true;
            const payload = {
                email: this.form.email,
                name: this.form.name,
                number: this.form.number,
                experience: this.form.experience,
                skillSet: this.form.skillSet,
                description: this.form.description,
                application: this.JobTitle,
                fileName: this.form.fileName,
                file: fileContent
            };
            // .post('https://forms.antixxtechhub.in/send-email', payload)

            axios
                .post('https://forms.antixxtechhub.in/application-form', payload)
                .then((response) => {
                    this.isButtonDisabled = false;
                    this.show = false;
                    // Handle the response here
                    setTimeout(() => {
                        window.location.href = "https://antixxtechhub.com"
                    }, 5000)
                })
                .catch((error) => {
                    // Handle any errors
                    this.show = false;
                    console.error('Error:', error);
                });
        },
    },
    props: ["JobTitle"],
};
</script>