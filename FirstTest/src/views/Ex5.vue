<template>
    <div>
        <form @submit.prevent="generateChristmasTree">
            <label for="treeHeight">Enter a number from 1 to 10:</label>
            <input type="number" id="treeHeight" v-model.number="treeHeight" min="1" max="10">
            <button type="submit">Generate</button>
        </form>
        <div v-if="treeGenerated">
            <h2>Here's your Christmas tree:</h2>
            <div v-for="(tree, index) in trees" :key="index">
                <div v-for="(row, rowIndex) in tree" :key="rowIndex">
                    {{ rowIndex+1}} {{ row }} <a v-if="Math.floor(rowIndex + 1) == Math.floor(treeHeight/2)+1"> Bush {{ index +1 }}</a>
                </div>

                <!-- <div v-for="i in treeHeight" :key="i">
                    
                </div> -->

                <!-- <p>Order of rows: {{ getRowOrder(treeHeight) }}</p> -->
            </div>
            <div v-for="(tr, index) in trs" :key="index">
                <div v-for="(row, rowIndex) in tr" :key="rowIndex">
                    {{ rowIndex+1}} {{ row }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            treeHeight: 1,
            trees: [],
            trs:[],
            treeGenerated: false
        };
    },
    methods: {
        generateChristmasTree() {
            this.trees = [];
            // tr.push("x".repeat(this.treeHeight) + " * *");
            for (let i = 0; i < this.treeHeight; i++) {
                const tree = [];
                for (let j = 0; j < this.treeHeight; j++) {
                    tree.push("_".repeat(this.treeHeight - j) + " ".repeat(this.treeHeight - j - 1) + " *".repeat(j + 1));
                }
                this.trees.push(tree);
            }

            this.treeGenerated = true;
            this.gener()
        },
        gener(){
            this.trs = [];
            const tr = [];
            for(let i = 0; i < this.treeHeight; i++){
                    tr.push( "_".repeat(this.treeHeight)+"* *");
                }
         this.trs.push(tr);
        }
        //   getRowOrder(height) {
        //     return Array.from({ length: height }, (_, i) => i + 1).join(", ");
        //   }
    }
};
</script>