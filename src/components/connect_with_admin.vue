<template>
<div>
    <main class="container-md">
        <h3 class="mt-3" style="text-align: center; margin-bottom: 1em;">Связаться с администрацией:</h3>
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Тема вопроса</span>
                </div>
                <input id="theme" type="text" class="form-control" aria-label="тема вопроса" required>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Вопрос</span>
              </div>
              <textarea id="text" class="form-control" aria-label="question"></textarea>
            </div>
          <button style="font-size: 1em;" type="submit" class="btn btn-blue btn-lg" @click="send_email()">Отправить</button>
        </form>
    </main>
</div>

</template>


<script>
import Swal from 'sweetalert2'
export default {
    name: 'connect_with_admin',
    beforeMount(){
        if(this.$store.getters.email == undefined) document.location.href = '/login'
    },
    methods:{
        send_email(){
            event.preventDefault()
            let theme = document.getElementById('theme').value
            let text = document.getElementById('text').value
            fetch(this.$store.state.serverIp + '/connect_with_admin/', {
                method: 'POST',
                body: JSON.stringify({email: this.$store.getters.email, session_id: this.$store.getters.SessionID, theme: theme, text: text}),
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
                else if(data == 'send_email'){
                    Swal.fire({
                        icon: 'success',
                        text: 'Письмо успешно отправлено. Ожидайте ответа администрации на вашу почту, указанную в аккаунте',
                    });
                    document.getElementById('theme').value = ''
                    document.getElementById('text').value = ''
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
    }
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