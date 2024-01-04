<template>
<div style="margin-top:8vh">
    <!-- <div class="image-container">
        <img src="../assets/home.jpg" alt="Home Image">
    </div> -->

    <!-- carousalStart -->

    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/carousal1.jpg" class="d-block w-100 carousel-image" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousal2.jpg" class="d-block w-100 carousel-image" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousal1.jpg" class="d-block w-100 carousel-image" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- carousal End -->
    <div class="content container">
        <h2 style="color:#28a745; font-weight: bold;">Welcome to Project Pulse</h2>

        <p>"Project Pulse" is an advanced project management tool designed to streamline project workflows and enhance collaboration within teams. It serves as a centralized platform where users can efficiently manage various aspects of their projects, monitor progress, and ensure tasks are completed on time. Here are some key features:

            Project Dashboard: A comprehensive overview of all ongoing projects, their statuses, and key metrics.

        </p>
        <router-link to="/dashboard" class="btn btn-success">View Dashboard</router-link>
    </div>
</div>

<div class="how-section1">

    <div class="row">

        <div class="col-md-6 how-img">
            <img src="../assets/vector1.jpg" class="rounded-circle img-fluid" alt="" />
        </div>
        <div class="col-md-6">
            <h4>Project Pulse: Uniting Project Management</h4>
            <h4 class="subheading">Streamlined Management</h4>
            <p class="text-muted">FEffortlessly manage projects, tasks, and timelines within a unified platform. Project Pulse integrates tools and resources for seamless project oversight and control.Project Pulse simplifies complex project workflows by providing an intuitive platform where teams can collaborate seamlessly. From task assignment to progress tracking, every aspect is centralized for efficient management</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>Project Pulse: Uniting Project Management</h4>
            <h4 class="subheading">Streamlined Management</h4>
            <p class="text-muted">FEffortlessly manage projects, tasks, and timelines within a unified platform. Project Pulse integrates tools and resources for seamless project oversight and control.Project Pulse simplifies complex project workflows by providing an intuitive platform where teams can collaborate seamlessly. From task assignment to progress tracking, every aspect is centralized for efficient management</p>
        </div>
        <div class="col-md-6 how-img">
            <img src="../assets/vector2.jpg" class="rounded-circle img-fluid" alt="" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 how-img">
            <img src="../assets/vector1.jpg" class="rounded-circle img-fluid" alt="" />
        </div>
        <div class="col-md-6">
            <h4>Project Pulse: Uniting Project Management</h4>
            <h4 class="subheading">Streamlined Management</h4>
            <p class="text-muted">FEffortlessly manage projects, tasks, and timelines within a unified platform. Project Pulse integrates tools and resources for seamless project oversight and control.Project Pulse simplifies complex project workflows by providing an intuitive platform where teams can collaborate seamlessly. From task assignment to progress tracking, every aspect is centralized for efficient management</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <h4>Project Pulse: Uniting Project Management</h4>
            <h4 class="subheading">Streamlined Management</h4>
            <p class="text-muted">FEffortlessly manage projects, tasks, and timelines within a unified platform. Project Pulse integrates tools and resources for seamless project oversight and control.Project Pulse simplifies complex project workflows by providing an intuitive platform where teams can collaborate seamlessly. From task assignment to progress tracking, every aspect is centralized for efficient management</p>
        </div>
        <div class="col-md-6 how-img">
            <img src="../assets/vector1.jpg" class="rounded-circle img-fluid" alt="" />
        </div>
    </div>
</div>
<div>{{ username }}</div>
</template>

<script>
import axios from 'axios'
import {
    mapActions,
    mapGetters,
    mapMutations,
    mapState
} from 'vuex';

export default {
    name: 'HomeComponent',
    components: {
      
    },
    data() {
        return {
            detail: {
                name: '',
                userId: ''
            } // Replace with the user's name fetched from the backend
        };
    },
    computed: {
        ...mapState({
            abc: (state) => state.name + "abc"
        }),
        // ...mapGetters({
        //     key: 'getName'
        // }),
       
  // ... other computed properties
  ...mapGetters({
    username: 'getName',
  }),
},
    
    methods: {
        ...mapMutations({
            changeIt: 'changeDetail'
        }),
        ...mapActions({
            change: 'changeDetailUsingAction'
        })
    },
    async mounted() {

        try {

            const token = localStorage.getItem('token')
            if (!token) {
                this.$router.push({
                    name: 'Login'
                })

                return;
            }
            console.log(token);
            const response = await axios.get('http://localhost:5000/user/getUserById', {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            });
            // Handle the response
            console.log(response)
            // this.change({
            //     name: response.data.results[0].username,
            //     user_id: response.data.results[0].user_id
            // })

            console.log('User details:', response.data.results[0]);
            return response.data;
        } catch (error) {
            console.log('Error fetching user details:', error.response.data);
            throw new Error('Failed to fetch user details');
        }
    }

};
</script>

<style scoped>
.image-container {
    height: 400px;
    /* Adjust height according to your layout */
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.content {
    text-align: center;
    margin-top: 20px;
}

.content h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.content p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
}

.how-section1 {
    margin-top: -15%;
    padding: 10%;
}

.how-section1 h4 {
    color: #28a745;
    font-weight: bold;
    font-size: 30px;
}

.how-section1 .subheading {
    color: #3931af;
    font-size: 20px;
}

.how-section1 .row {
    margin-top: 10%;
}

.how-img {
    text-align: center;
}

.how-img img {
    width: 40%;
}

.carousel-image {
    height: 65vh;
    /* Set a specific height */
    max-height: 50%;
    /* Or, set a maximum height relative to the parent container */
}
</style>
