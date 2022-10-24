<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: {
    ChatForm, Navbar },
  setup(){
    let {user}=getUser();
    let router=useRouter();

    watch(user,()=>{
      if(!user.value){
        router.push("/");
      }
    })
  }
}
</script>

<style>

</style>