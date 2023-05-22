import * as echarts from 'echarts'

export default {
    install(Vue, options) {
        Vue.prototype.$pie = (element, data) => {
            //加载echarts图表
            let myChart = echarts.init(document.getElementById(element))
            let name = data.data
            const nameData = name.map((item, index) => {
                return item.name
            })
            const options = {
                title: {
                    text: '相关用户发表的博客数量'
                },
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: false
                },
                legend: {
                    data: nameData,
                    orient: 'vertical',
                    top: '50%',
                    left: 0
                },
                series: data
            }
            myChart.setOption(options)
        }
    }
}