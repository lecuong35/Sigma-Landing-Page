import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    showSearch: false,
    showMode: false,
    showToggle: false,
    countries: [],
  },
  getters: {
    showSearch: (state) => state.showSearch,
    showMode: (state) => state.showMode,
    showToggle: (state) => state.showToggle,
    countries: (state) => state.countries,
  },
  mutations: {
    MODE(state) {
      state.showMode = !state.showMode;
    },
    SEARCH(state) {
      state.showSearch = !state.showSearch;
    },
    TOGGLE(state) {
      state.showToggle = !state.showToggle;
    },
    COUNTRIES(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    getCountries({ commit }, state) {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((result: any) => {
          const countries = result.data;
          commit("COUNTRIES", countries);
          console.log(countries);
        })
        .catch((err: any) => {
          console.log("error");
        });
    },
  },
  modules: {},
});
