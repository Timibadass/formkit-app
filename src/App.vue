<script setup>
import FormKitExample from './components/FormKitExample.vue';
// import ErrorHandling from './components/ErrorHandling.vue'
// import LoginForm from './components/LoginForm.vue'
// import SchemaExample from './components/SchemaExample.vue'
// import VuelidateForm from './components/VuelidateForm.vue'
async function submit() {
  await new Promise(r => setTimeout(r, 1000))
  alert('Submitted! 🎉')
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <!-- <LoginForm /> -->
    <!-- <VuelidateForm /> -->
    <FormKitExample />
    <!-- <ErrorHandling /> -->
    <!-- <SchemaExample /> -->
  </div>
</template>
<style>
label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input, select, textarea {
  width: 100%;
  height: 40px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding-left: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

textarea {
  height: 100px;
  display: block;
}

input[type='submit'], button[type='submit'] {
  width: 100%;
  display: block;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  border: 0;
  height: 40px;
  background-color: #3b82f6;
}
</style>
