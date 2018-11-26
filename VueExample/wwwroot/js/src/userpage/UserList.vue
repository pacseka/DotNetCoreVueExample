<template>
    <div v-if="usersmodule.users">
        <div class="form-group">
            <button v-on:click="less" class="form-control">Less</button>
            <button v-on:click="more" class="form-control">More</button>
        </div>
        <ul class="list-group"  >
            <li class="list-group-item" v-for="user in usersmodule.users" :key="user.id" >{{ user.name }}</li>
        </ul>
    </div>
    
</template>
<script lang="ts">
    import Vue from 'vue';
    import { State, Action, Getter } from 'vuex-class';
    import Component from 'vue-class-component';
    import { IUser, IUserState } from 'src/model/user';
    const namespace: string = 'usersmodule';

    @Component
    export default class  UserList extends Vue {
        @State('usersmodule') usersmodule: IUserState;
        @Action('fetchData',  { namespace }) fetchData: any;
        @Getter('count', { namespace}) count: number;

       /* mounted() {
            this.fetchData(true);
        }*/

        get IsAll() {
            const userList = this.usersmodule && this.usersmodule.users;
            return this.count > 5;
        }

        less() {
            this.fetchData(false);
        }

        more() {
            this.fetchData(true);
        }
    }

</script>

