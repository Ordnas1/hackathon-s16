<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>
<script>
export default {
    name: "Post",
    computed: {
        post () {
            return this.$store.state.posts[this.$route.params.id - 1]
        }
    },
}
</script>
<style scoped lang="scss">
    
</style>