import Vue from 'vue';
import { Button,Toast ,Uploader} from 'vant';
let component = [Button,Toast,Uploader];
component.forEach(item => {
  Vue.use(item)
});
