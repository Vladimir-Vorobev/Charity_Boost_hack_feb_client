<template>
    <div class="main">
        <div class="container warp">
            <div class="formbox mb-5" style="margin-top: 200px; min-height: 107px;" v-if="type_reg == -1">
                <div class="row" style="margin: 0px;">
                    <div class="col-12 col-md-6" style="padding: 3px;">
                        <button class="btn btn-indigo" style="width: 100%;" @click="type_reg = 0">Регистрации для НКО</button>
                    </div>
                    <div class="col-12 col-md-6" style="padding: 3px;">
                        <button class="btn btn-indigo" style="width: 100%;" @click="type_reg = 1">Регистрации для бизнеса</button>
                    </div>
                </div>
            </div>
            <div class="formbox mb-5" v-else-if="type_reg == 0">
                <form>
                    <h2 class="text-center">Форма регистрации для НКО</h2>
                    <div class="text-left" v-if="reg == 0">Пожалуйста, заполните форму и внимательно ознакомьтесь с Условиями пользования платформой. Поля со звездочкой(<span class="star">*</span>) обязательны к заполнению.</div><br>
                    <div v-if="reg == 0">
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Название фонда/НКО<span class="star">*</span></label>
                            <input type="email" name="name" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Регистрационный номер<span class="star">*</span></label>
                            <input type="email" name="number" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Свидетельство о регистрации<span class="star">*</span></label>
                            <input type="email" name="certificate" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Адрес электронной почты<span class="star">*</span> (для связи)</label>
                            <input type="email" name="email" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Номер телефона<span class="star">*</span> (для связи)</label>
                            <input type="email" name="phone" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Адрес<span class="star">*</span></label>
                            <input type="email" name="address" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Ссылка на сайт</label>
                            <input type="email" name="site" class="form-control formInput">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputPassword1">Пароль<span class="star">*</span></label>
                            <input type="password" class="form-control formInput" name="password">
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputPassword1">Повторите пароль<span class="star">*</span></label>
                            <input type="password" class="form-control formInput" name="password2">
                        </div>
                        <div class="row"> 
                            <button class="btn btn-rounded-blue btn-lg" @click="code()">Отправить</button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="form-group row">
                            <label for="exampleInputEmail1">Код подтверждения</label>
                            <input name="code" class="form-control formInput">
                        </div>
                        <div class="row"> 
                            <button class="btn btn-rounded-blue btn-lg" @click="registration()">Зарегистрироваться</button>
                        </div>
                    </div>
                </form> <br>
            </div>
            <div class="formbox mb-5" v-else-if="type_reg == 1">

            </div>
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
            type_reg: -1,
            name: '',
            number: '',
            certificate: '',
            phone: '',
            address: '',
            site: '',
            email: '',
            password: '',
        }
    },
    methods: {
        code(){
            event.preventDefault()
            let form = document.forms[0]
            let name = form.elements.name.value
            let number = form.elements.number.value
            let certificate = form.elements.certificate.value
            let email = form.elements.email.value.replace(/\s/g, '')
            let phone = form.elements.phone.value
            let address = form.elements.address.value
            let site = form.elements.site.value
            let password = form.elements.password.value
            let password2 = form.elements.password2.value
            this.name = name
            this.number = number
            this.certificate = certificate
            this.phone = phone
            this. address = address
            this.site = site
            this.email = email
            this.password = password
            if(name.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите название фонда/НКО'
                });
            }
            else if(number.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите регистрационный номер'
                });
            }
            else if(certificate.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите свидетельство о регистрации'
                });
            }
            else if(phone.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите номер телефона'
                });
            }
            else if(address.trim() == ''){
                this.$swal({
                    icon: 'warning',
                    text: 'Введите адрес'
                });
            }
            else if(password.trim() == ''){
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
                    if(data == 'incorrect_email'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Пользователь с таким email уже существует'
                        });
                    }
                    else if(data == 'send_code'){
                        Swal.fire({
                            icon: 'success',
                            text: 'Код подтверждения отправлен Вам на почту'
                        });
                        this.reg = 1
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
            event.preventDefault()
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
                    body: JSON.stringify({name: this.name, number: this.number, certificate: this.certificate, phone: this.phone, address: this.address, site: this.site, email: this.email, password: this.password, code: code}),
                })
                .then(response => {
                    return response.json()
                })
                .then((data) => {
                    if(data == 'incorrect_email'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Пользователь с таким email уже существует'
                        });
                    }
                    else if(data == 'incorrect_code'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Неверный код подтверждения'
                        });
                    }
                    else if(data == 'code_time_out'){
                        Swal.fire({
                            icon: 'error',
                            text: 'Срок действия кода истек. Повторите попытку регистрации заново'
                        });
                    }
                    else if(data == 'reg_in'){
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
.star{
    color: red;
}
.formbox {
    padding: 30px;
    border-radius: 30px;
    background-color: rgba(236, 236, 236, 0.829);
}
</style>