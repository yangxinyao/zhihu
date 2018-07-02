import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
let store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        updata(state, playload) {
            state.items = playload
        },
        minus(state, playload) {

            state.items = state.items.map((v, ind) => {
                if (ind == playload.id) {
                    v.num = playload.num
                }
                return v
            })

        }
    },
    actions: {
        fetchUpdata({ commit, state }) {
            axios.get('/zhihu').then(res => {
                console.log(state.items)
                if (state.items.length == '0') {
                    commit('updata', res.data)
                } else {
                    commit('updata', state.items)
                }

            })
        },
        minus({ commit }, playload) {
            commit('minus', playload)
        }
    }
})
export default store