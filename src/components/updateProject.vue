<template lang="">
<section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style="border-radius: 25px;">
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style="color:#28a745">Update Project</p>

                                <form class="mx-1 mx-md-4" @submit.prevent="submitForm">
                                    <!-- <small v-if="name=='' && formSubmitted" class="d-block text-center error-message"> Please Fill Valid Name</small> -->

                                    <div class="d-flex flex-row align-items-center mb-1">

                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="projectName" class="form-control" v-model="formData.projectName" placeholder="Project Name" required />
                                            <label class="form-label" for="form3Example1c"></label>

                                        </div>

                                    </div>
                                    <!-- <small v-if="validEmail" class="d-block text-center error-message">{{validEmail}}</small> -->

                                    <div class="d-flex flex-row align-items-center mb-1">
                                        <!-- <i class="fas fa-envelope fa-lg me-3 fa-fw"></i> -->
                                        <div class="form-outline flex-fill mb-0">

                                            <div class="form-outline flex-fill mb-0">
                                                <label for="description" class="form-label"></label>
                                                <textarea id="description" v-model="formData.description" class="form-control" placeholder="Description"></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- <small v-if="validPass" class="d-block text-center error-message"> {{validPass}}</small> -->

                                    <div class="d-flex flex-row align-items-center mb-2">

                                        <div class="form-outline flex-fill mb-0">
                                            <div>
                                                <label class="form-label" for="form3Example4c"></label>

                                                <input type="date" id="startDate" v-model="formData.startDate" class="form-control">
                                            </div>

                                        </div>

                                    </div>

                                    <!-- <small v-if="passMatch" class="d-block text-center error-message"> {{passMatch}}</small> -->

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <!-- <i class="fas fa-key fa-lg me-3 fa-fw"></i> -->
                                        <div class="form-outline flex-fill mb-0">
                                            <div>
                                                <label class="form-label" for="form3Example4c"></label>

                                                <input type="date" id="endDate" v-model="formData.endDate" class="form-control">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <div class="form-outline flex-fill mb-0">

                                            <div>
                                                <label for="status">Status:</label>
                                                <select id="status" v-model="formData.status" class="form-control">
                                                    <option value="active">Active</option>
                                                    <option value="completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-check d-flex  mb-2">
                                        <div>
                                            <label for="budget">Budget:</label>
                                            <input type="number" id="budget" v-model="formData.budget" class="form-control">
                                        </div>
                                        <div>
                                            <label for="budget">Actual Cost:</label>
                                            <input type="number" id="actualCost" v-model="formData.actualCost" class="form-control">
                                        </div>

                                    </div>
                                    <div class="d-flex flex-row align-items-center mb-2">
                                        <div class="form-outline flex-fill mb-0">

                                            <div>
                                                <label for="managerId">Manager ID:</label>
                                                <input type="number" id="managerId" v-model="formData.managerId" class="form-control">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <small v-if="ischeckedMsg" class="d-block text-center mb-3 error-message"> Please check the box to proceed</small> -->

                                    <div class="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                                        <button type="button"  class="btn  btn-success btn-lg" >Update</button>
                                    </div>
                                    <!-- <div class="text-center">
                                        <p>Already a member? <router-link to="/login" style="text-decoration: none; color: #28a745;">Login</router-link>
                                        </p>

                                    </div> -->

                                </form>

                            </div>
                            <!-- <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">

                            </div> -->
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
    name: "UpdateProject",
    data() {
        return {
            formData: {
                projectName: '',
                description: '',
                startDate: '',
                endDate: '',
                status: '', // Set default status
                budget: 0,
                actualCost: 0,
                managerId: 0
            }
        }
    },

    async mounted() {
        const result = await axios.get("http://localhost:5000/projects/projectById/" + this.$route.params.id);

        const projectDetail = result.data.allDetails[0];
        console.log(projectDetail);
        this.formData.projectName = projectDetail.project_name;
        console.log(this.formData.projectName);
        this.formData.description = projectDetail.description;
        const isoDateString = new Date(projectDetail.start_date).toISOString().split('T')[0];

        this.formData.startDate = isoDateString;
        const isoDateString1 = new Date(projectDetail.end_date).toISOString().split('T')[0];

        this.formData.endDate = isoDateString1;
        this.formData.status = projectDetail.status;
        this.formData.budget = projectDetail.budget;
        this.formData.actualCost = projectDetail.actual_cost;
        this.formData.managerId = projectDetail.manager_id;

    },

    methods: {
        async submitForm() {

            try {
                let result = await axios.put('http://localhost:5000/projects/updateproject', {
                    project_id: this.$route.params.id,
                    project_name: this.formData.projectName,
                    description: this.formData.description,
                    start_date: this.formData.startDate,
                    end_date: this.formData.endDate,
                    status: this.formData.status,
                    budget: this.formData.budget,
                    actual_cost: this.formData.actualCost,
                    manager_id: this.formData.managerId
                })
                console.log(result);
                //s this.$refs.myForm.reset();
                this.$router.push({
                    name: 'DashBoard'
                })

            } catch (err) {
                console.log(err);
            }

        }
    }

}
</script>

<style lang="">
    
</style>
