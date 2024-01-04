<template lang="">
    <div style="margin-top:15vh;">
        <!-- INfo -->
        <div class="container">
            <div class="row ">
                <div class="col-xl-6 col-lg-6 widthOfcard" @click="goToDashboard">
                    <div class="card l-bg-cherry">
                        <div class="card-statistic-3 p-4">
                            <!-- <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div> -->
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Total Projects</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        {{briefDetail.TotalProjects}}
                                    </h2>
                                </div>
                                <!-- <div class="col-4 text-right">
                                <span>12.5% <i class="fa fa-arrow-up"></i></span>
                            </div> -->
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 widthOfcard">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                            <!-- <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div> -->
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Active Projects</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        {{briefDetail.ActiveProjects}}
                                    </h2>
                                </div>
                                <!-- <div class="col-4 text-right">
                                <span>9.23% <i class="fa fa-arrow-up"></i></span>
                            </div> -->
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 widthOfcard">
                    <div class="card l-bg-green-dark">
                        <div class="card-statistic-3 p-4">
                            <!-- <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div> -->
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Projects Completed</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        {{briefDetail.CompletedProjects}}
                                    </h2>
                                </div>
                                <!-- <div class="col-4 text-right">
                                <span>10% <i class="fa fa-arrow-up"></i></span>
                            </div> -->
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 55%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 widthOfcard">
                    <div class="card l-bg-orange-dark">
                        <div class="card-statistic-3 p-4">
                            <!-- <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div> -->
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Total Managers</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        {{briefDetail.TotalManagers}}
                                    </h2>
                                </div>
                                <!-- <div class="col-4 text-right">
                                <span>2.5% <i class="fa fa-arrow-up"></i></span>
                            </div> -->
                            </div>
                            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                                <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- search Bar -->
        <!-- <div style="margin-bottom:5vh; display:flex;    justify-content: space-around;">
            <form>
    
                <input type="text" v-model="inputValue" class="inputText" placeholder="Search by Name">
    
            </form>
    
            <form>
                <label for="status">Status : </label><select name="" id="status" v-model="status" class="inputText">
                    <option value="all">All</option>
    
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </form>
    
        </div> -->
    
        <!-- Project Table -->
    
        <section class="intro">
    
            <div class="bg-image h-100" style="background-color: #f5f7fa;">
                <div style="margin-bottom:5vh; display:flex;    justify-content: space-around;">
                    <form>
    
                        <input type="text" v-model="inputValue" class="inputText" placeholder="Search by Name">
    
                    </form>
    
                    <form>
                        <label for="status">Status : </label><select name="" id="status" v-model="role" class="inputText">
                            <option value="all">All</option>
    
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                        </select>
                    </form>
    
                </div>
                <div class="mask d-flex align-items-center h-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="card shadow-2-strong">
                                    <div class="card-body p-0">
    
                                        <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style="position: relative; ">
                                            <table class="table table-dark mb-0">
                                                <thead>
                                                    <tr class="text-uppercase text-success">
                                                        <th scope="col" style="background-color:green;">User Id</th>
                                                        <th scope="col" style="background-color:green;">UserName</th>
                                                        <th scope="col" style="background-color:green;">Email</th>
                                                        <th scope="col" style="background-color:green;">Role</th>
                                                        <th scope="col" style="background-color:green;">Creation Date</th>
                                                        <th scope="col" style="background-color:green;">Updation Date</th>
                                                     
                                                        <th scope="col" style="background-color:green;">Action</th>
    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(userDetail, index) in filteredData" :key="index">
                                                        <td>{{ userDetail.user_id}}</td>
                                                        <td>{{ userDetail.username}}</td>
                                                        <td>{{ userDetail.email }}</td>
                                                        <td>{{ userDetail.role}}</td>

                                                        <td>{{ formattedDate(userDetail.created_at )}}</td>
                                                        <td>{{ formattedDate(userDetail.updated_at) }}</td>
                                                        <td>
                                                            <router-link :to="'/updatemember/' + userDetail.user_id" class="btn btn-success me-2">Update</router-link>
                                                            <router-link :to="'/dashboard'" @click="deleteUser(userDetail.user_id)" class="btn btn-danger me-2">Delete</router-link>
    
                                                        </td>
    
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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
    import moment from 'moment'
    export default {
        name: "allMember",
        data() {
    
            return {
                briefDetail: {
                    TotalProjects: "",
                    ActiveProjects: "",
                    CompletedProjects: "",
                    TotalManagers: ""
    
                },
                userDetails: [],
                inputValue: '',
                role: 'all',
            }
        },
        computed: {
            filteredData() {
                if (this.inputValue !== '') {
                    return this.userDetails.filter(item => {
                        console.log(item);
                        return item.username.toLowerCase().includes(this.inputValue.toLowerCase()) &&
                            (this.role === 'all' || item.role.toLowerCase() === this.role.toLowerCase());
                    });
                } else {
    
                    return this.userDetails.filter(item => {
                        return (this.role === 'all' || item.role.toLowerCase() === this.role.toLowerCase());
                    })
                }
            },
    
        },
        methods: {
            goToDashboard(){
                this.$router.push({name:'DashBoard'})
            },
            formattedDate(myDate) {
                return moment(myDate).format("YYYY-MM-DD");
            },
            async deleteUser(userId){
                try {
            const response = await axios.delete(`http://localhost:5000/user/deleteById/${userId}`);
            this.userDetails = this.userDetails.filter((user) => user.user_id !== userId);
    
            console.log(response.data); // Log the response if needed
            // Handle success, like updating the UI or displaying a success message
          } catch (error) {
            console.error('Error deleting project:', error.response.data);
            // Handle error, such as showing an error message
          }
            }
        },
        async mounted() {
    
            try {
    
                const response = await axios.get('http://localhost:5000/projects/projectBriefData',
    
                );
                // Handle the response
                this.briefDetail = response.data.briefDetail;
                // console.log(this.briefDetail);
                const responseUserDetail = await axios.get('http://localhost:5000/user/getAllUsers');
                console.log(responseUserDetail.data.results);
                this.userDetails = responseUserDetail.data.results;

    
                return response.data;
            } catch (error) {
                console.log('Error fetching  details:', error.response.data);
                throw new Error('Failed to fetch user details');
            }
        }
    
    }
    </script>
    
    <style scoped>
    .widthOfcard {
        width: 25%;
    
    }
    
    @media screen and (max-width: 1415px) {
    
        .widthOfcard {
            width: 50%;
        }
    }
    
    @media screen and (max-width: 900px) {
    
        .widthOfcard {
            width: 100%;
        }
    }
    
    .card {
        background-color: #fff;
        border-radius: 10px;
        border: none;
        position: relative;
        margin-bottom: 30px;
        box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1), 0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
    }
    
    .l-bg-cherry {
        background: linear-gradient(to right, #493240, #f09) !important;
        color: #fff;
    }
    
    .l-bg-blue-dark {
        background: linear-gradient(to right, #373b44, #4286f4) !important;
        color: #fff;
    }
    
    .l-bg-green-dark {
        background: linear-gradient(to right, #0a504a, #38ef7d) !important;
        color: #fff;
    }
    
    .l-bg-orange-dark {
        background: linear-gradient(to right, #a86008, #ffba56) !important;
        color: #fff;
    }
    
    .card .card-statistic-3 .card-icon-large .fas,
    .card .card-statistic-3 .card-icon-large .far,
    .card .card-statistic-3 .card-icon-large .fab,
    .card .card-statistic-3 .card-icon-large .fal {
        font-size: 110px;
    }
    
    .card .card-statistic-3 .card-icon {
        text-align: center;
        line-height: 50px;
        margin-left: 15px;
        color: #000;
        position: absolute;
        right: -5px;
        top: 20px;
        opacity: 0.1;
    }
    
    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }
    
    .l-bg-green {
        background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
        color: #fff;
    }
    
    .l-bg-orange {
        background: linear-gradient(to right, #f9900e, #ffba56) !important;
        color: #fff;
    }
    
    .l-bg-cyan {
        background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
        color: #fff;
    }
    
    .inputText {
        padding: 0.4rem;
        border-radius: 1rem;
        text-align: center;
    }
    </style>
    