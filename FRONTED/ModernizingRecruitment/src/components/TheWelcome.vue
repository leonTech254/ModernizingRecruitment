<template>
  <div>
  <div class="sectionA">
    <div id="slideshow">
      <div v-for="(image, index) in LandingPage" :key="index" class="cursor" :class="{ active: activeCursor === index }">
      <div class="CursorInformation">
      <title2Component :title="image.title"/>
      <span >{{ image.description }}</span>
      </div>
      <div class="empty_background">
      
      </div>
      <div class="controllers">
      <span class="material-icons pointer" @click="controlImages('forward')">chevron_right</span>
      <span class="material-icons pointer" @click="controlImages('back')">chevron_left</span>
      </div>
        <img :src="'https://resources.leonteqsecurity.com/Images/'+image.src" :alt="image.alt">
      </div>
    </div>
  </div>
  <!-- ======================SECTION B================================ -->
<schoolAbout/>  
 
  <!-- ======================SECTION C================================ -->

<!-- <div class="sectionC">
  <titleComponent title="TESTIMONIES"/>

  <div class="cardsContainer">
    <div class="testimonial-card" v-for="(testmony,index) in Testmonies" :key="index">
  <div class="testimonial-content">
    <div class="testimonial-image">
      <img :src="'https://resources.leonteqsecurity.com/Images/'+testmony.src" alt="Profile">
    </div>
    <div class="testimonial-text">
      <p>{{ testmony.content }}</p>
    </div>
    <div class="testimonial-author">
      <h4>{{ testmony.name }}</h4>
      <p>{{testmony.whotoOrganization}}</p>
    </div>
  </div>
</div>
</div>

</div> -->
  <!-- ======================SECTION D================================ -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- =========================--><pageFooter/><!--======================================== -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- ================================================================= -->


  </div>
</template>
<script>
import titleComponent from './titleComponent.vue';
import title2Component from './title2Component.vue';
import pageFooter from './pageFooter.vue'
import schoolAbout from './schoolAbout.vue'


export default {
  components:{
    titleComponent,
    pageFooter,
    schoolAbout,
    title2Component
  },
  data() {
    return {
      activeCursor: 0,
      schoolName:"vemona high",
      currentYear:1111,
      currentMeanGrade:6.0,
      targetMeanGrade:7.5,
      LandingPage: [
        { src: "images1.jpg", alt: "image 1", title:"SCHOOL MOTTO",description:`Nurturing Minds, Inspiring Futures`},
        { src: "image2.jpg", alt: "image 2", title:"SCHOOL MISSION",description:`To provide a supportive and inclusive learning environment that fosters academic excellence, personal growth, and social-emotional development. .`},
        { src: "image3.jpg", alt: "image 3",title:"SCHOOL VISION",description:`Venoma Primary School aims to foster a dynamic learning environment where every child is inspired, empowered, and equipped with the knowledge, skills, and values to thrive in a rapidly changing world.`}
      ],
      Testmonies:[
        {"name":"leon Martin","content":`I'm Leon Martin, a proud parent of two students at vemona high. The dedication and passion of the teachers and staff at venom primary school have truly impressed me.`,src:"leonMartin.jpeg","whotoOrganization":"parent"},
        {"name":"leon Martin","content":`I'm Leon Martin, a proud parent of two students at vemona high. The dedication and passion of the teachers and staff at venom primary school have truly impressed me.`,src:"leontech1.jpeg","whotoOrganization":"parent"},
        {"name":"leon Martin","content":`I'm Leon Martin, a proud parent of two students at vemona high. The dedication and passion of the teachers and staff at venom primary school have truly impressed me.`,src:"leonMartin.jpeg","whotoOrganization":"parent"},
        {"name":"leon Martin","content":`I'm Leon Martin, a proud parent of two students at vemona high. The dedication and passion of the teachers and staff at venom primary school have truly impressed me.`,src:"leonMartin.jpeg","whotoOrganization":"parent"},
      ]

    };
  },
  methods: {
    getImagePath(path) {
      return new URL(path, import.meta.url).href;
    },
    controlImages(value)
    {
      if(value=="forward")
      {
        this.activeCursor+=1;
        this.autoChangeImage();
      }else
      {
        this.activeCursor-1;
        this.autoChangeImage();
      }
    },
    autoChangeImage()
  {
    this.activeCursor = (this.activeCursor + 1) % this.LandingPage.length;
    
  }
  },
  
  mounted() {
    setInterval(() => {
      this.autoChangeImage();
     
    }, 8000);

      // date management

  let date=new Date();
    this.currentYear= date.getFullYear();


    // slice testmonies
    if(this.Testmonies.length>4)
    {
      this.Testmonies=this.Testmonies.slice(0,3);
    }

    
  }

  
};
</script>

