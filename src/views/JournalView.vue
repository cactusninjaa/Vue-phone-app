<script> 
    import { useJournalStore } from '@/stores/journal';
    import JournalCard from '@/components/JournalCard.vue';

    export default {
        name: 'JournalView',
        setup() {
          const journalStore = useJournalStore();
          return {
            journalStore
          };
        },
        components: {
            JournalCard
        },
        props: {
        },
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<template>
  <main>
    <div class="container">
      <h1>Recents</h1>
      <JournalCard v-for="journal in journalStore.journals" :key="journal.name" :journal="journal" />
    </div>
  
  </main>
</template>

<style scoped>
main{    
  margin-top: 20px;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
}  
.container{
  width: 100%;
  max-width: 500px;
}
h1{
  margin-bottom: 20px;
  align-self: flex-start;
}

</style>