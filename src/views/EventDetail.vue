<template>
  <div v-if="event">
    <h1>{{ event.title }} on {{event.date}} @ {{event.location}}</h1>
    <p>{{event.time}}</p>
    <p>{{event.description}}</p>
  </div>
</template>

<script>
import EventServices from "@/services/EventServices";
export default {
  name: "EventDetail",
  props:{
    id:{
      type: String
    }
  },
  data(){
    return{
      event:null
    }
  },
  created() {
    EventServices.getEvent(this.id)
        .then(response =>{
          console.log(response.data)
          this.event = response.data
        })
  }
}
</script>

<style scoped>

</style>