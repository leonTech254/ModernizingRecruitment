<template>
    <div>
    <div class="AboutSchoolHeader">
<title2Component title="ABOUT US" />
    </div>


    <titleComponent title="History of the school" id="history"/>
   <div class="schoolHistory">
  {{ schoolAbouts.history }}
   
   </div>
   <!-- <div class="performance" id="performance">
    <titleComponent title="Academic Performance"/>
   <h1 class="title">TOP KCPE STUDENTS</h1>
   <table>
    <tr>
    <th>NAME</th>
    <th>GRADE</th>
    <th>POINTS</th>
    <th>YEAR</th>
    </tr>
    <tr v-for="(student,index) in topStudents" :key="student">
    <td class="studentName">{{ student.name }}</td>
    <td>{{ student.grade }}</td>
    <td>{{ student.points }}</td>
    <td>{{student.year}}</td>
    </tr>
   </table>
   <br><br>
   <h1 class="title">OVERALL PERFORMANCE</h1>
   <table>
    <tr>
    <th>POINTS</th>
    <th>YEAR</th>
    </tr>
    <tr v-for="(student,index) in schoolOverallPerformance" :key="student">
    <td>{{ student.points }}</td>
    <td>{{student.year}}</td>
    </tr>
   </table>
   </div> -->

   <div class="sectionContactSeperator">
   <h1 class="title">CONTACT US</h1>

   <div class="contactInfoWrapper">
   <ul>
   
   <li><span>
<span class="bi bi-envelope"></span> {{ schoolEmail }}
</span></li>
   <li>
    <span><span class="bi bi-telephone"></span>{{ phone }}</span>
   </li>
   </ul>
   </div>
   </div>
   <div class="schoolsvisionMission">
   <titleComponent title="vision"/>
   <div class="vissionWrapper">
    <div>{{ schoolAbouts.vision }}</div>
   </div>
  
   </div>



    </div>
</template>

<script>
import titleComponent from './titleComponent.vue';
import title2Component from './title2Component.vue';
    export default {
        data() {
            return {
                schoolEmail:"venomeprimary@gmail.com",
                phone:"+254720284278",
                schoolAbouts:{"history":`  Vemona Primary School is a private school located in a Kiambu in an estate called Pickens
Garden Estate with a high rate of unemployment. The school has a diverse student population,
with students from different socio-economic backgrounds. Due to limited resources, the school
often struggles to attract and retain qualified teachers, which has a direct impact on the quality of
education that students receive. The size of the school is two-storey building not that big.
The recruitment process for Vemona Primary School has traditionally been conducted
manually, which is time-consuming and error-prone. A web-based recruitment portal could
simplify and streamline this process, making it easier to find qualified candidates for various
position at the school. Additionally, it could provide a centralized platform for job seekers to
apply for these positions, and for the school to manage the recruitment process efficiently.`,"vision":`Venoma Primary School aims to foster a dynamic learning environment where every child is inspired, empowered, and equipped with the knowledge, skills, and values to thrive in a rapidly changing world. We envision a community of lifelong learners, where curiosity is nurtured, diversity is celebrated, and each child's unique potential is recognized and encouraged. Through innovative teaching practices, collaborative partnerships, and a nurturing atmosphere, we strive to cultivate responsible global citizens who are prepared to make positive contributions to society.`},
                topStudents:[
                    {"name":"martin Leon","grade":"B+","points":"66","year":2023},
                    {"name":"martin Leon","grade":"B+","points":"66","year":2023},
                    {"name":"martin Leon","grade":"B+","points":"66","year":2023},
                    {"name":"martin Leon","grade":"B+","points":"66","year":2023},
                    {"name":"martin Leon","grade":"B+","points":"66","year":2023},
                ],
                schoolOverallPerformance:[
                    {"points":"6.5","year":"2023"},
                    {"points":"7.0","year":"2022"},
                    {"points":"5.0","year":"2021"},
                    {"points":"4.5","year":"2020"},
                    {"points":"5.0","year":"2019"},
                    {"points":"5.0","year":"2018"},
                ]
                
            }
        },
        components:{
            titleComponent,
            title2Component
        }
    }
</script>

<style lang="css" scoped>
.AboutSchoolHeader
{
    height: 30vh;
    width: 100%;
    background: linear-gradient(var(---opacitity-black),var(---opacitity-black)), url("https://resources.leonteqsecurity.com/Images/images1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}
.schoolHistory
{
    padding: 20px;
}
.title
{
    color: var(--main-theme);
}
table
{
    width: 100%;
    text-align: center;
}
table th
{
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: bold;
}
table td
{
    padding: 5px;
}
.studentName
{
    font-weight: bold;
    text-transform: capitalize;
}
.sectionContactSeperator
{
    height: 50vh;
    width: 100%;
    background:linear-gradient(to left,black,rgba(0, 0, 0, 0.433)),url("../assets//IMAGES//aboutSeperator.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.sectionContactSeperator
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.sectionContactSeperator .title
{
    text-shadow: 1px 1px 1px #fff;
}
.contactInfoWrapper
{
    display: flex;
    flex-direction: column;
}

.contactInfoWrapper span
{
    color: var(--text-color-red);
    font-weight: bold;
    text-shadow: 1px 1px 5px var(--main-theme);
    font-size: larger;
}
ul li
{
  
    align-items: center;
    align-items:center;
}
ul li .bi
{
    font-size:larger;
}
.schoolsvisionMission
{
    text-align: center;
    padding: 10px;
}
.vissionWrapper
{
    display: grid;
    grid-template-columns: repeat(3,1fr);

}
.vissionWrapper>div
{
    grid-column: 2;
}

@media(max-width:700px)
{
    .vissionWrapper
    {
        grid-template-columns: repeat(1,1fr);
    }
}
</style>