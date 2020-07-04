<template>
  <v-app>
    <div id="app">
      <Header/>
      <AddTodos/>
      <FilterTodo/>
      <Todos/>
      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';
import FilterTodo from './components/FilterTodo';
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Todos,
    AddTodos,
    FilterTodo,
    Footer,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
