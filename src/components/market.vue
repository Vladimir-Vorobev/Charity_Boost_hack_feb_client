<template>
<div>
    <main>
        <div class="row justify-content-around mb-3"  style="margin: 0px;">
            <div class="col-12 col-lg-2 order-1">
                <h3 style="margin: 0px; padding: 6px 0px;">Помочь</h3>
            </div>
            <div class="col-12 col-lg-6 categories order-4 order-lg-2">
                <ul>
                    <li name="all" class="active" @click="setCategory('all')">Все</li>
                    <li name="children" @click="setCategory('children')">Детям</li>
                    <li name="adults" @click="setCategory('adults')">Взрослым</li>
                    <li name="elderly" @click="setCategory('elderly')">Пожилым</li>
                    <li name="animals" @click="setCategory('animals')">Животным</li>
                    <li name="nature" @click="setCategory('nature')">Природе</li>
                </ul>
            </div>
            <div class="col-6 col-lg-2 order-2 order-lg-3 mb-2">
                <select id="type_help" class="form-control" @input="change_type_help()">
                    <option selected>Все виды помощи</option>
                    <option>Деньгами</option>
                    <option>Услугами</option>
                    <option>Товарами</option>
                </select>
            </div>
            <div class="col-6 col-lg-2 order-3 order-lg-4">
                <select class="form-control" id="city" @input="change_city()">
                    <option v-for="item in cities" :key="item">{{item}}</option>
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
            cities: [],
            category: '',
            type_help: '',
            city: '',
            active: 'all',
        }
    },
    beforeMount(){
        fetch(this.$store.state.serverIp + '/get_projects/', {
            method: 'POST',
            body: JSON.stringify({}),
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
                this.projects = data[0]
                this.cities = data[1]
            }
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        setCategory(category) {
            var oldelem = document.getElementsByName(this.active);
            var newelem = document.getElementsByName(category);
            oldelem[0].classList.remove("active");
            newelem[0].classList.add("active");
            this.active = this.category = category;
            this.filter()
        },
        change_city(){
            let city = document.getElementById('city').value
            if(city != 'Все города') this.city = city
            else this.city = ''
            this.filter()
        },
        change_type_help(){
            let type_help = document.getElementById('type_help').value
            if(type_help != 'Все виды помощи') this.type_help = type_help
            else this.type_help = ''
            this.filter()
        },
        filter(){
            let category = ''
            let data = {}
            if(this.category == 'children') category = 'Детям'
            else if(this.category == 'adults') category = 'Взрослым'
            else if(this.category == 'elderly') category = 'Пожилым'
            else if(this.category == 'animals') category = 'Животным'
            else if(this.category == 'nature') category = 'Природе'
            if(category != '') data['category'] = category
            if(this.city != '') data['city'] = this.city
            if(this.type_help != '') data['type_help'] = this.type_help
            fetch(this.$store.state.serverIp + '/get_projects/', {
                method: 'POST',
                body: JSON.stringify(data),
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
                    this.projects = data[0]
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
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