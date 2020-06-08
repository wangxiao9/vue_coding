import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // 定义一个加法操作
        add(state) {
            // 变更state
            state.count++
        },
        sub(state) {
            // 变更减法
            state.count--
        }
    },
    actions: {
        // 创建异步操作，每1秒后条用mutation中的add
        addAsync(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        subAsync(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 1000)
        }
    },
    getters: {
        // 定义一个showNum 参数参入state
        showNum(state){
            return '当前getter数据为' + state.count
        }
    }
})