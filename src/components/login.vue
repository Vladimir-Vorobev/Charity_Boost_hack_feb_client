<template>
    <div class="main">
        <div class="container warp">
            <div class="formbox">
                <form class="needs-validation" novalidate>
                    <h2>Войти</h2>
                    <div class="form-group" style="text-align: left">
                        <label for="exampleInputEmail1">Логин</label>
                        <input name="text" id="email" class="form-control formInput" placeholder='Логин' required>
                    </div>
                    <div style="text-align: left">
                        <label for="password">Пароль</label>
                    </div>
                    <div class="form-label-group input-group">
                        <input type="password" id="password" class="form-control formInput" name="password" placeholder="Пароль" required>
                        <div class="input-group-append" @click="showHidePwd()" style="cursor: pointer;">
                            <span class="input-group-text showHidePwd">
                                <i id="eye" class="far fa-eye-slash"></i>
                            </span>
                        </div>
                    </div>
                    <div class="form-row"> 
                        <button class="btn btn-rounded-blue btn-lg" @click="loginUser()">Войти</button>
                    </div>
                </form> <br>
                <p style="text-align: left; font-size: 1em; padding-left: 10px;">
                    <router-link to="/registration" class="router-link">Нет аккаунта?</router-link>
                </p>
            </div>
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import Footer from './footer.vue';
export default {
    name: 'login',
    components: { Footer },
    methods: {
        loginUser(){
            event.preventDefault()
            let form = document.forms[0]
            let email = form.elements.email.value
            let password = form.elements.password.value
            fetch(this.$store.state.serverIp + '/login/', {
                method: 'POST',
                body: JSON.stringify({email: email, password: password}),
            })
            .then(response => {
                return response.json()
            })
            .then((data) => {
                if(data == 'incorrect_password'){
                    Swal.fire({
                        icon: 'error',
                        text: 'Неверный логин или пароль'
                    });
                }
                else if(data == 'incorrect_email'){
                    Swal.fire({
                        icon: 'error',
                        text: 'Пользователь не найден'
                    });
                }
                else if(data.session_id != undefined){
                    document.cookie = "email=" + email + "; expires=" + new Date(Date.now() + 864000e3).toUTCString()
                    document.cookie = "SessionID=" + data.session_id + "; expires=" + new Date(Date.now() + 864000e3).toUTCString()
                    document.cookie = "role=" + data.role + "; expires=" + new Date(Date.now() + 864000e3).toUTCString()
                    window.location.href = '/'
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    text: 'Непредвиденная ошибка, повторите попытку позже'
                });
                console.log(err)
            })
        },
        showHidePwd() {
            var input = document.getElementById("password");
            if (input.type === "password") {
                input.type = "text";
                document.getElementById("eye").className = "far fa-eye";
            } else {
                input.type = "password";
                document.getElementById("eye").className = "far fa-eye-slash";
            }
        },
    }
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    padding-top: 210px !important;
    background-color: #fff;
    padding: 0px 30px;
}
.main{
    display: flex;
	flex-direction: column;
}
.main{
    height: 100%;
    padding: 0px;
    min-height: 100vh;
    margin-bottom: 0px;
}

.main p{
    color: #4f4f50;
    text-align: left !important;
    font-size: 0.86em;
    margin-left: -10px;
}
.link{
    color: #4f4f50;
    text-decoration: none;
}
.link:hover{
    color: #EF5B65;
    text-decoration: none;
}

.form-label-group {
    position: relative;
    margin-bottom: 1rem;
}
.formbox {
    padding: 30px;
    border-radius: 30px;
    background-color: rgba(236, 236, 236, 0.829);
}
i:hover {
    cursor: pointer;
}
.formInput{
    border-radius: 50px;
}
.showHidePwd{
    border-radius: 50px;
}
.router-link{
    color: black;
    text-decoration: none;
}
</style>