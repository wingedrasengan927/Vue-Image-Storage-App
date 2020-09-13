<template>
  <div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AuthHandler',
    methods: {
      ...mapActions(['finalizeLogin']),
      returnHome() {
        this.$router.push('/')
      }
    },
    created() {
        this.finalizeLogin(window.location.hash);
        this.returnHome()
    }
}
</script>

<style>

</style>