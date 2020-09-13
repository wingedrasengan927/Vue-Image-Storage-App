<template>
  <div class="main">
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
    name: 'App',
    components: {
        AppHeader,
    }
}
</script>

<style>
  .main {
    max-width: 80%;
    margin: auto;
  }
</style>