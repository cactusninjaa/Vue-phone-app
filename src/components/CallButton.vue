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
        <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M860.16 648.533333c-51.2 0-102.4-6.826667-150.186667-23.893333-20.48-6.826667-47.786667 0-61.44 13.653333l-95.573333 71.68c-112.64-58.026667-180.906667-129.706667-238.933333-238.933333l71.68-95.573333c17.066667-17.066667 20.48-40.96 13.653333-61.44-13.653333-47.786667-23.893333-98.986667-23.893333-150.186667 0-34.133333-27.306667-61.44-61.44-61.44H163.84C129.706667 102.4 102.4 129.706667 102.4 163.84 102.4 580.266667 443.733333 921.6 860.16 921.6c34.133333 0 61.44-27.306667 61.44-61.44v-153.6c0-30.72-27.306667-58.026667-61.44-58.026667z" fill="" /></svg>
    </button>
</template>

<style scoped>
.call-button{
  display: flex;
  justify-content: center;
  background-color: #00E16A;
  border-radius: 100px;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}
svg{
  width: 30px;
  height: 30px;
}
path{
    fill: white;
}
.call-button img{
  height: 100%;
}

</style>