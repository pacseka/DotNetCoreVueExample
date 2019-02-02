<template>
    <div>
        <div class="form-group">
            <Registration ref="registrationComponent" v-on:send-register="sendRegistration" prop-title="Nagyon itt regisztrálhatol vagy valami!"></Registration>
        </div>
        <div class="from-group">
            <button class="form-control" @click="getUsers(false)">Users</button>
        </div>
        <div class="from-group">
            <UserList ref="usersComponent"></UserList>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Registration from '../components/Registration.vue';
    import UserList from './UserList.vue';

    const AppProps = Vue.extend({
        props: {
            propMessage: String
        }
    })

    @Component({
        components: {
            Registration,
            UserList
        }
    })

    export default class App extends AppProps {
        msg: number = 123

        $refs!: {
            registrationComponent: Registration;
            usersComponent: UserList;
        }

        sendRegistration() {
            console.log("sendRegistration");
            (<any>this.$refs.registrationComponent).writeLog();
        }

        getUsers(all: boolean) {
            (<any>this.$refs.usersComponent).fetchData(all);
        }
    }
</script>
