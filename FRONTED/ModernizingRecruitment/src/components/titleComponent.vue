<template>
  <div class="container">
    <h1 class="heading-title aos-init" data-aos="fade-up"  data-aos-delay="800" :style="{ color: color }">{{ title }}</h1>
    <!-- <div class="border"></div> -->
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    color: {
      type: String,
      default: "var(--text-color-light)",
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  width: fit-content;
  margin: auto;
  padding-bottom: 10px;
}

/* .heading-title {
  display: inline-block;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  color: var(--text-color-red);

  font-family: "Gravitas One", cursive;
  font-family: "Luckiest Guy", cursive;
  font-family: "Oswald", sans-serif;
}*/

.heading-title {
  background-color: var(--text-color-red);
  display: inline-block;
  padding: 0.3rem 2rem;
  border-radius: 4px;
  clip-path: polygon(100% 0, 100% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%);
  font-family: "Oswald", sans-serif;
  margin-top: 0.5rem;
  text-align: center;
}
.border {
  border-bottom: 5px solid var(--border-color);
  width: 5rem;
}
</style>
