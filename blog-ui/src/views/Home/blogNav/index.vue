<template>
    <div class="container">
        <div class="content-container">
            <div class="card" v-for="(item, index) in blogInfo" :key="index">
                <div class="face face1">
                    <div class="content" @click="showDetails(item)">
                        <p v-html="item.content"></p>
                    </div>
                </div>
                <div class="face face2">
                    <h2>{{ item.title }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/blog'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            blogInfo: []
        }
    },
    mounted() {
        const content = this.$route.params.content
        api.findBlogByCategory({
            content 
        }).then(res => {
            if (res.status === 200) {
                this.blogInfo = res.data
            }
        }).catch(error => console.log(error))
    },
    methods: {
        ...mapMutations(['setBlog']),
        showDetails(blog) {
            this.setBlog(blog)
            this.$router.push({name: 'Blog'})
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    background: linear-gradient(45deg, #24006b, #f42f8c)
}

.content-container {
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin: 0 auto;
}

.content-container .card {
    position: relative;
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}

.content-container .card:hover .face.face2 {
    height: 60px;
}

.content-container .card .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-container .card .face.face1 {
    box-sizing: border-box;
    padding: 20px;
}


.content-container .card .face.face1 .content {
    font-size: 13px;
  line-height: 30px;
  -webkit-line-clamp: 3;
  /*用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性*/
  display: -webkit-box;
  /*和 1 结合使用，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical;
  /*和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 */
  overflow: hidden;
  /*文本溢出限定的宽度就隐藏内容*/
  text-overflow: ellipsis;
  /*多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本*/
  margin-bottom: 12px;
}

.content-container .card .face.face2 {
    background: #111;
    transition: 0.5s;
}

.content-container .card .face.face2::before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 254, 0.1);
}


.content-container .card:nth-child(even) .face.face2 {
    background: linear-gradient(45deg, #ccff00, #09afff);
}

.container .card:nth-child(odd) .face.face2 {
            background: linear-gradient(45deg, #e91e63, #ffeb3b);
        }

.content-container .card .face.face2 h2 {
    font-size: 16px;
    color: #fff;
    transition: .5s;
    text-shadow: 2px 2px 6px #ccc;
}
</style>