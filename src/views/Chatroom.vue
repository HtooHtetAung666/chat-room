<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import ChatForm from '../components/ChatForm'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: {
    ChatWindow,
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