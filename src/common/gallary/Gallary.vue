<template>
  <div class="container" @click='handleGallery'>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for='(items, index) in imgs' :key='index'>
          <img class='gallary-img' :src="items">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallary',
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          loop: true
        }
      }
    },
    methods: {
      handleGallery() {
        this.$emit('change')
      }
    }
  }
</script>

<style lang='less' scoped>
  .container /deep/ .swiper-container {
    overflow: inherit;
  }
  .swiper-pagination /deep/ .swiper-pagination-bullet-active {
    background-color: red;
    /* margin-top: .5rem; */
  }


  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;

    .wrapper {
      height: 0;
      width: 100%;
      padding-bottom: 65%;

      .gallary-img {
        width: 100%;
      }

      .swiper-pagination {
        z-index: 100;
        color: #ccc;
        ;
        bottom: -2rem;
      }
    }

  }
</style>