import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from 'src/model/rootstate';
import { usersmodule } from './usersmodule/index';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {
      version: '1.0.0.'
    },
    modules: {
      usersmodule
    }
};

export default new Vuex.Store<IRootState>(store);


