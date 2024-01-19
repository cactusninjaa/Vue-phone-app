import { defineStore } from 'pinia';

export const useJournalStore = defineStore ('journal', {
  state: () => ({
    journals : [
      {
        name: 'Anthony',
        hour: '11h11',
        date: '11/11/1111'
      },
      {
        name: 'Maxence',
        hour: '12h12',
        date: '12/12/1212'
    
      },
      {
        name: '0222222222',
        hour: '02h22',
        date: '02/02/0202'
      }
    ]
  }),
  actions: {
    call(name){
        const now = new Date()
        const contact = {
            name: name,
            hour: `${now.getHours()}h${now.getUTCMinutes()} `,
            date: `${now.getDate()}/ ${now.getMonth()+1} / ${now.getUTCFullYear()}`
        }
        this.journals.unshift(contact)
    }
  }
})
   
