<template>
        <nav class="navbar navbar-expand-lg navbar-light  fixed-top navStyle">
            <router-link to="/" class="router-link">
                <a class="navbar-brand" ref="home" style="color: #303f9f">Дари улыбку</a> <!-- #f23333 -->
            </router-link>
            <button @click="animate_toggler()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="anim-bar-dark anim-2">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" @click="animate_navbar()">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="router-link">
                            <a class="nav-link">Главная</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/market" class="router-link">
                            <a class="nav-link">Помочь</a>
                        </router-link>
                    </li>
                </ul>
                <router-link to='/login' class="router-link login ml-auto" style="display:block;">
                    <a type="button" class="btn btn-rounded-blue btn-lg">{{loginText}}</a>
                </router-link>
                <div class="dropdown person_menu" style="display:none">
                    <button class="btn btn-rounded-blue dropdown-toggle user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{loginText}}
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <div class="dropdown-divider"></div>
                        <button @click="exit()" class="dropdown-item exit personMenuDrop" style>Выйти</button>
                    </div>
                </div>
            </div>
        </nav>
</template>


<script>
import Swal from 'sweetalert2'
export default {
    name: 'navbar',
    data(){
        return {
            loginText: 'Войти',
            role: '',
        }
    },
    beforeMount(){
        let email = this.$store.getters.email
        let SessionID = this.$store.getters.SessionID
        if(email != undefined){
            fetch(this.$store.state.serverIp+'/get_information', {
                method: 'POST',
                body: JSON.stringify({email: email, sessionid: SessionID}),
            })
            .then(data => {
                if(data.data == '310'){
                    document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                    document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                    document.cookie = "role=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                    window.location.reload()
                }
                if(this.$store.state.email != undefined){
                    this.loginText = this.$store.state.email
                    this.role = this.$store.state.role
                    document.querySelector('.login').style.display = 'none'
                    document.querySelector('.person_menu').style.display = 'block'
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'На сервере проходят технические работы, приносим свои извинения за доставленные неудобства',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                })
            })
        } 
    },

    methods: {
      exit(){
        document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        document.cookie = "role=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
        window.location.reload()
        document.location.href = "/login"
      },
      animate_navbar(){
          if(event.target.classList.contains('useful') == false && event.target.classList.contains('user') == false){
                document.querySelector('.navbar-collapse').classList.remove('show')
                document.querySelector('.navbar-toggler').classList.remove('active')
          }
      },
      animate_toggler(){
          document.querySelector('.navbar-toggler').classList.toggle('active')
      },
    }

}
</script>

<style scoped>
.router-link {
  text-decoration: none; /* отменяем подчеркивание ссылки */
  color: #fff;
}
.nav-link{
    color: #000 !important;
}
.dropdown-item{
    color: #16181b !important;
}
.exit{
  background-color: red;
}

.dropdown-item:active {
  background: #f1f2f3 !important;
  outline: 0px;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
}
.navStyle{
    /* background-color: rgba(255,255,255,1); */
    background-color: #ffffff;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.10);
}
</style>