<template>
<div>
    <main>
        <div class="row justify-content-center" style="margin: 0px;">
            <div class="col-10 col-md-11">
                <h2>Профиль:</h2>
            </div>
            <div class="col-2 col-md-1" style="padding: 0px 5px;">
                <button class='btn btn-almbb-danger btn-almbb-small' @keyup.enter="notexit()" @click="exit()"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
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
        <hr>
        <h3>Текущие проекты:</h3>
        <div class="row" style="margin: 0px;">
            
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
        }
    },
    beforeMount(){
        if(this.email == undefined) document.location.href = '/login'
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
</style>