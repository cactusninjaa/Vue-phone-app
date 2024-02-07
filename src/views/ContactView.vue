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
    <div class="container">
      <div class="header-wrapper">
        <h1>Contacts</h1>
        <RouterLink to="/form">+</RouterLink>
      </div>
      <div class="wrapper">
        <ContactCard v-for="contact in contactStore.contacts" :key="contact.name" :contact="contact" />
      </div>
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

.header-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;
}

a{
  color: #0091FF;
  text-decoration: none;
  font-size: 30px;
  display: block;
  text-align: center;
  border: none;
  border-radius: 10px;
  line-height: 0;
}

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

</style>


