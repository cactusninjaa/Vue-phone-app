<script>
    import router from '@/router';
import { useContactStore } from '@/stores/contact';
    import { useRouter } from 'vue-router';
    export default{
        name: 'Keyboard',
        setup(){
            const contactStore = useContactStore();
            const router = useRouter();
            return{
                router,
                contactStore
            }
        },
        data(){
            return{
                inputPhone: '',
                inputName: '',
                nameCounter: 0,
                phoneCounter: 0
                
            }
        },
        methods: {
            addContact(){
                if (document.querySelector('input[name="name"]').value == '' || document.querySelector('input[name="phoneNumber"]').value == '')
                    alert('Please fill in all the fields');
                else{
                    const name = document.querySelector('input[name="name"]').value;
                    const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
                    this.contactStore.addContact({
                        name,
                        phoneNumber
                    })
                    router.push('/contact');
                }
            },
            increeseName(){
                this.nameCounter++;
            },
            increesePhone(){
                this.phoneCounter++;
            }

        }
    }
    
</script>

<template>
    <main>
        <div class="container">
            <div>
                <input type="text" name="name" id="" placeholder="Name" v-model="inputName" @click="increeseName()">
                <p v-if="!inputName && nameCounter!=0">Field can't be empty</p>
            </div>
            <div>
                <input type="number" name="phoneNumber" id="" placeholder="0000000000" v-model="inputPhone" @click="increesePhone()">
                <p v-if="!inputPhone && phoneCounter!=0">Field can't be empty</p>
            </div>
    
            <button @click="addContact()">Create new contact</button>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
  border-radius: 10px;
  padding: 20px ;
  width: 100%;
  height: 30px;
  border: none;
}
div{
  margin-bottom: 10px;
}

button{
  width: 100%;
  background-color: #00E16A;
  border: none;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
}
a{
    margin: 0;
    padding: 0;
}

p{  
    color: red;
    margin: 4px 0 0;
    padding: 0;
}
</style>