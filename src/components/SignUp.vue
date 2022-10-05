<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
            <input type="text" placeholder="name" v-model="name">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import useSignup from '../composable/useSignup'
     
export default {
    setup() {
        let name=ref("");
        let email=ref("");
        let password=ref("");
        let {error,createAccount}=useSignup()

        let signUp=async()=>{
           let res=await createAccount(email.value,password.value,name.value);
           console.log(res.user);
        }

        return {name,email,password,signUp};
    }
}
</script>

<style>

</style>