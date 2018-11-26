import { ActionTree} from 'vuex';
import axios from 'axios';
import { IUser, IUserState } from 'src/model/user';
import { IRootState } from 'src/model/rootstate'

export const actions: ActionTree<IUserState, IRootState> = {
    fetchData({commit}, all:boolean) : any {
        axios({
            url:"/api/user?all="+all
        }).then((response)=>{
            const payload: IUser[] = response && response.data;
            commit('usersLoaded', payload);
        }, (error) => {
            commit('loadError', "Error!!!");
        });
    }
};