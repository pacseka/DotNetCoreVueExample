import { GetterTree } from 'vuex';
import { IUserState } from 'src/model/user';
import { IRootState } from 'src/model/rootstate';

export const getters: GetterTree<IUserState, IRootState> = {
    count(stater) : number {
        const { users } = stater;
        return (users && users.length) || 0; 
    }
};