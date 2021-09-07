 import Vue from 'vue';
 import {Dialog,Button,Upload} from "element-ui";
 const componentList=[Dialog,Button,Upload];
 componentList.forEach(item=>{
   Vue.use(item)
 })