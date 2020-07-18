<template>
    <div class="header">
        <router-link class="header__link" to="/">Home </router-link>
        <router-link class="header__link" to="/users">Lista de usuarios </router-link>
        <router-link class="header__link" to="/posts">Posts </router-link>
        <router-link class="header__link" to="/albums">Albumes</router-link>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped lang="scss">
    .header{
        background-color: #ffb4a2;
        height: 3rem; 
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &__link {
            text-decoration: none;
            margin: 0 1rem;
            color: #b5838d;
            
            &.router-link-exact-active, &:hover {
                color: #6d6875;
            }
        }
    }

</style>