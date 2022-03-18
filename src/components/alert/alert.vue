<template>
  <div :class="['alert',{show}]">{{text}}</div>
</template>
<style scoped lang="scss">
.alert {
  width: 150px;
  line-height: 22px;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease 0s;
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
}
</style>