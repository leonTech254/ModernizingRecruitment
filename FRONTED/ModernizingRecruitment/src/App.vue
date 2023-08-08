<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    <nav>    
      <div class="logo">
        <div for="" id="" class="SchoolLogo">{{ schoolName }}</div>
        <div class="icon-toogle" id="icon-toogle" @click="ToogleMenu">
          <span class="material-icons toogleMenu" style="cursor: pointer;">menu</span>
        </div>
      </div>
      <ul class="mainMenu" id="mainMenu">
        <li>
          <RouterLink id="toRoute" to="/">Home<span class="material-icons">home</span></RouterLink>
        </li>
        <li>
          <RouterLink id="toRoute" to="/about-us">About<span class="material-icons">info</span></RouterLink>
        </li>
        <li>
          <RouterLink id="toRoute" to="/job-posting">Jobs<span class="material-icons">diversity_3</span></RouterLink>
        </li>
      
        <li>
          <RouterLink id="toRoute" to="/contact-us">contacts<span class="material-icons">call</span></RouterLink>
        </li>
        <li>
          <RouterLink id="toRoute" :to="{name:'admin-login'}">Account<span class="material-icons">person</span></RouterLink>
        </li>
      </ul>
    </nav>
    <div class="empty"></div>
  </div>
  <RouterView />
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
$(document).ready(function () {
  let routes = document.querySelectorAll("#toRoute")
  
  for (let i = 0; i < routes.length; i++)
  {
    routes[i].addEventListener('click', () => {
      let menu = document.getElementById("mainMenu")
      

      menu.classList.toggle("mainMenu")
      let allsubmenu = document.querySelectorAll(".sub-menu")

      for (let i = 0; i < allsubmenu.length; i++)
      {
        allsubmenu[i].classList.toggle("showToggle");
      }
   })
  
  }
})
export default {
  data() {
    return {
      schoolName:"VEMONA PRIMARY SCHOOL"
    }
  },
  methods: {
    ToogleMenu() {
      let menu = document.getElementById("mainMenu")
      menu.classList.toggle("mainMenu")
    },
    NavItemFunc(value) {
      if (value == "learn") {
        let subMenu = document.getElementById("subMenuLearn")
        subMenu.classList.toggle("showToggle")
      }
      else if (value == "projects") {
        let subMenu = document.getElementById("subMenuProject")
        subMenu.classList.toggle("showToggle")

      }
      else if (value == "Account") {
        let subMenu = document.getElementById("subMenuAccount")
        subMenu.classList.toggle("showToggle")

      }
    }
  },
  
  created() {

  


  },

}
</script>

<style  scoped>
@import url("./nav.css");
.empty
{
  height: 5.0rem;
}
</style>