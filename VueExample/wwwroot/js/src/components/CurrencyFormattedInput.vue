<template>
    <input type="text" v-model="formatedNumber" v-on:keyup="onKeyUp" />
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Registration extends Vue {
        @Prop([Number, String]) value!: number | string;

        formatedNumber: string = "";

        onKeyUp() {
            var decimalSeparator: string = "";

            var replacedValue = this.formatedNumber.replace(/[^\d.-]/g, '');

            decimalSeparator = replacedValue.lastIndexOf('.') == replacedValue.length - 1 ? "." : "";

            var numValue: number | null = Number(replacedValue);

            if (numValue == NaN) {
                numValue = null;
                this.$emit('input', numValue);
                return;
            }

            var fixedString = numValue.toFixed(2);
            numValue = Number(fixedString);

            this.formatedNumber = (numValue.toLocaleString('hu-HU') + decimalSeparator).replace(',', '.');

            this.$emit('input', numValue);
        }
    }
</script>