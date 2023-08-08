<template>
    <div>
        <div class="card-menu">
            <ul>
                <li v-for="(menuItem, index) in menuRoute" :key="index">
                <!-- child component -->
                    <span class="item-wrapper" @click="$emit('whichPage',menuItem.class)">
                        <div class="menu-Item">
                            <span class="material-icons">fast_rewind</span>
                        </div>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            menuRoute: [
                { "name": "Dashboard", "class": "adminDashboard" },
            ]
        }
    },

}
</script>

<style lang="css" scoped>
* {
    padding: 0;
    margin: 0;
}

.card-menu {
    padding: 2px;
    background-color: var(--text-color-red);
    border: 1px solid var(--color-fadeAqua);
    box-shadow: 0px 0px 15px red;
    border-radius: 50%;
    position: fixed;
    right: 1rem;


}

.card-menu ul {
    
    gap: 1rem;
    align-items: center;
}

.menu-Item {
   
    color: var(--color-white);
    text-transform: uppercase;
    text-align: center;

}


.menu-Item span {
    font-weight: bold;
}
.card-menu
{
    margin: auto;
}

.card-menu .item-wrapper {
    text-decoration: none;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
ul
{
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

ul li {
    list-style: none;
    padding: 2px;
    font-size: small;
    width: 100%;
    text-align: center;
    border: 2px solid var(--color-black);
}

.card-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

}



.leoseperator {
    padding: 2px;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
}

.leoseperator .leoline {
    border: 1px solid white;
    width: 100%;
}

/* desktop */
</style>