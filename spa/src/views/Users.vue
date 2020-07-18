<template>
  <div class="about">
    <h1>Lista de usuarios</h1>
    <div class="userCont">
      <div class="userCard" v-for="user in users">
        <h2>{{user.name}}</h2>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "Users",
  computed: {
    users () {
      return this.$store.state.users
    }
  },
}
</script>
<style scoped lang="scss">
  .userCont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 440px));
    grid-template-rows: auto;
    width: 100%;
    gap: 1rem 1rem;
    justify-content:center;
  }

  .userCard {
    cursor: pointer;
    border: 1px #6d6875 solid;
    border-radius: 6px;


  }
</style>