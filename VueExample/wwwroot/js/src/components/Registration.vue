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
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    const RegistrationProps = Vue.extend({
        props: {
            propTitle: String
        }
    })

    @Component
    export default class Registration extends RegistrationProps {
        email: string = "";
        password: string = "";
        tryCounter: number = 0;

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