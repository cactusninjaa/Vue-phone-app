<script>
    import CallButton from './CallButton.vue';
    export default{
        name: 'JournalCard',
        components: {
            CallButton
        },
        props: [
            'journal',
            'name'
        ]
    }
</script>

<template>
    <div class="journal-card">
        <h3>{{ journal.name }}</h3>
        <p class="hour">{{ journal.hour }}</p>
        <p class="date">{{ journal.date }}</p>
        <div class="button">
            <CallButton :name="journal.name"/>
        </div>
    </div>
</template>

<style scoped>
.journal-card{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: white;
    align-items: center;
    background-color: #E5E5E5;
    padding: 8px 12px;
    border-radius: 10px;
    color: #222;
    margin-bottom: 10px;
}
.date, .hour{
    justify-self: center;
}
.button{
    justify-self: flex-end;
}
</style>