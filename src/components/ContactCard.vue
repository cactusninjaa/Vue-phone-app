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
        <p class="phone">{{ contact.phoneNumber }}</p>
        <div class="button">
            <CallButton :name="contact.name"/>
        </div>
    </div>
</template>

<style scoped>
.contact-card{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 10px;
    color: #222;
    margin-bottom: 10px;
    align-items: center;
    background-color: #E5E5E5;
    padding: 8px 12px;
    width: 100%;
}
.phone{
    justify-self: center;
}
.button{
    justify-self: flex-end;

}

</style>