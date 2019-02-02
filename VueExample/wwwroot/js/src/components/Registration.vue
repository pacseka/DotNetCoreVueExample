<template>
    <div>
        <h3>{{propTitle}}</h3>
        <div class="form-group">  
            <label class="control-label" for="email">Email</label>
            <input v-model="email" v-validate="'email|required'" data-vv-as="Email" name="email" class="form-control" type="email" placeholder="Email">
            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
        </div>
        <div class="form-group">
            <label class="control-label" for="password">Jelszó</label>
            <input v-model="password" v-validate="'required'" data-vv-as="Jelszó" name="password" class="form-control" type="password" placeholder="Jelszó">
            <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
        </div>
        <div class="form-group">
            <button v-on:click ="validate" class="form-control" >Mehet</button>
        </div>
        <currency-formatted-input v-model="regNumber"></currency-formatted-input>
        <div>
            Ez egy szám: {{regNumber}}
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import CurrencyFormattedInput from './CurrencyFormattedInput.vue';

    @Component({
        components: {
            CurrencyFormattedInput
        }
    })

    export default class Registration extends Vue {
        email: string = "";
        password: string = "";
        tryCounter: number = 0;
        regNumber: number | string = "";

        @Prop(String)propTitle: string;

        validate(){
            this.$validator.validate().then(valid=> {
                if(!valid) return;
                this.$emit('send-register');
            });     
        }

        writeLog() {
            console.log("Logolok, de nagyon!");
        }
    }
</script>