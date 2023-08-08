<template>
    <div>
        <div class="contactUsHeader">
        <title2Component title="CONTACT US"/>
        
        </div>
        <div class="contactsWrapper">
        <div class="mapLocation">
        <h1 class="title"><span class="bi bi-map"></span> LOCATION</h1>
    

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.942164998092!2d36.87528947392272!3d-1.2007692987877632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f1c5943bdfd%3A0x8dd57f118aae109c!2sVemona%20Support%20Centre!5e0!3m2!1sen!2ske!4v1687457069798!5m2!1sen!2ske"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
        <div class="contacts">
            <h1 class="title"><span class="bi bi-map"></span>Reach us through</h1>
           <ul>
           <li> <span class="bi bi-telephone"></span> {{ contact.phone }}</li>
           <li> <span class="bi bi-envelope"></span> {{ contact.email }}</li>
           <li> <span class="bi bi-map"></span>
           <li>
           
           <span v-html="contact.address"></span>


           </li>
           
           </li>
           </ul>

        </div>
           
        </div>
        <pageFooter/>
    </div>
</template>

<script>
import titleComponent from '../../components/titleComponent.vue';
import title2Component from '../../components/title2Component.vue';
import pageFooter from '../../components/pageFooter.vue';
    export default {
        data() {
            return {
                contact:{"phone":"+254720284278","email":"vemonaprimary@gmail.com", address:`<div> P.O.BOX 1525 - 20100,</div>
           <div>VEMONA,NAIROBI</div>
           <div>KENYA </div>`},
            }
        },
        components:{
            titleComponent,
            pageFooter,
            title2Component
        }
        
    }
</script>

<style lang="css" scoped>
.contactUsHeader
{
    height: 40vh;
    background:linear-gradient(to left,black,rgba(0, 0, 0, 0.399)), url("https://resources.leonteqsecurity.com/Images/images1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    

}
iframe
    {

        width: 100%;
        height: 30rem;
    }
.title
{
    font-weight: bold;
    color: var(--main-theme);
}
.bi
{
color: var(--main-theme);
}
.contactsWrapper
{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1.5rem;
    padding: 20px;
    
}
span
{
    color: var(--text-color-dark);
}

@media (max-width: 700px)
{
    .contactsWrapper
    {
        grid-template-columns: repeat(1,1fr);
    }

  
}
</style>