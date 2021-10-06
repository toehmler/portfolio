<template>
  <div id="home">
    <div id="header" class="container-fluid bg-dark-blue">
        <div class="container">
        <div id="img-container" class="row py-5 align-items-center">
          <div class="col-xl-5 col-10 offset-lg-2 order-1 order-md-2">
            <img id="img1" src="/headshot_line_hover.png" class="img-fluid">
            <img id="img2" src="/headshot_line_hover.png" class="img-fluid">
          </div>


          <div class="col-xl-4 col-10 py-3 text-light order-2 order-md-1">
            <p class="h1 display-2 serif">Trey<br>
              <span style="position:relative;bottom:40px">
                Oehmler</span></p>
            <p class="lead">I’m a recent graduate working in San Francisco as a software engineer. I am actively seeking new opportunities and projects.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" class="container-fluid py-5">
      <div class="container">
        <div class="row justify-content-center justify-content-lg-start align-items-center">
          <div v-for="project in projects" v-bind:key="project.step" class="col-lg-6 col-md-9 mb-4">
            <a :href="project.href">
              <img :src="project.src" class="img-fluid project-tile">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      projects: [
        {
          step:1,
          title: 'UNet: Automatic Brain Tumor Segmentation',
          src: '/tumor_tile.jpg',
          href: '/unet',
        },
        {
          step:2,
          title: 'Partisan News Viewer',
          src: '/news_app_tile.jpg',
          href: 'https://github.com/toehmler/news',
        },

        {
          step: 3,
          title: 'Dompen',
          src: '/dompen_tile.jpg',
          href: '/dompen',
        },
        {
          step:4,
          title: 'DomCBD',
          src: '/domcbd_tile_2.jpg',
          href: '/domcbd',
        },
        {
          step:5,
          title: 'Gardenhouse Brands',
          src: '/gardenhouse_tile.jpg',
          href: 'https://gardenhousebrands.com',
        },
        {
          step:6,
          title: 'Calavera Cannabis',
          src: '/calavera_tile.jpg',
          href: 'https://calaveracannabis.com',
        },
      ]
    };
  }
}
</script>


