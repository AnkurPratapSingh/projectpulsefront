// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     name:"",
//     user_id:'',
//     user:"Ankur"
//   },
//   getters: {
//     getName: state => {
    
//       return state.name;
//     },
//     getId:state=>{
//       return state.user_id
//     }
//   },
//   mutations: {
//     changeDetail(state,payload){
//         this.state.name=payload.name;
//         this.state.user_id=payload.user_id;
//         console.log(payload);
//     },

//   },
//   actions: {

//     changeDetailUsingAction(context,payload){
//       context.commit('changeDetail',payload)
//     }
//   },
// })


import { createStore } from 'vuex'

export default createStore({
  state: {
    userDetail: {
      name: '',
      userId: '',
    },
  },
  mutations: {
    changeDetail(state, payload) {
      state.userDetail = payload;
    },
  },
  actions: {
    changeDetailUsingAction({ commit }, payload) {
      commit('changeDetail', payload);
    },
  },
  getters: {
    getName(state) {
      return state.userDetail.name;
    },
  },
})

