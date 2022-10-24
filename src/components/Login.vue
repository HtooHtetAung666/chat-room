<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <div v-if="error" class="error">{{error}}</div>
            <button class="custom-btn btn-1">Login</button>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props,context) {
        let email=ref("");
        let password=ref("");
        let {error,logIn}=useLogin();

        let login=async()=>{
            let res=await logIn(email.value,password.value);
            if(res){
                context.emit("toChat");
            }
        }

        return {email,password,login,error};
    }
}
</script>

<style>

</style>