<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user}}</div> -->
         <router-link slot="username" v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        <template slot='time'>{{fetchedItem.time_ago}}</template>
      </user-profile>
      <!-- 질문 상세 정보 -->
      <!-- <div class='user-container'>
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class='user-description'>
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class='time'>
            {{fetchedItem.time_ago}}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>

    </section>
    <!-- 전체 뿌리기는 아래와같이 -->
    <!-- {{ this.$store.state.item }} -->
    <!-- <p>title : {{ this.$store.state.item.title }}</p>
    <p>content : {{ this.$store.state.item.content }}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from "vuex";
export default {
  components:{
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container{
  display:flex;
  align-items:center;
  padding:0.5rem;
}
.fa-user{
  font-size: 2.5rem;

}
.user-description{
  padding-left:8px;
}
.time{
  font-size: 0.7rem;
}

</style>