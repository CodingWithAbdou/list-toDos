<template>
  <div class="todos">
    <h2>Show To Dos</h2>
    <table v-if="data.length">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(info, index) in data"
          :key="index"
          :style="`${
            info.staut
              ? 'background: #0fae0059;opacity:.3'
              : 'background : transparent'
          }  `"
        >
          <td>{{ info.text }}</td>
          <td>{{ info.from }}</td>
          <td>{{ info.to }}</td>
          <td>
            <span>{{ info.time[1] }} </span>
            <span> {{ info.time[0] }}</span>
          </td>
          <td>
            <button @click="changeStaut(index)">
              {{ info.staut ? "Completed" : "Incomplete" }}
            </button>
            <button @click="deletItem(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 v-else>Not Have To Do To Show</h3>
  </div>
</template>

<script setup>
import toDoMetod from "@/mixins/mixin";

const { data, setLocalSt } = toDoMetod();

const deletItem = (number) => {
  data.value.splice(number, 1);
  setLocalSt();
};

const changeStaut = (number) => {
  data.value[number].staut = !data.value[number].staut;
  setLocalSt();
};
</script>

<style>
th,
td {
  border: 1px solid #42b983;
  padding: 0.5rem;
}

table {
  width: 100%;
}
</style>
