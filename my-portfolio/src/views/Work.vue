<template>
  <div class="my-work">
    <header class="work-header">
      <div class="profile-picture">
        <img src="../assets/images/apo2.jpeg" alt="プロフィール画像" />
      </div>
    </header>
    <section class="work-gallery">
      <h2>サイト制作</h2>
      <p>html,css,</p>
      <div class="gallery-container">
        <div class="gallery-item" v-for="(image, index) in siteImages" :key="'site-' + index">
          <img :src="image.src" :alt="'サイト作品 ' + (index + 1)" />
        </div>
      </div>
    </section>
    <section class="work-gallery">
      <h2>その他のデザイン</h2>
      <p>Illustrator,Photoshop</p>
      <div class="gallery-container">
        <div class="gallery-item" v-for="(image, index) in designImages" :key="'design-' + index">
          <img :src="image.src" :alt="'デザイン作品 ' + (index + 1)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyWork',
  data() {
    return {
      siteImages: [
        { src: require('../assets/images/hanbagu.jpg') },
        { src: require('../assets/images/hanbagu2.jpg') },
        { src: require('../assets/images/hanbagu3.jpg') },
        { src: require('../assets/images/hanbagu4.jpg') },
      ],
      designImages: [
        { src: require('../assets/images/ポスター完成.jpg') },
        { src: require('../assets/images/蝋燭りんご.jpg') },
        { src: require('../assets/images/birumei.jpg') },
        { src: require('../assets/images/meisi.jpg') },
        { src: require('../assets/images/koukyu.jpg') },
        { src: require('../assets/images/apo4.jpg') },
        { src: require('../assets/images/囚人集2.jpg') },
        { src: require('../assets/images/ロゴデザイン.jpg') },
      ],
    };
  },
};
</script>

<style scoped>
.my-work {
  font-family: 'Noto Sans JP', sans-serif;
  padding: 20px;
}

.work-header {
  text-align: center;
  margin-bottom: 60px;
}

.profile-picture img {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.work-gallery {
  margin-bottom: 60px;
}

.work-gallery h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.work-gallery p {
  text-align: center;
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.gallery-item {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .gallery-item {
    width: 90%;
    height: auto;
  }
}
</style>



