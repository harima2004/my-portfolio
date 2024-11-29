<template>
  <header class="header-pc">
    <div class="pcheader-wrapper">
      <div class="pcheader-list-wrapper">
        <div class="pcheader-list">
          <router-link to="/about" class="dropdown-link">自己紹介</router-link>
        </div>
        <div class="pcheader-list">
          <router-link to="/work" class="dropdown-link">作品紹介</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
@import url('http://fonts.googleapis.com/earlyaccess/notosansjapanese.css');

.header-pc {
  padding-top: 72px;
}

.pcheader-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: #fff;
  font-family: 'Noto Sans Japanese', sans-serif;
  font-size: 14px;
  z-index: 1000;
}

.pcheader-list-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pcheader-list {
  margin-left: 24px;
}

.pcheader-list:first-child {
  margin-left: 0;
}

.pcheader-list-text {
  color: #333;
  cursor: pointer;
  padding: 0 8px;
  transition: color 0.3s ease, border-bottom-color 0.3s ease;
  position: relative;
}

.pcheader-list-text::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transform: translateX(-50%);
  transition: background-color 0.3s ease;
}

.pcheader-list:hover .pcheader-list-text {
  color: #707070;
}

.pcheader-list:hover .pcheader-list-text::after {
  background-color: #fd9603;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 0;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.pcheader-list:hover .dropdown-menu {
  display: block;
}

.dropdown-link {
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 14px;
  letter-spacing: 1.4px;
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.3s ease;
}

.dropdown-link:hover {
  color: #9d9d9d;
}
</style>
