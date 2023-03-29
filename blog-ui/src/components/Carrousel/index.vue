<template>
    <swiper ref="mySwiper" :options="swiperOptions" style="width:100%; height: 70%;">
        <swiper-slide style="width:100%;height: 100%">
            <img src="../../assets/yao.png" alt="" style="width:100%;height: 100%;">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/h1.jpeg" alt="" style="width:100%;height: 100%;">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/sishen.jpg" alt="" style="width:100%;height: 100%;">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOptions: {
                loop: true,
                speed: 2000,
                effect: 'fade', //渐变效果
                autoplay: {
                    // 隔×秒自动滑动一次
                    delay: 3000,
                    // 设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。默认为true
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.el-pagination'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        // this.swiper.slideTo(4, 10000, true)
    }
}
</script>

<style scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
    color: rgba(255, 255, 255, .7)
}
.swiper-slide {
    width: 100% !important;
}
</style>