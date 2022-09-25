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
import {auth} from '../firebase/config'
     
export default {
    setup() {
        let name=ref("");
        let email=ref("");
        let password=ref("");
        let error=ref("");

        let signUp=async()=>{
            try {
                let res=await auth.createUserWithEmailAndPassword(email.value,password.value);
                if(!res) {
                    throw new Error("could not create new user");
                }
                console.log(res.user);
            }
            catch(err) {
                error.value=err.message;
                console.log(error.value);
            }
        }

        return {name,email,password,signUp};
    }
}
</script>

<style>

</style>