<template>
    <div>
        <p v-if="loading">Loading data...</p>
        <ul v-if="!loading">
            <li v-for="item in data" :key="item.id">
                {{ item }}
            </li>
        </ul>
    </div>


    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <!-- <th>Location</th>
        <th>Count</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in data" :key="person.id">
                <td>{{ person.id }}</td>
                <td>{{ person.name }}</td>
                <!-- <td>{{ person.Location}}</td>
        <td>{{ person.Count }}</td> -->
            </tr>
        </tbody>
    </table>
</template>
  
<script>
import axios from 'axios';
const URL1 = "https://mocki.io/v1/e6644d9f-943a-466c-aede-591c5cba5f1b"
const URL2 = "https://mocki.io/v1/423e73f8-863d-4327-9cc9-4b67bc2c5542"
const URL3 = "https://mocki.io/v1/6b6f5539-06e2-4233-9c7c-1eca1c7e1dea"

export default {
    data() {
        return {
            // id:'',
            // name:'',
            // location:'',
            // count:'',

            data: [],
            loading: true
        };
    },
    mounted() {
        // merge ดาต้าจาก API ยังไงไปหามาเพิ่ม *******
        // axios.all([
        //     axios.get('https://mocki.io/v1/e6644d9f-943a-466c-aede-591c5cba5f1b'),
        //     axios.get('https://mocki.io/v1/423e73f8-863d-4327-9cc9-4b67bc2c5542'),
        //     axios.get('https://mocki.io/v1/6b6f5539-06e2-4233-9c7c-1eca1c7e1dea')
        // ])
        //       .then(axios.spread((response1, response2, response3) => {
        //         this.data = response1.data
        //         this.loading = false;
        //       }))
        //     //   .catch(error => {
        //     //     console.error(error);
        //     //     this.loading = false;
        //     //   });
        //     axios
        //     .get('https://mocki.io/v1/e6644d9f-943a-466c-aede-591c5cba5f1b')
        //     .then((response1) => {
        //         console.log(response1.data);
        //         this.data = response1.data;
        //         this.loading = false;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         this.loading = false;
        //     });

        //     axios
        //     .get('https://mocki.io/v1/423e73f8-863d-4327-9cc9-4b67bc2c5542')
        //     .then((response2) => {
        //         console.log(response2.data);
        //         this.data = response2.data;
        //         this.loading = false;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         this.loading = false;
        //     });

        //     axios
        //     .get('https://mocki.io/v1/6b6f5539-06e2-4233-9c7c-1eca1c7e1dea')
        //     .then((response3) => {
        //         console.log(response3.data);
        //         this.data = response3.data;
        //         this.loading = false;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         this.loading = false;
        //     });
    }
};
</script>