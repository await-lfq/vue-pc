
/**************************************************父窗口***********************************/
/**
 * @description 发送消息给子窗口
 * @method sendMessageToChild
 * @param {any} 发送的信息
 */
function sendMessageToChild (data) {
  if (typeof date !== "object" || data === null) {
    localStorage.setItem("child", data);
    return;
  }
  localStorage.setItem("child", JSON.stringify(data));
}
/**
 * @description 监听父窗口消息
 */
window.addEventListener("storage", (e) => {
  if (e.key !== "parent") return;
  console.log("父窗口监听到子窗口传过来的消息", e.newValue);
})

/**************************************************子窗口***********************************/
/**
 * @description 发送消息给父窗口
 * @method sendMessageToParent
 * @param {any} 发送的信息
 */
function sendMessageToParent (data) {
  if (typeof date !== "object" || data === null) {
    localStorage.setItem("parent", data);
    return;
  }
  localStorage.setItem("parent", JSON.stringify(data));
}
/**
 * @description 监听子窗口消息
 */
window.addEventListener("storage", (e) => {
  if (e.key !== "child") return;
  console.log("子窗口监听到父窗口传过来的消息", e.newValue);
})
export default {
  install (Vue) {
    Vue.prototype.$sendMessageToChild = sendMessageToChild;
    Vue.prototype.$sendMessageToParent = sendMessageToParent
  }
}