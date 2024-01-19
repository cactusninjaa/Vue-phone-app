<script>
  import { useContactStore } from '@/stores/contact';
  import ContactCard from '@/components/ContactCard.vue';

  export default {
      name: 'ContactView',
      setup() {
        const contactStore = useContactStore();
        return {
          contactStore
        };
      },
      components: {
          ContactCard
      },

  }
</script>

<template>
  <main>
    <RouterLink to="/form">+</RouterLink>
    <div class="wrapper">
      <ContactCard v-for="contact in contactStore.contacts" :key="contact.name" :contact="contact" />
    </div>
  </main>
</template>

<style scoped>
main{    
  margin-top: 30px;
}  
a{
  color: black;
  text-decoration: none;
  font-size: 30px;
  width: 100%;
  display: block;
  text-align: center;
  background-color: green;
  border: none;
  border-radius: 10px;
}

.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

</style>


