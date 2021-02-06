<template>
<div>
    <main>
        <div class="header text-center mb-4">
            <h2>Есть проект, но нет средств?</h2>
            <p><a class="btn btn-indigo" href="/add-project">Предложить свой проект</a></p>
        </div>
        <div class="welcome">
            <h3>Рады видеть вас на нашей платформе!</h3>
            <p style="margin-bottom: 0px; font-size: 1.1em;">
                Здесь НКО могут разместить свои проекты и найти партенеров, а коммерческие организации могут стать благотварителями.
            </p>
            <p style="font-size: 1.1em;">
                Предлагаем вам пройти краткое обучение для ознакомления с возможностями
            </p>
            <div class="row justify-content-between" style="margin: 0px;">
                <div class="col-12 col-md-6 mb-2">
                    <a href="#" class="btn btn-indigo">Мы НКО</a>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <a href="#" class="btn btn-indigo">Мы Коммерческая организация</a>
                </div>
            </div>
        </div>
        <div class="news container-md mt-md-5 mt-3">
            <div class="blockname mb-2">Новости</div>
            <div class="row" style="margin: 0px;">
                div.col-12.col-md-6 col-lg-4 col-xl-3
            </div>
        </div>
    </main>
</div>

</template>


<script>
export default {
    name: 'main_page',
}
</script>

<style scoped>
main {
    padding: 100px 2px 0px;
}
footer {
    background-color: #ffffff;
    padding: 0px;
}
.header {
    height: 281px;
    width: 100%;
    background: url('./../assets/Blagotvoritelnost-pomoshh.jpg') no-repeat center center;
    border-bottom: #eeeeee solid 2px;
}
.news {
    text-align: left;
}
.blockname {
    font-size: 1.3em;
    background-color: #ffc107;
    width: 150px;
    text-align: center;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
}
</style>