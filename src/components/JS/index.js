import Vue from "vue";
import MessageBox from './MessageBox'
// import { deflateSync } from "zlib";


export var messageBox = (function () {  //params
    
    var defaults = {  //默认值
                title:'',
                content : '',
                cancel : '',
                ok:'',
                handleCancel:null
    };
    var MyCompcnent = Vue.extend(MessageBox)

    return function( opts ){ //配置参数
        for(var attr in opts){
            defaults[attr] =   opts[attr]
        }
    
        var vm = new MyCompcnent ({
            el :document.createElement('div'),
            data :{
                title : defaults.title,
                content :defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
            // document.body.appendChild(vm.$el)
        });
        document.body.appendChild(vm.$el);
       
    };


//    console.log(111)


})();