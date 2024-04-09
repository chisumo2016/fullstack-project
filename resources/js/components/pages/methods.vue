<script setup>

import {onMounted, ref} from "vue";

const counter = ref(0);
 const  blogs =  ref([
         {id: 1, title: 'This is blog Title 1'},
         {id: 2, title: 'This is blog Title 2'},
         {id: 3, title: 'This is blog Title 3'},
 ])

let  showItem = ref(false);
const increment = () => {
    counter.value +=1;


   //counter.value--;
}
const decrement = () => {
    counter.value -=1;

    //counter.value--;
}
onMounted(() =>{
    // Call  the server  to get counter/view of blog
    counter.value = 100

    //get the blog posts
})

const changeShowItem = () => {
    showItem.value = !showItem.value;
}
</script>

<template>
 <h1>Data Here  {{ counter }} </h1>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>

    <br>
    <div>
        <ul>
            <li v-for="(blog , index) in blogs" :key="index" v-if="blogs.length">{{ blog.title}}</li>
        </ul>
    </div>

    <br>
    <div>
        <h1 v-if="showItem">Show this if "showItem" is true </h1>
        <h1 v-else>Show this if "showItem" is false </h1>
        <button @click="changeShowItem">Change</button>
    </div>



</template>

<style scoped>

</style>
