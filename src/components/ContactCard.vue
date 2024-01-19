<script>
    import CallButton from './CallButton.vue';
    export default{
        name: 'ContactCard',
        components: {
            CallButton
        },
        props: [
            'contact',
            'name'
        ],
        
    }
</script>

<template>
    <div class="contact-card">
        <h3>{{ contact.name }}</h3>
        <p>{{ contact.phoneNumber }}</p>
        <CallButton :name="contact.name"/>
    </div>
</template>

<style scoped>
.contact-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    color: #222;
    padding: 20px;
    margin-bottom: 10px;
    width: 100%;
}

</style>