import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IUserState } from 'src/model/user';
import { IRootState } from 'src/model/rootstate';


export const state: IUserState = {
    users: undefined,
    error: false,
    message: ""
};

const namespaced: boolean = true;

export const usersmodule: Module<IUserState, IRootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};