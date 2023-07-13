<template>
    <swiper ref="mySwiper" :options="swiperOptions" style="width:100%; height: 62%;">
        <swiper-slide style="width:100%;height: 100%" v-for="url in imgUrl" :key="url">
            <img :src="url" alt="" style="width:100%;height: 100%;">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import api from '@/api/banner'
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
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            imgUrl: []
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    async mounted() {
        const result = await api.getAllBanner()
        const { status, data } = result
        if (status === 200) {
            this.imgUrl = data.data.slice(0, 3).map(item => item.imgUrl) 	//将图片链接存储到数组中
        }
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