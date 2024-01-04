import SignUp from "./components/signup.vue";
import Login from "./components/login.vue";
import Home from "./components/Home.vue";
import ForgetPassword from "./components/forgetPassword.vue";
import PasswordChange from "./components/passwordChange.vue";
import AddProject from "./components/addProject.vue";
import DashBoard from "./components/dashboard.vue";
import UpdateProject from "./components/updateProject.vue";
import profile from "./components/profile.vue";
import memberDetail from "./components/allMember.vue"
import updateMember from "./components/updateMember.vue"
import managerDashboard from "./components/managerDashboard.vue"
import managerProjectDetail from "./components/managerProjectDetails.vue"
// import { getUserRole } from './services/authservice';





import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "ForgetPassword",
    component: ForgetPassword,
    path: "/forgot-password",
  },
  {
    name: "PasswordChange",
    component: PasswordChange,
    path: "/passChange",
  },
  {
    name: "AddProject",
    component: AddProject,
    path: "/addproject",
  },
  {
    name: "DashBoard",
    component: DashBoard,
    path: "/dashboard",
  },
  {
    name: "UpdateProject",
    component: UpdateProject,
    path: "/updateproject/:id",
  },
  {
    name: "profile",
    component: profile,
    path: "/profile",
  },
  {
    name: "memberDetail",
    component: memberDetail,
    path: "/memberDetail",
  },
  {
    name: "updateMember",
    component: updateMember,
    path: "/updatemember/:id",
  },
  {
    name: "managerDashboard",
    component: managerDashboard,
    path: "/managerdashboard",
  },
  {
    name: "managerProjectDetail",
    component: managerProjectDetail,
    path: "/managerprojectdetails",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (!token && to.path !== '/login') { // Allow access to the login page
      next('/login');
    } else if(token && to.path=='/login'){
      next('/');
    }
    else{
        next()
    }
  });

export default router;
