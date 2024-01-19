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
        <p>{{ journal.hour }}</p>
        <p>{{ journal.date }}</p>
        <CallButton :name="journal.name"/>
    </div>
</template>

<style scoped>
.journal-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    color: #222;
    margin-bottom: 10px;

    padding: 10px 10px;
}

</style>