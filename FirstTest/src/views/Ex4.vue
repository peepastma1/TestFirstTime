<template>
    <div>

        <form @submit.prevent="submitForm">
            <label for="input">require Number : </label>
            <input type="number" id="input" v-model.number="numberInput" />
            <button type="submit">Submit</button>
        </form>
        <form @submit.prevent="submitForm2">
            <label for="input2">จำนวนตัวเลขที่ต้องการสุ่ม : </label>
            <input type="number" id="input2" v-model.number="numberRandom" />
            <button type="submit">Random number</button>
        </form>
        <button @click="clear">Clear</button><br>

        <!-- <div v-if="warning">{{ warning }}</div> -->
        <form @submit.prevent="filterNumbers">
            <label for="filterValue">Filter Value:</label>
            <input type="number" id="filterValue" v-model.number="filterValue">
            <button type="submit">Filter</button>
        </form>


        <!-- <label for="input2">เลขที่ต้องการ filter : </label>
        <input type="number" id="input2" v-model.number="filterNum" />
        <button @click="useFilter">Filter</button> -->
        <div>
            <br><br>
            <p>มีจำนวนทั้งหมด {{ numbers.length }} ตัว</p>
            <p>{{ numbers.join(' ') }}</p>
            <br><br>
            <p>เลขที่มีในการ filter {{ count }} ตัว</p>
            {{ InFilteredArray }}
            <br><br>
            <p>เลขที่ไม่มีในการ filter {{ numbers.length - count }} ตัว</p>
            <p>
                {{ notInFilteredArray }}
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            numberInput: '',
            numberRandom: '',
            numbers: [],
            count: 0,
            filterValue: '',
            filteredNumbers: '',
            InFilteredArray: '',
            notInFilteredArray:''
        };
    },
    methods: {
        addNumber() {
            if (this.numberInput !== '') {
                this.numbers.push(this.numberInput);
                this.numberInput = '';
            }
        },
        showAllNumbers() {
            numbers.join(' ')
        },
        submitForm() {
            this.addNumber()
            this.showAllNumbers();

        },
        submitForm2() {
            if (this.numberRandom < 1 || this.numberRandom > 9) {
                this.warning = 'Please enter a number between 1 and 9.';
            } else {
                // Do something with the valid input value
                this.warning = '';
                this.generateRandomNumbers(this.numberRandom);
                this.showAllNumbers();
            }
        },
        generateRandomNumbers(n) {
            for (let i = 0; i < n; i++) {
                this.numbers.push(Math.floor(Math.random() * 9) + 1);
            }
        },
        filterNumbers() {
            this.filteredNumbers = this.numbers.filter(number => number == this.filterValue);
            this.InFilteredArray = this.filteredNumbers.join(', ');
            this.count = this.filteredNumbers.length;
            this.notInFilteredArray = this.numbers.filter(number => !this.filteredNumbers.includes(number)).join(', ');
        },
        clear() {
            this.numberInput = '',
                this.numberRandom = '',
                this.numbers = [],
                this.count = 0,
                this.filterValue = 0,
                this.filteredNumbers = '',
                this.InFilteredArray = '',
                this.notInFilteredArray = ''

        }
    }
};
</script>

<style scoped>
/* .text {
    word-spacing: 100px;
  } */
</style>