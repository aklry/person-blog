import Vue from "vue"
import tool from '@/util/tool'
Vue.directive('drag', {
    bind(el) {
        const headerEl = el.querySelector('.el-dialog')
        const headerElChildren = headerEl.children[0]
        headerElChildren.addEventListener(
            "mousedown",
            function (e) {
                let event = e || window.event;
                let x = event.clientX - parseInt(tool.getStyle(headerEl, "left"))
                let y = event.clientY - parseInt(tool.getStyle(headerEl, "top"))
                function cancel(e) {
                    let event = e || window.event;
                    headerEl.style.left = event.clientX - x + "px"
                    headerEl.style.top = event.clientY - y + "px"
                }
                document.addEventListener("mousemove", cancel, false)
                headerEl.addEventListener(
                    "mouseup",
                    function () {
                        document.removeEventListener("mousemove", cancel, false)
                    },
                    false
                )
            },
            false
        )
    }
})