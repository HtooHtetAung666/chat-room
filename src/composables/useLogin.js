import { ref } from "vue";
import {auth} from '../firebase/config';

let error=ref('');

let logIn=async(email,password)=>{
    try{
        let res=await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("could not login into account");
        }
        return res;
    }
    catch(err){
        error.value=err.message;
        console.log(error.value);
    }
}

let useLogin=()=>{
    return {error,logIn};
}

export default useLogin;