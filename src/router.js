import Vue from "vue";
import Router from "vue-router"; // router를 사용하기 위한 import
import HelloWorld from "./views/HelloWorld";
import About from "./views/About";
import Post from "./views/Portfolio";
import Project from "./views/Project";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Portfolio",
      name: "Portfolio",
      component: Post
    },
    {
      path: "/Project",
      name: "Project",
      component: Project
    }
  ]
});
