<template>
<div>
    <main class="container-md">
        <h3 class="mt-3" style="text-align: center; margin-bottom: 1em;">Связаться с нами:</h3>
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Тема вопроса</span>
                </div>
                <input name="question_topic" type="text" class="form-control" aria-label="тема вопроса" required>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Вопрос</span>
              </div>
              <textarea name="question" class="form-control" aria-label="question"></textarea>
            </div>
          <button style="font-size: 1em;" type="submit" class="btn btn-blue btn-lg">Отправить</button>
        </form>
    </main>
</div>

</template>


<script>
export default {
    name: 'connect_with_admin',
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
</style>