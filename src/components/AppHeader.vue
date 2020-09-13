<template>
  <div class="ui pointing menu">
      
    <router-link
    class="header item" to="/">
        Image Storage
    </router-link>
    <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal-buttons">
            <router-link
                to="/"
                :class="{active: isHome}"
                class="item">
                Gallery
            </router-link>
            <router-link
                to="/upload"
                :class="{active: isUpload}"
                class="item">
                Upload
            </router-link>
            <a
                @click="logOut"
                href="#" class="item">
                Log Out
            </a>
        </div>

        <a v-else
        href="#" class="item" @click="logIn">
        Login
        </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AppHeader',
    data() {
        return {
            activeClass: 'active'
        }
    },
    methods: {
        ...mapActions(['logIn', 'logOut'])
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
        currentPath() {
            return this.$route.path;
        },
        isHome() {
            return this.currentPath.length == 1;
        },
        isUpload() {
            return this.currentPath.includes('upload');
        }
    }
}

</script>

<style scoped>
    .ui.pointing.menu {
        max-width: 75%;
        margin: 0 auto;
        margin-top: 2rem;
        display: flex;
    }
    .horizontal-buttons {
        display: flex;
        flex-direction: row;
    }
</style>>
