<template>
  <div>
        <v-container>
            <div class="filter-select">
                <span>Filter Todos: </span>
                <select @change="filterTodos($event)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
                </select>
            </div>
        </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"])
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  font-size: 14px;
  border: #104388 1.5px solid;
  border-radius: 5px;
}
.filter-select{
    text-align: right;
    font-weight: 400;
}
</style>