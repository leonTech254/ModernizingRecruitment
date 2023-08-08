<template>
    <div>
    <div class="cardwrapper">
    <div class="card" v-for="(card,index) in cards" @click="$emit('fromadmin',card.class)">
    <span style="font-size: 4rem;" class="material-icons">{{ card.icon }}</span>
    <div class="cardTitles">
    <span v-html="card.title"></span>
    </div> 
    </div>
    </div>
    </div>
</template>
<script>
export default {
data() {
        return {
            cards: [
    { 'title': "Posted Jobs", "icon": "school","class":"students" },
    { 'title': "postjob", "icon": "work","class":"postjob" },
    { 'title': "Applicants", "icon": "approval","class":"applicants" },
    { 'title': "schudele interview", "icon": "schedule", "class":"interviewSchedule"},
            ]
        
        }
},
}
</script>
// <i class="fa-solid fa-books"></i>
<style lang="css" scoped>
.cardwrapper
{
    /* margin-top: 100px; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;

}
@media(max-width:500px)
{
    .cardwrapper
    {
        grid-template-columns: repeat(2,1fr);
    }

}
.cardwrapper .card
{
    padding: 10px;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 0px 15px var(--text-color-dark);
    cursor: pointer;
    transition: 1s;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--main-theme);


}
@media (max-width: 500px)
{
    .cardwrapper .card
    {
        font-size: medium;
        text-transform: capitalize;
    }
}
.card span
{
    font-weight: bold;
}

.card:hover
{
   border: 1px solid var(--border-color);
   cursor: pointer;
    
}
</style>