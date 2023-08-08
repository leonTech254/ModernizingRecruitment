<template>
    <div>
    <div>
    <titleComponent title="About Us"/>
    <div class="content">
    {{ schoolAbout }}
    <RouterLink id="toRoute" to="/about-us">Read more.....<span class="material-icons">info</span></RouterLink>
    </div>
    </div>
    </div>
</template>

<script>
import titleComponent from './titleComponent.vue';
export default {
    data() {
        return {
            schoolAbout:`Vemona Primary School is a private school located in a Kiambu in an estate called Pickens
Garden Estate with a high rate of unemployment. The school has a diverse student population,
with students from different socio-economic backgrounds.`
        }
    },
    components:{
        titleComponent
    },
    methods:{
        sliceabout(text) {
            console.log(text.length)
            if(text.length<=529)
            {
                text=text.slice(0,529)

            }
            return text;
           
 

}


    },

    created() {
        this.schoolAbout=this.sliceabout(this.schoolAbout);
        
       
                
    },
 
}
</script>

<style lang="css" scoped>
.content
{
    padding: 30px;
    text-align: center;
}

</style>