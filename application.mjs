import data from './data.mjs';
import Vue from './vue.esm.browser.js'

let app = new Vue({
    el:'#app',
    data:data,
    template:'#app-template',
    methods: {
        showDesc: function(index){
            this.images[index].descriptionvisible = !this.images[index].descriptionvisible
        },
        previousPic: function(index){
            this.index =  (index - 1) % this.images.length;
        },
        nextPic: function(index){
            this.index = (index + 1) % this.images.length; 
        }
    }
});