<template>
  <div class="about-me">
    <header class="about-me-header">
      <div class="header-content">
        <div class="profile-picture">
          <img src="../assets/images/apo2.jpeg" alt="プロフィール画像" />
        </div>
      </div>
    </header>

    <section class="introduction">
      <div class="bio">
        <h2>こんにちは！成川颯天です</h2>
        <p>
          私は専門学校でWeb制作について学び、そこで培った知識とスキルを今後の仕事に活かしていきたいと考えています。IllustratorやPhotoshopなどのデザインツールの基本的な操作スキルを習得し、HTMLやCSSを使ったWeb制作の基礎知識も身につけました。
        </p>
        <p>
          これらのスキルを活かして、ユーザーの目線に立ったデザインや制作を意識し、実際の現場でも役立つ力を発揮できるよう努力しています。今後はさらに技術を深め、より高いレベルのWeb制作ができるように成長していきたいと考えています。
        </p>
        <p>
          まだまだ学びの途中で、デザイナーとして未熟すぎますが、常に前向きな姿勢でスキルアップを目指し、ユーザーにとって価値あるものを提供できるよう尽力します。どうぞよろしくお願いします！
        </p>
      </div>
    </section>

    <section class="skills">
      <h2>スキル</h2>
      <ul>
        <li>Illustrator, Photoshop</li>
        <li>Vue.js</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Git, GitHub</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>
.about-me {
  font-family: 'Noto Sans JP', sans-serif;
  padding: 20px;
}

.about-me-header {
  margin-bottom: 40px;
}

.profile-picture img {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.introduction {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.bio {
  max-width: 600px;
  text-align: center;
}

.bio h2 {
  color: #333;
  margin-bottom: 20px;
}

.bio p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.skills {
  margin-top: 30px;
}

.skills h2 {
  color: #333;
  text-align: center;
}

.skills ul {
  list-style-type: none;
  padding-left: 0;
  text-align: center;
}

.skills li {
  color: #555;
  font-size: 16px;
  margin: 5px 0;
}
</style>
