<template>
  <div class="home">
    <form action="" @submit.prevent="addTodo()">
      <input
        type="text"
        v-model="toDo.text"
        placeholder="Enter To Do"
        required
      />
      <input type="date" v-model="toDo.from" name="from" id="from" required />
      <input type="date" v-model="toDo.to" name="to" id="to" required />
      <input type="submit" value="Add To Do" name="" id="" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import toDoMethod from "@/mixins/mixin";

const { data, setLocalSt } = toDoMethod();

const toDo = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  time: [],
});

const addTodo = () => {
  toDo.value.id = 1 + data.value.length;
  toDo.value.time[0] = new Date().toJSON().slice(0, 10);
  toDo.value.time[1] = new Date().toJSON().slice(11, 16);
  data.value.push(toDo.value);

  setLocalSt();
  toDo.value = {
    text: "",
    from: "",
    to: "",
    time: [],
    staut: false,
  };
};
</script>

<style scoped lang="scss">
input {
  margin: 10px auto;
  outline: none;
  border: 1px solid #42b983;
}
[type="text"] {
  display: block;
  padding: 1rem;
  width: 50%;
}
[type="date"] {
  margin-inline: 1rem;
  padding: 0.5rem 1rem;
}
[type="submit"] {
  display: block;
  cursor: pointer;
  background-color: #42b983;
  color: #fff;
  border-radius: 4px;
  padding: 12px;
}
</style>
