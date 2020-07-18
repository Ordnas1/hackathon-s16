<template>
  <div id="app">
    <Header></Header>
    <router-view class="view"/>
    <Footer class="main-footer"></Footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: mapState({
    users: state => state.users
  }),
  methods: {
    ...mapActions([
      'initUsers',
      'initPosts',
      'initAlbums'
    ])
  },
  created() {
    this.initUsers()
    this.initPosts()
    this.initAlbums()
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Lato&family=Roboto+Condensed&display=swap');
body {
  margin: 0;
  background-color: #ffcdb2;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b5838d;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view {
  flex: 1;
}

h1 {
  font-family: 'Bad Script', cursive;
}

.main-footer {
  margin-top: 1rem;
}
</style>
