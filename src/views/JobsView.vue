<template>
  <div>
    <list-item></list-item>
    <!-- <ul class='jobs-list'>
    <li v-for="item in this.$store.state.jobs" class='post'>
        <div class='points'>
            {{item.points || 0}}
        </div>
        <div>  
        <p class='jobs-title'>
        <a v-bind:href="item.url">{{ item.title }}</a>
        </p>
        <small class='link-text'>
        {{item.time_ago}} by 
        <a :href="item.url">{{item.domain}}</a>
        </small>
    </div>
    </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
export default {
  components:{
    ListItem,
  },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  //   // fetchJobsList()
  //   // .then(response => this.jobs = response.data)
  //   // .catch(error => console.log(error));
  // },
      created(){
        bus.$emit('start:spinner');
        setTimeout( () => {

        this.$store.dispatch("FETCH_JOBS")
        .then( () => {
            console.log('fetched');
            bus.$emit('end:spinner');
        })
        .catch((error) =>{
            console.log(error);
        });
        }, 300)

    }
};
</script>

<style>
.jobs-list{
    margin:0;
    padding:0;
}
.post{
    list-style: none;
    display: flex;
    align-items:center;
    border-bottom:1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.jobs-title{
    margin: 0;
}
.link-text{
    color: #828282;
}
</style>