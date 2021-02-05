<template>
<div>
    <main>
        <div class="row justify-content-around">
            <div class="col-4 col-lg-2">
                <h3>Помочь:</h3>
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
    padding-top: 70px;
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
</style>