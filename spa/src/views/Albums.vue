<template>
    <div>
        <h1>Albumes</h1>
        <div class="albumCont">
            <div class="albumCard" v-for="album in albums">
                {{ album.title }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Albums",
    computed: {
        albums () {
            return this.$store.state.albums
        }
    },
}
</script>
<style scope lang="scss">
    .albumCont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 440px));
    grid-template-rows: auto;
    width: 100%;
    gap: 1rem 1rem;
    justify-content:center;
}

    .albumCard {
    border: 1px #6d6875 solid;
    border-radius: 6px;
    height: 2.2rem;
    padding: 0.3rem;
}
</style>