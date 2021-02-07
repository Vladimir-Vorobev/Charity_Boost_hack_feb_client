<template>
<div>
    <main>
        <div class="row justify-content-center" style="margin: 0px;">
            <div class="col-10 col-md-11">
                <h2>Профиль</h2>
            </div>
            <div class="col-2 col-md-1" style="padding: 0px 5px;">
                <button class='btn btn-almbb-danger btn-almbb-small' @keyup.enter="notexit()" @click="exit()"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
        <div v-if="this.$store.state.role == 'fund'">
            <div class="row justify-content-center" style="margin: 0px;">
                <div class="col-12 info">
                    <div>Название фонда: {{this.$store.state.name}}</div>
                    <div>Регистрационный номер: {{this.$store.state.number}}</div>
                    <div>Свидетельство о регистрации: {{this.$store.state.certificate}}</div>
                    <div>Адрес электорнной почты: {{this.$store.state.email}}</div>
                    <div>Номер телефона: {{this.$store.state.phone}}</div>
                    <div>Адрес: {{this.$store.state.address}}</div>
                    <div>Ссылка на сайт: {{this.$store.state.site}}</div>
                </div>
            </div>
            <hr>
            <div class="row justify-content-between" style="margin: 0px;">
                <div class="col-12 col-md-6 mt-1 mb-1">
                    <router-link to="/add-project" class='btn btn-blue btn-almbb-small'>Добавить новый проект</router-link>
                </div>
                <div class="col-12 col-md-6 mt-1 mb-1" style="padding: 0px 5px;">
                    <router-link to="/profile" class='btn btn-blue btn-almbb-small'>Архив проектов</router-link>
                </div>
            </div>
        </div>
        <hr>
        <h3>Текущие проекты</h3>
        <div class="row justify-content-left" style="margin: 0px;">
            <div class="col-12 col-md-4-6 col-lg-4 col-xl-3 mb-2" v-for="item in projects" :key="item.id">
                <div class="project">
                    <div class="image">
                        <img :src="item.image">
                    </div>
                    <div class="info">
                        <p style="color: #999999; margin-bottom: 4px;">
                            <small><strong>{{item.city}}</strong></small>
                        </p>
                        <div style="text-align: left;">
                            <span style="font-size: 1em;">{{item.title}}</span> <br>
                            <span style="font-size: 0.7em;">Категория: {{item.category}} | </span>
                            <span style="font-size: 0.7em;">Тип помощи: {{item.type_help}}</span> <br>
                            <span style="font-size: 0.75em; font-weight: 600;">Вы можете помочь</span> <br>
                            <span style="font-size: 0.75em;">{{item.help}}</span>
                        </div>
                        <div style="width: 95%; position: absolute; bottom: 10px;">
                            <hr style="margin: 3px;">
                            <div class="row" style="margin: 0px; line-height: 22px; vertical-align: baseline;">
                                <div class="col-12" style="font-size: 0.8em;">
                                    <div style="text-align: justify;">
                                        <strong>Цель: {{item.money}}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="this.$store.state.role == 'business'">
            <div class="row justify-content-center" style="margin: 0px;">
                <div class="col-12 info">
                    <div>Название компании: {{this.$store.state.name}}</div>
                    <div>ФИО ответственного: {{this.$store.state.full_name_responsible_person}}</div>
                    <div>Адрес электорнной почты: {{this.$store.state.email}}</div>
                    <div>Номер телефона: {{this.$store.state.phone}}</div>
                </div>
            </div>
            <hr>
            <h3>Проекты, которым мы помогли</h3>
        </div>
    </main>
</div>

</template>


<script>
export default {
    name: 'profile',
    data(){
        return{
            email: this.$store.getters.email,
            session_id: this.$store.getters.SessionID,
            projects: [],
        }
    },
    beforeMount(){
        if(this.email == undefined) document.location.href = '/login'
        fetch(this.$store.state.serverIp + '/get_my_now_projects/', {
            method: 'POST',
            body: JSON.stringify({email: this.$store.getters.email, session_id: this.$store.getters.SessionID}),
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
            else{
                this.projects = data
            }
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods:{
        exit(){
            document.cookie = "email=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
            document.cookie = "SessionID=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
            document.cookie = "role=" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
            window.location.reload()
            document.location.href = "/login"
        },
    }
}
</script>

<style scoped>
main {
    padding: 70px 5px 0px;
}
@media (max-width:767px) {
    .info {
        font-size: 1.1em;
        text-align: left;
        padding: 0px 5px;
    }
}
@media (min-width:768px) {
    .info {
        font-size: 1.3em;
        text-align: left;
        padding: 0px 2em;
    }
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
</style>