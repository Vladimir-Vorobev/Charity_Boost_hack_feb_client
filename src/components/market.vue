<template>
<div>
    <main>
        <div class="row justify-content-around mb-3"  style="margin: 0px;">
            <div class="col-12 col-lg-2 order-1">
                <h3 style="margin: 0px; padding: 6px 0px;">Помочь</h3>
            </div>
            <div class="col-12 col-lg-6 categories order-4 order-lg-2">
                <ul>
                    <li class="active">Все</li>
                    <li>Детям</li>
                    <li>Взрослым</li>
                    <li>Пожилым</li>
                    <li>Животным</li>
                    <li>Природе</li>
                </ul>
            </div>
            <div class="col-6 col-lg-2 order-2 order-lg-3 mb-2">
                <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Все виды помощи</option>
                    <option>Деньгами</option>
                    <option>Услугами</option>
                    <option>Товарами</option>
                </select>
            </div>
            <div class="col-6 col-lg-2 order-3 order-lg-4">
                <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Все города</option>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-around" style="margin: 0px;">
            <div class="col-12 col-md-4-6 col-lg-4 col-xl-3 mb-2" v-for="item in projects" :key="item.id">
                <div class="project">
                    <div class="image">
                        <img :src="item.image">
                    </div>
                    <div class="info">
                        <p style="color: #999999; margin-bottom: 5px;">
                            <small><strong>{{item.city}}</strong></small>
                        </p>
                        <div style="text-align: left;">
                            <span style="font-size: 1em;">{{item.title}}</span> <br>
                            <span style="font-size: 0.7em;">Категория: {{item.category}} | </span>
                            <span style="font-size: 0.7em;">Тип помощи: {{item.type_help}}</span> <br>
                            <span style="font-size: 0.8em; font-weight: 600;">Вы можете помочь</span> <br>
                            <span style="font-size: 0.8em;">{{item.help}}</span>
                        </div>
                        <div style="width: 95%; position: absolute; bottom: 10px;">
                            <hr style="margin: 3px;">
                            <div class="row" style="margin: 0px; line-height: 22px; vertical-align: baseline;">
                                <div class="col-12" style="font-size: 0.8em;">
                                    <div style="text-align: justify;">
                                        <strong>Цель {{item.money}}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center" style="margin: 0px; width: 100%;">
                                <div class="col-12" style="padding: 3px;">
                                    <button class="btn btn-indigo btn-almbb-small" style="width: 100%; font-size: 1.1em; text-transform: none;">Связаться с Фондом</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

</template>


<script>
export default {
    name: 'market',
    data(){
        return{
            projects: [],
        }
    },
    beforeMount(){
        fetch(this.$store.state.serverIp + '/get_projects/', {
            method: 'GET',
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
}
</script>

<style scoped>
main {
    padding: 70px 2px 0px;
}
.categories ul {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: left;
    -webkit-justify-content: left;
    justify-content: left;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: scroll;
}
.categories ul li {
    display: list-item;
    text-align: -webkit-match-parent;
    color: #212121;
    display: block;
    font-size: 1.3em;
    padding: 2px 10px;
    margin: 4px;
    cursor: pointer;
    user-select: none;
}
.categories ul li.active {
    margin: 1px;
    border: solid #ffd86f 3px;
    border-radius: 5px;
}
.categories ul li:not(.active):hover {
    margin: 1px;
    border: solid #e0e0e0 3px;
    border-radius: 5px;
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