<template lang="">
<div>

    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style="color:#28a745">Login</p>

                                    <form class="mx-1 mx-md-4">
                                        <div v-if="resData" class="alert alert-danger mt-2" role="alert">
                                            {{ resData}}
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                        </div>

                                        <!-- <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" class="form-control" v-model="name" placeholder="Name" />
                                            <label class="form-label" for="form3Example1c"></label>
                                        </div>
                                    </div> -->
                                        <small v-if="validEmail" class="d-block text-center error-message">{{validEmail}}</small>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" id="form3Example3c" class="form-control" required v-model="email" placeholder="Your Email" :class="{ 'invalid': !(/\S+@\S+\.\S+/.test(email)) && formSubmitted}" />
                                                <label class="form-label" for="form3Example3c"></label>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" id="form3Example4c" class="form-control" v-model="password" placeholder="Password" />
                                                <label class="form-label" for="form3Example4c"></label>
                                            </div>
                                        </div>

                                        <!-- <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" class="form-control" v-model="repassword" placeholder="Confirm Password" />
                                            <label class="form-label" for="form3Example4cd"></label>
                                        </div>
                                    </div>
                                    <small v-if="passNotMatch"> Both Passwords do not match</small> -->

                                        <!-- <div class="form-check d-flex justify-content-center mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" v-model="isChecked" />
                                        <label class="form-check-label" for="form2Example3">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>

                                    </div>
                                    <small v-if="!isChecked && formSubmitted" class="d-block text-center mb-3"> Please check the box to proceed</small> -->

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" @click="login" class="btn  btn-success btn-lg">Login</button>
                                        </div>
                                        <!-- Forgot Password link -->
                                        <div class="text-center">
                                            <p>
                                                <router-link to="/forgot-password" style="text-decoration: none; color: #28a745;">Forgot Password?</router-link>
                                            </p>
                                        </div>
                                        <div class="text-center">
                                            <p>Not a member? <router-link to="/sign-up" style="text-decoration: none; color: #28a745;">Register</router-link>
                                            </p>

                                        </div>

                                    </form>

                                </div>
                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import axios from 'axios'
import {
    mapActions,
    mapMutations
} from 'vuex';

export default {
    name: 'loginComponent',
    data() {

        return {
            email: '',
            password: '',
            formSubmitted: false,
            validEmail: "",
            resData: ""
        }
    },
    watch: {
        email() {
            if (/\S+@\S+\.\S+/.test(this.email)) {
                this.validEmail = "";
                // this.isSubmitDisabled = !this.validateFormData();

            } else {
                this.validEmail = ' Please Fill Valid Email';

            }
        }
    },
    methods: {
        ...mapMutations({
            changeIt: 'changeDetail',
        }),
        ...mapActions({
            change: 'changeDetailUsingAction',
        }),
    

    async login() {
        try {
            console.log("hi");
            this.formSubmitted = true;
            console.log("Going");

            const res = await axios.post('http://localhost:5000/user/login', {
                email: this.email,
                password: this.password,
            });
            console.log(res, "Hi this he data");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role)
            this.$swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });

            this.change({
                name: res.data.user.username,
                userId: res.data.user.user_id,
            });

            this.$router.push({
                name: 'Home'
            })

            // const {
            //     token
            // } = response.data;
            // localStorage.setItem('token', token);
            // Redirect to dashboard or perform other actions upon successful login
        } catch (error) {
            this.resData = error.response.data.error
            console.error('Login failed:', this.resData);
            // Handle login error (show error message, etc.)
        }

    }
}}
</script>

<style lang="">
    
</style>
