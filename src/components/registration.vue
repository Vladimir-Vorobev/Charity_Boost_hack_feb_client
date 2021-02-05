<template>
    <div class="main">
        <div class="container warp">
            <form class="formbox">
                <h2>Регистрация</h2>
                <div v-if="reg == 0">
                    <div class="form-group row">
                        <label for="exampleInputEmail1">Email адресс</label>
                        <input type="email" name="email" class="form-control formInput" placeholder="example@gmail.com" required>
                    </div>
                    <div class="form-group row">
                        <label for="exampleInputPassword1">Пароль</label>
                        <input type="password" class="form-control formInput" name="password" placeholder="Пароль" required>
                    </div>
                    <div class="form-group row">
                        <label for="exampleInputPassword1">Повторите пароль</label>
                        <input type="password" class="form-control formInput" name="password2" placeholder="Повторите пароль" required>
                    </div>
                    <div class="row"> 
                        <button class="btn btn-rounded-blue btn-lg" @click="code()">Подтвердить регистрацию</button>
                    </div>
                </div>
                <div v-else>
                    <div class="form-group row">
                        <label for="exampleInputEmail1">Код подтверждения</label>
                        <input name="code" class="form-control formInput" placeholder="Код" required>
                    </div>
                    <div class="row"> 
                        <button class="btn btn-rounded-blue btn-lg" @click="registration()">Зарегистрироваться</button>
                    </div>
                </div>
            </form> <br>
        </div>
        <div class="footer"><Footer></Footer></div> 
    </div>
</template>

<script>
import Footer from './footer.vue'
import Swal from 'sweetalert2'
export default {
    name: 'registration',
    components: { Footer },
    data(){
        return{
            reg: 0,
            email: '',
            password: '',
        }
    },
    methods: {
        code(){
            let form = document.forms[0]
            let email = form.elements.email.value.replace(/\s/g, '')
            let password = form.elements.password.value
            let password2 = form.elements.password2.value
            this.email = email
            this.password = password
            if(password.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите пароль'
                });
            }
            else if(password != password2){
                this.$swal({
                    icon: 'error',
                    text: 'Пароли не совпадают'
                });
            }
            else{
                fetch(this.$store.state.serverIp + '/reg-code/', {
                    method: 'POST',
                    body: JSON.stringify({email: email}),
                })
                .then(response => {
                    return response.json()
                })
                .then((data) => {
                    if(data.data == 'incorrect_email'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Пользователь с таким email уже существует'
                        });
                    }
                    else if(data.data == 'send_code'){
                        Swal.fire({
                            icon: 'success',
                            text: 'Код подтверждения отправлен Вам на почту'
                        });
                    }
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        text: 'Непредвиденная ошибка, повторите попытку позже'
                    });
                    console.log(err)
                })
            }
        },
        registration(){
            let form = document.forms[0]
            let code = form.elements.code.value
            if(code.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите код подтверждения с Вашей почты'
                });
            }
            else{
                fetch(this.$store.state.serverIp + '/registration/', {
                    method: 'POST',
                    body: JSON.stringify({email: this.email, password: this.password, code: code}),
                })
                .then(response => {
                    return response.json()
                })
                .then((data) => {
                    if(data.data == 'incorrect_email'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Пользователь с таким email уже существует'
                        });
                    }
                    else if(data.data == 'incorrect_code'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Неверный код подтверждения'
                        });
                    }
                    else if(data.data == 'code_time_out'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Срок действия кода истек. Повторите попытку регистрации заново'
                        });
                    }
                    else if(data.data == 'reg_in'){
                        Swal.fire({
                            icon: 'success',
                            text: 'Регистрация прошла успешно',
                            timer: 1500,
                        });
                        setTimeout(() => {
                            window.location.href = '/login'
                        }, 1500)
                    }
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        text: 'Непредвиденная ошибка, повторите попытку позже'
                    });
                    console.log(err)
                })
            }
        },
    }
}
</script>

<style scoped>
.warp{
    flex: 1 0 auto;
    padding-top: 110px !important;
    background-color: #fff;
    padding: 0px 30px;
}
.footer{
    flex: 0 0 auto;
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
.formInput{
    border-radius: 50px;
}
</style>