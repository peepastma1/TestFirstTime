<template>
    <div class="Ex4">
        <h1>Ex4</h1>
        <input v-model="newData">
        <button @click="addData">Submit</button>
        <ul>
            <li v-for="(Data, index) in DataList" :key="index">
                {{ Data }}
                <button @click="editData(index)">Edit</button>
                <!-- <button @click="editData(index)">{{ buttonText }}</button> -->
                <button @click="deleteData(index)">Delete</button>
            </li>
        </ul>
        <div v-if="editing">
            <input v-model="editedData" placeholder="Edit item">
            <button @click="saveData">Save</button>
            <button @click="cancelData">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            DataList: [],
            newData: '',
            editing: false,
            editedIndex: null,
            editedData: '',
            buttonText: 'Edit'
        };
    },
    methods: {
        addData() {
            if (this.newData !== '') {
                this.DataList.push(this.newData);
                this.newData = '';
            }
        },
        editData(index) {
            this.editing = true;
            this.buttonText = 'Cancle Edit';
            this.editedIndex = index;
            this.editedData = this.DataList[index];
        },
        saveData() {
            this.DataList[this.editedIndex] = this.editedData;
            this.editedData = '';
            this.editedIndex = null;
            this.editing = false;
        },
        cancelData() {
            this.editedData = '';
            this.editedIndex = null;
            this.editing = false;
        },
        deleteData(index) {
            this.DataList.splice(index, 1);
        },
    },
};
</script>
  
  