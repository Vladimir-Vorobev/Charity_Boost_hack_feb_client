<template>
    <div id="app" style="height: 100% !important;">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from './components/navbar.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'App',
    components: { NavBar },
    computed: { ...mapGetters(['email', 'SessionID']) },
    beforeCreate(){
        this.$store.commit('GET_USER_EMAIL', getCookie('email'))
        this.$store.commit('GET_USER_SESSIONID', getCookie('SessionID'))
        this.$store.commit('GET_USER_ROLE', getCookie('role'))
    },
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
</script>

<style>
::-webkit-scrollbar {
    width: 0.5em;
    height: 0.4em;
    background: transparent;
}
::-webkit-scrollbar-corner {
    display: none;
}
::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 0.2em;
}
html{
    scrollbar-color: #afafaf transparent; 
    scrollbar-width: thin;
    scrollbar-face-color: #afafaf ;
    scrollbar-track-color: transparent;
    min-height: 100vh;
}
body {
    width:100% !important; 
    height:100% !important;
    margin: 0px;
    background-color: #ffffff;
    min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  background-color: #ffffff;
  min-height: 100vh;
}
</style>