<template>
    <div>
        <h1>Posts</h1>
        <div class="postCont">
            <div class="postCard" v-for="post in posts">
                {{ post.title }} 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Posts",
    computed: {
        posts () {
            return this.$store.state.posts
        }
    },
}
</script>
<style scoped lang="scss">
    .postCont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 440px));
    grid-template-rows: auto;
    width: 100%;
    gap: 1rem 1rem;
    justify-content:center;
}

    .postCard {
    cursor: pointer;
    border: 1px #6d6875 solid;
    border-radius: 6px;
    height: 2.2rem;
    padding: 0.3rem;
}
</style>