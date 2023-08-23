import { createStore } from 'vuex'

export const store2 = createStore({
    state () {
      return {
        num : 100
      }
    },
    getters : {
        getNomarNum (state){
            return state.num;
        },
        getDoubleNum (state){
            return state.num * 2;
        },
        getTripleNum (state){
            return state.num  * 3;
        }
    }
  })