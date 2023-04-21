<template>
    <div>

        <form @submit.prevent="submitForm">
            <label for="input">Number is require 1 - 100 : </label>
            <input type="number" id="input" v-model.number="numberInput" min="1" max="100" />
            <button type="submit">Submit</button>
        </form>
        <div v-if="warning">{{ warning }}</div>
        <div>
            <button @click="showAllNumbers">แสดงเลขทั้งหมด</button>
            <button @click="showOddNumbers">แสดงเลขคึ่</button>
            <button @click="showEvenNumbers">แสดงเลขคู่</button>
        </div>
        <div>
            <p v-if="numbers.length === 0">ไม่มีจำนวนที่เลือก</p>
            <p v-else class="text"><p>มีจำนวนทั้งหมด {{ numbers.length }} ตัว</p>{{ numbers.join(' ') }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            numberInput: '',
            numbers: [],
            count: 0,
        };
    },
    methods: {
        showAllNumbers() {
            this.numbers = Array.from({ length: this.numberInput }, (_, i) => i + 1);
        },
        showOddNumbers() {
            this.numbers = Array.from({ length: this.numberInput }, (_, i) => i + 1).filter((n) => n % 2 !== 0);
        },
        showEvenNumbers() {
            this.numbers = Array.from({ length: this.numberInput }, (_, i) => i + 1).filter((n) => n % 2 === 0);
        },
        submitForm() {
            if (this.numberInput < 1 || this.numberInput > 100) {
                this.warning = 'Please enter a number between 1 and 100.';
            } else {
                // Do something with the valid input value
                this.warning = '';
                this.showAllNumbers();
            }
        },
    },
};
</script>

<style scoped>
/* .text {
    word-spacing: 100px;
  } */
</style>