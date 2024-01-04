<template lang="">
<section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style="color:#28a745">Add Member</p>

                                <form class="mx-1 mx-md-4">
                                    <!-- <small v-if="name=='' && formSubmitted" class="d-block text-center error-message"> Please Fill Valid Name</small> -->

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" class="form-control" v-model="name" placeholder="Name" required />
                                            <label class="form-label" for="form3Example1c"></label>
                                        </div>

                                    </div>
                                    <small v-if="validEmail" class="d-block text-center error-message">{{validEmail}}</small>

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="email" id="form3Example3c" class="form-control" v-model="email" placeholder="Your Email" />
                                            <label class="form-label" for="form3Example3c"></label>
                                        </div>

                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fa fa-tasks fa-lg me-3 fa-fw" aria-hidden="true"></i>
                                        <div class="form-outline flex-fill mb-4">
                                           <select name="" id="status" v-model="role" class="inputText form-control" placeholder="">

                                                <option value="admin">Admin</option>
                                                <option value="manager">Manager</option>
                                            </select>
                                        </div>

                                    </div>

                                  
                                    <small v-if="validPass" class="d-block text-center error-message"> {{validPass}}</small>

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input id="form3Example4c" class="form-control" v-model="password" type="password" placeholder="Password " />
                                            <i class="eye-icon" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'" @click="togglePasswordVisibility"></i>

                                            <label class="form-label" for="form3Example4c"></label>
                                        </div>

                                    </div>

                                    <small v-if="passMatch" class="d-block text-center error-message"> {{passMatch}}</small>

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="password" id="form3Example4cd" class="form-control" v-model="repassword" placeholder="Confirm Password" />
                                            <label class="form-label" for="form3Example4cd"></label>
                                        </div>
                                    </div>

                                    <div class="form-check d-flex justify-content-center mb-2">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" v-model="isChecked" />
                                        <label class="form-check-label" for="form2Example3">
                                            I agree all statements in <a href="#!" style=" color: #28a745;">Terms of service</a>
                                        </label>

                                    </div>
                                    <small v-if="ischeckedMsg" class="d-block text-center mb-3 error-message"> Please check the box to proceed</small>

                                    <div class="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                        <button type="button" @click="signUp" class="btn  btn-success btn-lg" :disabled="isSubmitDisabled">Register</button>
                                    </div>
                                    <div class="text-center">
                                        <p>Already a member? <router-link to="/login" style="text-decoration: none; color: #28a745;">Login</router-link>
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
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            repassword: '',
            passMatch: '',
            isChecked: '',
            ischeckedMsg: '',
            validEmail: '',
            validPass: '',
            isSubmitDisabled: true,
            role: 'manager'

        }
    },
    methods: {
        async signUp() {
            if (this.isChecked !== true) {
                // Display error messages or prevent form submission
                console.log("Tick the checkbox");
                return;
            } else {
                try {
                    let result = await axios.post('http://localhost:5000/user/signup', {
                        username: this.name,
                        email: this.email,
                        password: this.password,
                        role:this.role
                    });

                    if (result.status === 200) {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You registered a member successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.$router.push({
                            name: 'Login'
                        });
                    }
                } catch (error) {
                    if (error.response && error.response.status === 400) {
                        this.$swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Email already exists!",

                        });
                    } else {
                        console.error("Error signing up:", error);
                        // Handle other errors here
                    }
                }

            }
        },
        validateFormData() {
            return this.passMatch == "" && this.validPass == "" && this.validEmail == "";
        }
    },
    mounted() {

        const token = localStorage.getItem('token')
        if (!token) {
            this.$router.push({
                name: 'Login'
            })
        // let user= localStorage.getItem('user-info');
        // if(user){
        //     this.$router.push({name:'HomeComponent'})
        // }
    }},
    watch: {
        repassword() {
            if (this.password !== this.repassword)
                this.passMatch = "Both Passwords do not match";
            else {
                this.passMatch = "";
                this.isSubmitDisabled = !this.validateFormData();
                this.ischeckedMsg = true;
            }
        },
        password() {
            if (this.password.length < 6) {
                this.validPass = "Password length should be greater than 6";
            } else {
                this.validPass = "";
                // this.isSubmitDisabled = !this.validateFormData();

            }
        },
        email() {
            if (/\S+@\S+\.\S+/.test(this.email)) {
                this.validEmail = "";
                // this.isSubmitDisabled = !this.validateFormData();

            } else {
                this.validEmail = ' Please Fill Valid Email';

            }
        },
        isChecked() {
            this.ischeckedMsg = false;
        }

    }

}
</script>

<style>
.invalid {
    border: 1px solid red;
    /* Red border for invalid input */
}

.error-message {
    color: red;
    /* Red color for error message */
    font-size: 0.8em;
}

i {
    margin-bottom: 1rem;
}
</style>
