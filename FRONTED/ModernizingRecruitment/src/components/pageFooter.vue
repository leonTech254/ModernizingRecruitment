<template>
  <div class="wrapper">
    <div class="footerContainer">
      <div>
        <img src="../assets/images/vemona.png" alt="" />
        <div class="schoolmotto">
          <span>Education for positve change</span>
        </div>
      </div>
      <div class="impotantLink">
        <titleComponent title="Quick links" color="var(--main-theme)" />
        <ul>
          <li>
            <span class="material-icons">chevron_right</span
            ><RouterLink to="/events">Events</RouterLink>
          </li>
          <li>
            <span class="material-icons">chevron_right</span
            ><RouterLink id="toRoute" to="/about-us#history">school history</RouterLink>
          </li>
          <li>
            <span class="material-icons">chevron_right</span
            ><RouterLink to="/gallerry">school gallery</RouterLink>
          </li>
          <li>
            <span class="material-icons">chevron_right</span
            ><RouterLink to="/contact-us">contact us</RouterLink>
          </li>
          <li>
            <span class="material-icons">chevron_right</span
            ><RouterLink to="/about-us#performance">school performance</RouterLink>
          </li>
        </ul>
      </div>
      <div class="vision">
        <titleComponent title="Contact us" color="var(--main-theme)" />
        <ul>
          <li>
            <i class="bi bi-phone"></i
            ><a :href="'tel+' + schoolPhoneNumber">+254720284278</a>
          </li>
          <li>
            <i class="bi bi-facebook facebook"></i
            ><a :href="schoolfaceBookPage">facebook</a>
          </li>
          <li><i class="bi bi-twitter facebook"></i> <a href="">twitter</a></li>
          <li><i class="bi bi-map location"></i> P.O BOX {{ boxNumber }}</li>
        </ul>
      </div>
    </div>
    <div class="year">&copy {{ currentYear }}</div>
  </div>
</template>

<script>
import titleComponent from "./titleComponent.vue";
export default {
  data() {
    return {
      boxNumber: "29,Vemona",
      schoolfaceBookPage: "",
      schoolPhoneNumber: "+254720284278",
      currentYear: null,
    };
  },
  components: {
    titleComponent,
  },
  mounted() {
    let date = new Date();
    this.currentYear = date.getFullYear();
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  min-height: 50vh;
  background-color: var(--main-theme);
  color: #fff !important;
}
.footerContainer {
  padding: 10px;
}

.footerContainer img
{
  border-radius: 50%;
}
.footerContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.footerContainer img {
  width: 5rem;
}
.year {
  min-height: 10vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.schoolmotto span {
  font-family: "Freehand", cursive;
  font-size: x-large;
}
.facebook,
.twitter {
  color: blue;
}
.location {
  color: red;
}
.impotantLink ul,
.vision ul {
  width: fit-content;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
/* ================Responsiveness============================== */

@media (max-width: 700px) {
  .footerContainer {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
