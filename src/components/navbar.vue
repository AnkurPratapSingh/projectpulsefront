<template lang="">
<div class="nav" v-show="true">
    <div class="makeflex">
        <router-link to="/">Home</router-link>
        <router-link to="/addproject" v-if="role==='admin'"> Add Projects</router-link>
        <router-link to="/sign-up" v-if="role==='admin'">Add member</router-link>

        <router-link to="dashboard" v-if="role==='admin'">Dashboard</router-link>
        <router-link to="/managerprojectdetails" v-if="role==='manager'">Dashboard</router-link>


    </div>

    <div class="nav-action" >
        <router-link to="/profile">Hi {{username}}</router-link>
        <a @click="logout" href="#">Logout</a>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import {
   
    mapGetters,
  
   
} from 'vuex';

export default {
    name: 'navBar',
    props: ['detail'],
   
   data(){
    return {isAuthenticated:false,
    role:'manager'} 
   },
    computed:{
        ...mapGetters({
    username: 'getName',
  }),
 

    },
    watchEffect() {
    this.isAuthenticated = localStorage.getItem('token') !== null;
  },
    methods: {
        async logout() {
            console.log("logout");
            console.log(this.detail);
            const res = await axios.post('http://localhost:5000/user/logout', {
                user_id: this.$store.state.user_id
            });
            console.log(res);
            this.isloggedin=false;
            localStorage.clear();
            this.$router.push({
                name: 'Login'
            })
        },
        // isLogged(){
        //     const token = localStorage.getItem('token')
        //    if(token)
        //     this.isloggedin = true;
        // }
    },
    
}
</script>

<style>
.nav {
    position: fixed;
    top: 0;
    /* Set the top position to 0 */
    left: 0;
    /* Set the left position to 0 to span the entire width */
    width: 100%;
    /* Ensure it stretches across the entire viewport */
    z-index: 1;
    background-color: #28a745;
    overflow: hidden;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #ddd;
    color: #333;

}

.nav-actions {
    float: right;
    /* Position the actions to the right */
}

.user-profile {
    display: flex;
    align-items: center;
    margin-left: auto;
    /* Push profile to right */
}

.profile-circle {
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

.user-name {
    margin-left: 5px;
}
</style>
