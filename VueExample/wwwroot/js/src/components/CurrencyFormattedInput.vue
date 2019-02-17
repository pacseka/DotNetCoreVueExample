<template>
    <input type="text" v-model="formatedNumber" v-on:keyup="onKeyUp" maxlength="14" />
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class Registration extends Vue {
        @Prop([Number, String]) value!: number | string;

        formatedNumber: string = "";
        readonly maxValue: number = 999999999; 

        onKeyUp() {
            var containNumber = /\d/;
            if (!containNumber.test(this.formatedNumber)) {
                this.formatedNumber = '';
                this.$emit('input', null);
                return;
            }

            var replacedValue = this.formatedNumber.replace(/[^\d.]/g, '');

            replacedValue = this.removeDecimalSeparatorDuplication(replacedValue);

            var decimalSeparator = this.checkDecimalSeparator(replacedValue);

            var numValue: number | null = Number(replacedValue);

            if (isNaN(numValue)) {
                this.formatedNumber = '';
                this.$emit('input', null);
                return;
            }

            var fixedString = numValue.toFixed(2);
            numValue = Number(fixedString);

            if (this.maxValue < numValue) {
                numValue = this.maxValue;
            }

            this.formatedNumber = (numValue.toLocaleString('hu-HU') + decimalSeparator).replace(',', '.');

            this.$emit('input', numValue);
        }

        checkDecimalSeparator(inputValue: string): string {

            if (!inputValue || inputValue == null || inputValue.length == 0) {
                return '';
            }

            var length = inputValue.length;
            var firstDecimalSeparatorIndex = inputValue.indexOf('.');
            var lastDecimalSeparatorIndex = inputValue.lastIndexOf('.');

            if (firstDecimalSeparatorIndex != lastDecimalSeparatorIndex) {
                return '';
            }

            return lastDecimalSeparatorIndex == length - 1 ? '.' : '';
        }

        removeDecimalSeparatorDuplication(inputValue: string): string {
            if (!inputValue || inputValue == null || inputValue.length == 0) {
                return '';
            }

            var firstDecimalSeparatorIndex = inputValue.indexOf('.');
            var lastDecimalSeparatorIndex = inputValue.lastIndexOf('.');

            if (firstDecimalSeparatorIndex == lastDecimalSeparatorIndex) {
                return inputValue;
            }

            return inputValue.substring(0, lastDecimalSeparatorIndex - 1);

        }

    }
</script>