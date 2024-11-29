<template>
  <div class="portfolio-home">
    <div class="content">
      <h1>PORTFOLIO</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioHome',
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto';
  },
  unmounted() {
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
.portfolio-home {
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.content {
  text-align: center;
}

h1 {
  font-size: 5rem;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 3px;
  transition: font-size 0.3s ease, letter-spacing 0.3s ease;
}

@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 1024px) {
  h1 {
    font-size: 4rem;
    letter-spacing: 2px;
  }
}
</style>
