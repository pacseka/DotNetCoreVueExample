import Vue from 'vue'
import App from './userpage/App.vue'
import store from "./userpage/store";
import VeeValidate, { Validator } from 'vee-validate';



Vue.use(VeeValidate, {
  locale: 'hu',
  dictionary: {
    hu: {
      messages: {
        email: "Nem megfelelő az Email formátum",
        required: "Kötelező mező!"
      }
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