<style lang="css" scoped>
.sectionA
{
  background-color: black;
  overflow: hidden;
}
#slideshow {
  width: 100vw;
  height: 70vh;
  position: relative;
  transition: opacity 1s ease-in-out;
}

#slideshow .cursor {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transform: rotate(180deg);
}

#slideshow .cursor img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  transition: opacity 1s ease-in-out;
}

#slideshow .cursor.active {
  opacity: 1;
  transform: rotate(0deg);
  transition: transform 1s ease-in-out;
}
.empty_background
{
 background-color: rgba(0, 0, 0, 0.559);
  position: absolute;
  width: 100%;
  height: 100%;

}
.CursorInformation
{
  position: absolute;
  bottom: 3rem;
  padding: 10px;
 
  text-align: center;
  left: 0;
  right: 0;
  top: 50%; 
  transform: translateY(-50%);
  width: 90%;
  margin: auto;
  z-index:1;
}
.CursorInformation h1
{
  font-weight: bold;
}

.controllers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: absolute;
  width: 100%;
  top: 50%; 
  transform: translateY(-50%); 
  z-index: 2;
}

.controllers .material-icons
{
  font-size: 50px;
  background-color: rgba(0, 0, 0, 0.266);
  color: white;
}



/* ===========================SECTION B============================== */
.sectionB
{
  min-height: 50vh;
  padding: 10px;
  background:linear-gradient(to left,black,rgba(0, 0, 0, 0.491)), url("../assets//IMAGES/image2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #fff;
  width: 97%;
  margin: auto;
  margin-top: 10px;
  border-radius: 1rem;  
  position: relative;

  display: flex;
}
.sectionB .cardContainer
{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: .5rem;
  place-content: center;
  width: 100%;
  position: relative;


}
.sectionB .card
{
  padding: 10px;
  height: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border-radius: .5rem;
  height: 10rem;
  overflow-y: scroll;

}

.card  .title
{
  color: var(--main-theme);
  text-shadow: 1px 1px 10px #fff;

}
.card ul {
  text-align: left !important;
  list-style: none;
  padding: 0;
  width: 100%;
}

.card li {
  text-align: center;
  margin-bottom: 10px;
}



/* =========================SECTION C TESTMONIES============================================== */
.sectionC
{
  padding: 10px;
}
.sectionC .cardsContainer
{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: .5rem;
}
.testimonial-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  text-align: center;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.testimonial-text {
  margin-bottom: 20px;
}

.testimonial-author h4 {
  margin-bottom: 5px;
  font-size: 18px;
}

.testimonial-author p {
  font-size: 14px;
  color: #888;
}

.testimonial-image {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 20px;
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}





/* ****************************RESPONSIVENESS************************** */
@media (max-width: 500px)
{
.sectionB .cardContainer
{
  grid-template-columns: repeat(1,1fr);
}
.sectionC .cardsContainer
{
  grid-template-columns: repeat(1,1fr);
}
}

@media (max-width: 760px)
{
  .sectionC .cardsContainer
{
  grid-template-columns: repeat(2,1fr);
  gap: .3rem;
}
.testimonial-card
{
  /* width: 90%; */
  margin: auto;
  padding-left: 0;
  padding-right: 0;
}
#slideshow
{
  height: 55vh;
}



}












</style>
