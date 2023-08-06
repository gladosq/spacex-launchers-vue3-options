<script>

</script>

<template>
  <div class='skeleton'>
    <div class='skeleton__inner'>
      <div class='skeleton__block'></div>
      <div class='skeleton__block'></div>
      <div class='skeleton__block'></div>
      <div class='skeleton__block'></div>
      <div class='skeleton__block'></div>
      <div class='skeleton__block'></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.skeleton__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;
}

.skeleton__block {
  background: linear-gradient(110deg,
    rgba(0, 0, 0, 0.1) 34%,
    rgba(255, 255, 255, 0.05) 38%,
    rgba(255, 255, 255, 0.05),
    rgba(0, 0, 0, 0.1) 49%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 2s shine linear infinite;
  animation-fill-mode: forwards;
  width: 100%;
  height: 130px;
}

@keyframes shine {
  from {
    background-position-x: -40%;
  }
  to {
    background-position-x: 100%;
  }
}
</style>
