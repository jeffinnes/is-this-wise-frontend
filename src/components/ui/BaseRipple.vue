<template>
  <div class="ripple">
    <div class="cooldown-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style>
/** This style is unscpoed as a work around for the bug that tags keyframe persentages
with the scope tag.
See GitHub issue https://github.com/vuejs/vue-next/issues/3304
ToDo: Fix this when the bug is addressed. */
.ripple {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cooldown-ripple {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
}

.cooldown-ripple div {
  position: absolute;
  border: 4px solid #614b7c;
  opacity: 1;
  border-radius: 50%;
  animation: cooldown-ripple 2s cubic-bezier(0.92, 0.12, 0.67, 0.99) infinite;
}

.cooldown-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes cooldown-ripple {
  0% {
    top: 60px;
    left: 60px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 112px;
    height: 112px;
    opacity: 0;
  }
}
</style>
