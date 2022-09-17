import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state:{
      loadedPosts:[]
    },

    mutation:{
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },

    actions:{
      nuxtServerInit(vuexContext, context) {
        return axios.get(process.env.baseUrl)
          .then(output => {

            // Lo trasformo in array
            const postArray = [];
            for (const key in output.data) {
              postArray.push( {...output.data[key], id: key} )
            }

            vuexContext.commit('setPosts', postArray)
          })
          .catch(error => {
            context.error(error);
          })

      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }

  })
}

export default createStore
