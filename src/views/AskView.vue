<template>
  <div>
    <list-item></list-item>
    <!-- <ul class='ask-list'>
    <li v-for="item in this.$store.state.ask" class='post'>
        <div class='points'>
            {{item.points}}
        </div>
        <div>
        <p class="ask-title">
        <router-link v-bind:to="`/item/${item.id}`" class='link-text'>{{ item.title }}</router-link>
        </p>
      <small class='link-text'>
        {{item.time_ago}} by
        <router-link v-bind:to="`/item/${item.user}`" class='link-text'>{{ item.user }}</router-link>
      </small>
      </div>
    </li>
    </ul>  -->
  </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js'
export default {
  components:{
    ListItem,
  },
  mixins: [ListMixin],
  //   computed: {
  //   ...mapGetters(["fetchedAsk"]),

  //   //#2
  //   // ...mapState({
  //   //     fetchedask : state=> state.ask
  //   // })
  //   //#3
  //   // ask(){
  //   //     return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch("FETCH_ASK");
  // },

  
};
</script>

<style>

</style>