import { MutationTree } from 'vuex';
import { IUser, IUserState } from 'src/model/user';

export const mutations: MutationTree<IUserState> = {
    usersLoaded(stater, payload: IUser[]) {
        stater.error = false;
        stater.users = payload;
    },

    loadError(stater, payload) {
        stater.error = true;
        stater.users = undefined;
        stater.message = payload;
    }
};