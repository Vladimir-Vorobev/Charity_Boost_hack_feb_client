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
                <div>Название фонда: </div>
                <div>Регистрационный номер: </div>
                <div>Свидетельство о регистрации: </div>
                <div>Адрес электорнной почты: </div>
                <div> Номер телефона: </div>
                <div>Адрес: </div>
                <div>Ссылка на сайт: </div>
            </div>
        </div>
        <hr>
        <div class="row justify-content-between" style="margin: 0px;">
            <div class="col-12 col-md-6 mt-1 mb-1">
                <a href="#" class='btn btn-blue btn-almbb-small'>Добавить новый проект</a>
            </div>
            <div class="col-12 col-md-6 mt-1 mb-1" style="padding: 0px 5px;">
                <a href="#" class='btn btn-blue btn-almbb-small'>Архив проектов</a>
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