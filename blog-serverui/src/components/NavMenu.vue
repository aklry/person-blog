<template>
    <div class="nav-menu">
        <template v-for="item in routes">
            <!-- 没有子路由 -->
            <template v-if="!item.children">
                <el-menu-item v-if="!item.meta.hidden" :index="item.path">
                    <template #title>
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{ item.meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
            <template v-if="item.children && item.children.length === 1">
                <!-- 只有一个子路由 -->
                <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
                    <template #title>
                        <i :class="item.children[0].meta.icon"></i>
                        <span slot="title">{{ item.children[0].meta.title }}</span>
                    </template>
                </el-menu-item>
            </template>
            <template v-if="item.children && item.children.length > 1">
                <!-- 有多个子路由 -->
                <el-submenu v-if="!item.meta.hidden" :index="item.path">
                    <template #title>
                        <i :class="item.meta.icon"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <NavBar :routes="item.children" />
                </el-submenu>
            </template>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "NavBar",
    computed: {
        ...mapState(['adminInfo'])
    },
    props: {
        routes: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style scoped>
.nav-menu {
    height: 100%;
    background-color: #001529;
}
</style>
