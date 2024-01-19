import { defineStore } from 'pinia';

export const useContactStore = defineStore ('contact', {
  state: () => ({
    contacts : [
      {
        name: 'Anthony',
        phoneNumber : '0666666666'
      },
      {
        name: 'Maxence',
        phoneNumber : '0555555555'
      },
      {
        name: 'Guillaume',
        phoneNumber : '0444444444'
      },
      {
        name: 'Jeff',
        phoneNumber : '0333333333'
      }
    ]
  }),
  actions: {
    addContact(newContact){
      this.contacts.push(newContact)
    }, 
    checkContact(contactNumber){
      this.contacts.forEach(contact => {
          if (contactNumber == contact.phoneNumber)
            console.log(contact.name)
            return contact.name
      });
    }
  }
})
   
