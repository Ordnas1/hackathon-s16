import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const USER_URL = 'https://jsonplaceholder.typicode.com/users'
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'

async function fetchResource(context, resource, mutation) {
  let promise = await fetch(resource)
  let data = await promise.json()
  context.commit(mutation, data)
}


export default new Vuex.Store({
  state: {
    users: null,
    posts: null,
    albums: null
  },
  mutations: {
    setUsers (state, Users) {
      state.users = Users
    },
    setPosts (state, Posts) {
      state.posts = Posts
    },
    setAlbums (state, Albums) {
      state.albums = Albums
    }
  },
  actions: {
    initUsers (context) {
      fetchResource(context, USER_URL, "setUsers")
    },
    initPosts (context) {
      fetchResource(context, POST_URL, 'setPosts')
    },
    initAlbums (context) {
      fetchResource(context, ALBUM_URL, 'setAlbums')
    }
  },
  modules: {
  }
})
