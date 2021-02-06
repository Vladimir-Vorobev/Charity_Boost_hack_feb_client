<template>
    <div class="main">
        <div class="col-12 col-md-4-6 col-lg-4 col-xl-3 block">
            <strong>Как выглядит карточка проекта</strong>
            <div class="project">
                <div class="image">
                    <img v-if="image != ''" :src="image">
                    <img v-else src="./../assets/no_image.png">
                </div>
                <div class="info">
                    <p style="color: #999999;">
                        <small><strong>Город</strong></small>
                    </p>
                    <div style="text-align: justify;">
                        <span style="font-size: 1.2em;">Заголовок</span> <br>
                        <span style="font-size: 0.85em; font-weight: 600;">Вы можете помочь</span> <br>
                        <span style="font-size: 0.85em;">Текст чем помочь</span>
                    </div>
                    <hr style="marging-bottom: 0px;">
                    <div class="row" style="margin: 0px; line-height: 20px; vertical-align: baseline;">
                        <div class="col-12" style="font-size: 0.8em;">
                            <div style="text-align: justify;">
                                <strong>Цель 100 000Р</strong>
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
export default {
    name: 'add_project',
    data(){
        return{
            image: '',
        }
    },
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
</style>