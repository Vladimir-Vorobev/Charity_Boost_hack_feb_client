<template>
    <div class="main">
        <div class="container warp">
            <h2>Добавить проект</h2>
            <form class="formbox mb-5">
                <div class="form-group row">
                    <label for="exampleInputEmail1">Изображение<span class="star">*</span></label>
                    <input type="file" id="image" accept="image/*" @input="add_image()">
                </div>
                <div class="form-group row">
                    <label for="exampleInputEmail1">Город<span class="star">*</span></label>
                    <input id="city" class="form-control formInput" @input="add_city()">
                </div>
                <div class="form-group row">
                    <label for="exampleInputEmail1">Заголовок<span class="star">*</span></label>
                    <input id="title" class="form-control formInput" @input="add_title()">
                </div>
                <div class="form-group row">
                    <label for="exampleInputEmail1">Чем нужно помочь<span class="star">*</span></label>
                    <input id="help" class="form-control formInput" @input="add_help()">
                </div>
                <div class="form-group row">
                    <label for="exampleInputEmail1">Цена<span class="star">*</span></label>
                    <input id="money" class="form-control formInput" @input="add_money()">
                </div>
                <div class="row"> 
                    <button class="btn btn-rounded-blue btn-lg" @click="add_project()">Добавить</button>
                </div>
            </form>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 block mb-2">
            <strong>Как выглядит карточка проекта</strong>
            <div class="project">
                <div class="image">
                    <img v-if="image != ''" :src="image">
                    <img v-else src="./../assets/no_image.png">
                </div>
                <div class="info">
                    <p style="color: #999999;">
                        <small><strong>{{city}}</strong></small>
                    </p>
                    <div style="text-align: justify;">
                        <span style="font-size: 1.2em;">{{title}}</span> <br>
                        <span style="font-size: 0.85em; font-weight: 600;">Вы можете помочь</span> <br>
                        <span style="font-size: 0.85em;">{{help}}</span>
                    </div>
                    <hr style="marging-bottom: 0px;">
                    <div class="row" style="margin: 0px; line-height: 20px; vertical-align: baseline;">
                        <div class="col-12" style="font-size: 0.8em;">
                            <div style="text-align: justify;">
                                <strong>Цель {{money}}</strong>
                            </div>
                        </div>
                    </div>
                    <div style="width: 95%; position: absolute; bottom: 10px;">
                        <div class="row justify-content-center" style="margin: 0px; width: 100%;">
                        <div class="col-12 col-md-6" style="padding: 3px;">
                            <button class="btn btn-indigo btn-almbb-small" style="width: 100%;">Помочь</button>
                        </div>
                        <div class="col-12 col-md-6" style="padding: 3px;">
                            <button class="btn btn-indigo btn-almbb-small" style="width: 100%;">Связаться</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Swal from 'sweetalert2'
export default {
    name: 'add_project',
    data(){
        return{
            image: '',
            city: '',
            title: '',
            help: '',
            money: '',
        }
    },
    beforeMount(){
        if(this.$store.getters.email == undefined || this.$store.state.role != 'fund') document.location.href = '/login'
    },
    methods:{
        add_image(){
            let image = document.getElementById('image').files[0]
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (() =>{
                this.image = reader.result
            })
            reader.onerror = function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка',
                    showConfirmButton: false,
                    text: 'Неожиданная ошибка. Пожалуйста, попробуйте еще раз',
                    timer: 2000,
                })
                console.log('Error: ', error);
            };
        },
        add_city(){
            this.city = document.getElementById('city').value
        },
        add_title(){
            this.title = document.getElementById('title').value
        },
        add_help(){
            this.help = document.getElementById('help').value
        },
        add_money(){
            this.money = document.getElementById('money').value
        },
        add_project(){
            event.preventDefault()
            if(this.image.trim() == ''){
                Swal.fire({
                    icon: 'warning',
                    text: 'Загрузите картинку'
                });
            }
            else if(this.city.trim() == ''){
                Swal.fire({
                    icon: 'warning',
                    text: 'Введите город'
                });
            }
            else if(this.title.trim() == ''){
                Swal.fire({
                    icon: 'warning',
                    text: 'Введите заголовок'
                });
            }
            else if(this.help.trim() == ''){
                Swal.fire({
                    icon: 'warning',
                    text: 'Введите, чем нужно помочь'
                });
            }
            else if(this.money.trim() == ''){
                Swal.fire({
                    icon: 'warning',
                    text: 'Введите цену'
                });
            }
            else{
                fetch(this.$store.state.serverIp + '/add_project/', {
                    method: 'POST',
                    body: JSON.stringify({email: this.$store.getters.email, session_id: this.$store.getters.SessionID, image: this.image, city: this.city, title: this.title, help: this.help, money: this.money}),
                })
                .then(response => {
                    return response.json()
                })
                .then((data) => {
                    if(data == '310'){
                        document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                        document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                        document.cookie = "role=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
                        window.location.reload()
                    }
                    else if(data == 'OK'){
                        Swal.fire({
                            icon: 'success',
                            text: 'Проект успешно добавлен',
                            timer: 1500,
                        });
                        setTimeout(() => {
                            window.location.href = '/profile'
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
.main {
    padding-top: 70px;
}
footer {
    background-color: #ffffff;
    padding: 0px;
}
.project {
    height: 450px;
    width: 100%;
    border: #e0e0e0 solid 2px;
    border-radius: 5px;
    padding: 0px;
}
.project .image{
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 200px;
    background-color: #212121;
    position: relative;
}
.project .image img{
    width: 100%;
    height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    object-fit: cover;
}
.project .info {
    text-align: left;
    padding: 4px 7px 0px;
    height: 247px;
    position: relative;
}
.block{
    margin-left: auto;
    margin-right: auto;
}
.formbox {
    padding: 30px;
    border-radius: 30px;
    background-color: rgba(236, 236, 236, 0.829);
}
.warp{
    flex: 1 0 auto;
    background-color: #fff;
    padding: 0px 30px;
}
.star{
    color: red;
}
</style>