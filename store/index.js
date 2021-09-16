import vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new vuex.Store({
    state: {
      loadedCountries: [],
    },
    mutations: {
      setCountries(state, countries) {
        state.loadedCountries = countries
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        const url = 'https://restcountries.eu/rest/v2/region/europe'
        return axios
          .get(url)
          .then((res) => {
            const countryData = []
            for (const key in res.data) {
              countryData.push({ ...res.data[key] })
            }
            vuexContext.commit('setCountries', countryData)
          })
          .catch((e) => console.log(e))
      },
    },
    getters: {
      loadedCountries(state) {
        return state.loadedCountries
      },
    },
  })
}

export default createStore
