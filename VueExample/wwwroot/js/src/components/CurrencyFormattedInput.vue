<template>
        <input type="text" :class="{formatClass}" v-model="formatedNumber" v-on:keyup="onKeyUp" />
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';


    @Component
    export default class Registration extends Vue {
        @Prop(String) formatClass: string;
        @Prop([Number, String]) value!: number | string;

        formatedNumber: string = "";

        onKeyUp() {
            var numValue: number | null  = Number(this.formatedNumber.replace(/[^\d.-]/g, ''));
            

            if (numValue == NaN) {
                numValue = null;
                return;
            }

            this.formatedNumber = numValue.toLocaleString('hu-HU');
            this.$emit('input', numValue);
            
        }

    }

</script>