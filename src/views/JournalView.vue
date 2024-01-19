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
    <JournalCard v-for="journal in journalStore.journals" :key="journal.name" :journal="journal" />
  </main>
</template>

<style scoped>
main{
  margin-top: 30px;
}

</style>