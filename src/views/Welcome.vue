<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login></Login>
            <p>not a memember? <span @click="showLoginForm=!showLoginForm">Sign up here</span></p>
        </div>
        <div v-else>
            <SignUp></SignUp>
            <p>already a memeber? <span @click="showLoginForm=!showLoginForm">Login here</span></p>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import {ref} from 'vue'

export default {
    components: { Login, SignUp },
    setup() {
        let showLoginForm=ref(true);
        return {showLoginForm};
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
} 
.welcome button {
    margin: 20px auto;
}
</style>