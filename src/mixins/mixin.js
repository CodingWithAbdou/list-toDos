import { ref, onBeforeMount } from "vue";

const toDoMethod = () => {
  const data = ref([]);

  const setLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(data.value));
  };

  const IsLocalBlank = () => {
    if (localStorage.getItem("todos")) {
      data.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  onBeforeMount(() => {
    IsLocalBlank();
  });

  return { data, setLocalSt };
};

export default toDoMethod;
