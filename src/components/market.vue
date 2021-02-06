<template>
<div>
    <main>
        <div class="row justify-content-around mb-3"  style="margin: 0px;">
            <div class="col-5 col-lg-2 order-1">
                <h3 style="margin: 0px; padding: 6px 0px;">Помочь:</h3>
            </div>
            <div class="col-12 col-lg-8 categories order-3 order-lg-2">
                <ul>
                    <li class="active">Все</li>
                    <li>Детям</li>
                    <li>Взрослым</li>
                    <li>Пожилым</li>
                    <li>Животным</li>
                    <li>Природе</li>
                </ul>
            </div>
            <div class="col-7 col-lg-2 order-2 order-lg-3">
                <select class="form-control" id="exampleFormControlSelect1">
                    <option selected>Все города</option>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                </select>
            </div>
        </div>
        <div class="row justify-content-around" style="margin: 0px;">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="project">
                    <div class="image">
                        <img src="https://s1.1zoom.me/big3/122/426205-Kycb.jpg" alt="">
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
    </main>
</div>

</template>


<script>
export default {
    name: 'market',
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