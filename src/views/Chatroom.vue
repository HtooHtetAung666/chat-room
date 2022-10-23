<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
import { watch } from '@vue/runtime-core'

export default {
  components: { Navbar },
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