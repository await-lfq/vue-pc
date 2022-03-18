import Vue from "vue";
import alert from "./alert.vue"; // 引入alert组件
const AlertConstructor = Vue.extend(alert); // 创建AlertConstructor构造器
/**
 * @description toast弹窗
 * @param {string} 显示的内容
 * @param {number} 持续时间 
 */
function showToast (text, duration = 1000) {
  const alertInstance = new AlertConstructor({ //实例化一个alertInstance实例
    el: document.createElement("div"),
    data () {
      return {
        show: false,
        text,
      }
    },
  });
  document.body.appendChild(alertInstance.$el); // 挂载节点
  setTimeout(() => { // 显示隐藏
    alertInstance.show = true;
    setTimeout(() => {
      alertInstance.show = false;
      setTimeout(() => {
        document.body.removeChild(alertInstance.$el);
      }, 1000)
    }, duration)
  }, duration);
}
/**
 * @description 注册一个toast弹窗
 * @param {Function对象} Vue构造器 
 */
function registerToast (Vue) {
  Vue.prototype.$alert = showToast;
};
export default registerToast;