var alo = new Vue({
    el:'#app',
    data :{
        message : 'Hello Truong'
    }
})
var blo = new Vue({
    el:'#app-2',
    data : {
        message : "Trường"
    }
})
var clo = new Vue({
    el:'#app-3',
    data : {
        condition : false
    }
})
var dlo = new Vue({
    el:'#app-4',
    data : {
        items :[
            {
                name : "Trường",
                text : "Học java"
            },
            {
                name : "Sơn",
                text : "Học vuejs"
            },
            {
                name : "Ngân",
                text : "Học javascript"
            }
        ]
    }
})
dlo.items.push({name: "Giang" , text: "Học reactjs"})
var elo = new Vue({
    el:'#app-5',
    data : {
        message : "Ai thông minh hơn học sinh lớp 5 ?"
    },
    methods: {
        reverseMessage : function(){
            this.message = this.message.split(' ').reverse().join(' ');
        }
    },
})
var elo = new Vue({
    el:'#app-6',
    data : {
        message : "Ai thông minh hơn học sinh lớp 5 ?"
    }
})
