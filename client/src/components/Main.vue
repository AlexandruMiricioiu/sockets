<template>
  <div>
    <button @click="test">test route</button>
    <button @click="auth">auth route</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

    }
  },

  methods: {
    async test() {
      const response = await axios.get('http://localhost:4000/', { withCredentials: true })
      console.log(response.data)
    },

    async auth() {
      const response = await axios.get('http://localhost:4000/auth', { withCredentials: true })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
  button {
    padding: 3rem;
    margin: 0 1rem 0 1rem;
  }
</style>
