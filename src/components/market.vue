<template>
<div>
    <main>
        <div class="row justify-content-around"  style="margin: 0px;">
            <div class="col-4 col-lg-2">
                <h3 style="margin: 0px; padding: 6px 0px;">Помочь:</h3>
            </div>
            <div class="col-8 col-lg-10 categories">
                <ul>
                    <li class="active">Все</li>
                    <li>Детям</li>
                    <li>Взрослым</li>
                    <li>Пожилым</li>
                    <li>Животным</li>
                    <li>Природе</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-around" style="margin: 0px;">
            <div class="col-12 col-md-4-6 col-lg-4 col-xl-3">
                <div class="project">
                    <div class="image">

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
                        <div class="row" style="margin: 0px; line-height: 16px; vertical-align: baseline;">
                            <div class="col-12" style="font-size: 0.8em;">
                                <div style="text-align: justify;">
                                    <strong>90 000Р </strong>
                                    <span style="color: #999999;">собранно цель 100 000Р</span>
                                </div>
                                <progress style="width: 100%;" max="100" value="50"></progress>
                            </div>
                        </div>
                        <button class="btn btn-indigo" style="width: 100%;">Я хочу помочь</button>
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
}
.project .info {
    text-align: left;
    padding: 4px 7px 0px;
}
</style>