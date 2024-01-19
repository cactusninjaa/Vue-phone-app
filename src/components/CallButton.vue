<script>
    import { useJournalStore } from '@/stores/journal';
    export default{
        name: 'CallButton',
        setup(){
            const journalStore = useJournalStore();
            return{
                journalStore
            }
        },
        props: [
            'name'
        ],
        methods: {
            call(name){
                this.journalStore.call(name)
            }
        }
    }
</script>

<template>
    <button @click="call(name)" class="call-button">
        <img src="../assets/img/phone-call.png" alt="">
    </button>
</template>

<style scoped>
.call-button{
  display: flex;
  justify-content: center;
  background-color: green;
  border-radius: 10px;
  color: white;
  padding: 6px 20px;
  height: 50px;
  border: none;
}
.call-button img{
  height: 100%;
}

</style>