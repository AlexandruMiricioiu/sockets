<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SocketioService from '@/services/socketio.service.js'

export default {
  name: 'App',
  components: {},
  created() {
    SocketioService.setupSocketConnection()
  },
  beforeUnmount() {
    SocketioService.disconnect()
  }
}

// socket.onAny((event, ...args) => {
//   console.log(event, args)
// })
</script>