import { defineStore } from 'pinia';

export const useJournalStore = defineStore ('journal', {
  state: () => ({
    journals : [
      {
        name: 'Anthony',
        hour: '11h11',
        date: '04/12/2022'
      },
      {
        name: 'Maxence',
        hour: '12h12',
        date: '30/08/2021'
    
      },
      {
        name: '0222222222',
        hour: '02h22',
        date: '07/10/2002'
      }
    ]
  }),
  actions: {
    call(name){
        const now = new Date()
        const contact = {
            name: name,
            hour: `${now.getHours()}h${now.getUTCMinutes()} `,
            date: `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth()+1).toString().padStart(2, "0")}/${now.getUTCFullYear()}`
        }
        this.journals.unshift(contact)
    }
  }
})
   
