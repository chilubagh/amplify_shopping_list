<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="createTodo">Create Todo</button>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { createShoppinglist } from "./graphql/mutations";
import Amplify, { Auth } from "aws-amplify";

export default {
  mounted(){
    AmplifyEventBus.$on("authSate", eventInfo => {
      if (eventInfo === "signedIn"){
        this.$router.push({name:"Home"});
      }else if(eventInfo === "signOut"){
        this.$router.push({name:"Auth"});
      }
    });
    if(Auth.currentAuthenticatedUser()){
      this.$router.push({name: "Home"});
    }else{
      this.$router.push({name: "Auth"});
    }
  }
</script>
