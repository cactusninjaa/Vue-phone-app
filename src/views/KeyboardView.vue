<script>
  import CallButton from '@/components/CallButton.vue';
  import { useContactStore } from '@/stores/contact';
  export default {
    name: 'KeyboardView',
    setup() {
      const contactStore = useContactStore();
      return {
        contactStore
      };
    },
    props: {},
    computed: {},
    data() {
        return {
            phoneNumber: '',
            contactName: '',
            propsName:'',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#']
        };
    },
    methods: {
        checkContact(){
          this.contactStore.contacts.forEach(contact => {
            if (this.phoneNumber == contact.phoneNumber)
                this.contactName = contact.name;
            });
        },
        addNumber(number) {
            this.phoneNumber += number;
            this.checkContact();
            if (this.contactName)
              this.propsName = this.contactName;
            else
              this.propsName = this.phoneNumber;
        },
        clear() {
            this.phoneNumber = '';
            this.contactName = '';
            this.propsName = '';
        }
        
    },
    components: { 
      CallButton 
    }, 
    props: [
      'name'
    ],
}
</script>

<template>
  <main>
    <div class="number-input">{{ phoneNumber }}</div>
    <div class="contact-place">{{ contactName }}</div>
    <div class="keyboard-grid">
        <button v-for="number in numbers" class="key" @click="addNumber(number)">
            {{ number }}
        </button>
    </div>
    <CallButton :name="propsName" @click="clear()"/>
  </main>
</template>

<style scoped>
main{
  margin-top: 30px;
}
.contact-place,
.number-input{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  color: #222;
  padding: 20px;
  margin-bottom: 10px;
  height: 30px;
}
.call-button{
  display: flex;
  justify-content: center;
  background-color: green;
  border-radius: 10px;
  color: white;
  padding: 6px 20px;
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  border: none;
}
.call-button img{
  height: 100%;
}

.keyboard-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}
.key{
    background-color: white;
    border-radius: 10px;
    color: #222;
    padding: 20px;
    text-align: center;
    border: none;
}
</style>
