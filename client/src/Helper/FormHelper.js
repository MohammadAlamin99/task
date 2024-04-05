import cogoToast from 'cogo-toast';

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let mobaileRegex = /^(?:\+88|01)?\d{11}\r?$/;


class FormHelper {

    IsEmpty(value){
        return value.length ===0;
    }

    IsEmail(value){
        return !emailRegex.test(value)
    }

    IsMobile(value){
        return mobaileRegex.test(value)
    }

    errorTost(msg){
        cogoToast.error(msg, {position:"bottom-center"})
    }
    successTost(msg){
        cogoToast.success(msg, {position:"bottom-center"})
    }
        
}

export const {IsEmpty,IsEmail,IsMobile,errorTost,successTost,getBase64}= new FormHelper();