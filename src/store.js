import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },

  getters:{ // computed // state 에 있는 값을 변화
    allUsersCount: state => state.allUsers.length,

    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count ++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }

  },
  mutations: { // component 에서 state 값  변화
    addUsers: (state, payload) =>{
      state.allUsers.push(payload)
    }
  },
  actions: {
    addUser: (context,payload) => {
      // 서버와 비동기 식으로 데이터를 얻어온후
      // 마지막에 mutation 으로 보냄
      context.commit('addUsers',payload)
    }
  },
})
