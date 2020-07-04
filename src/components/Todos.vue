<template>
    <div class="todo-list">
        <v-container>
            <h3 class="todo-heading">Todos: 
                <span>Double click to mark as complete </span>
                <span>
                    <span class="incomplete-box"></span> = Incomplete
                    <span class="complete-box"></span> = Complete
                </span>
            </h3>
            <v-row dense>
                <v-col cols="12" xs="6" sm="4" lg="3" 
                @dblclick="onDblClick(todo)"
                v-for="todo in allTodos"
                :key="todo.id"
                class="todo"
                v-bind:class="{'is-complete':todo.completed}"
                >
                <v-card
                    min-height="80px"
                    dark
                >
                    <v-card-subtitle class="white--text">{{todo.title}} <v-icon @click="deleteTodo(todo.id)">mdi-delete</v-icon></v-card-subtitle>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todo-list{
    padding: 0 0 3em;
}
.complete-box {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #41b883;
}
.incomplete-box {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #104388;
}
h3.todo-heading>span:last-child {
    display: block;
    font-weight: 400;
    font-size: 20px;
}
h3.todo-heading {
    text-align: center;
    padding-bottom: 1em;
    font-size: 24px;
    font-weight: 500;
}
button.v-icon.notranslate.v-icon--link.mdi.mdi-delete {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    color: #fff;
}
.v-card.v-sheet.theme--dark {
  background: #104388;
  color: #fff;
}
.is-complete>.v-card.v-sheet.theme--dark {
  background: #41b883;
  color: #fff;
}


@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>