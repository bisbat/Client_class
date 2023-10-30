//destructuring

// const mail = {
//   sender: 'MG,IT',
//   recipent: 'Baitong',
//   title: 'Welcome to Krabi',
//   sentDate: new Date(Date.now())
// }

// let { recipent } = mail
// let { sentDate, title: header } = mail //เปลี่ยนชื่อจากtitleเป็นheader
// console.log(recipent)
// console.log(sentDate)
// console.log(header)

const mail = {
  sender: 'SIT, KMUTT',
  recipent: {
    firstname: 'Umaporn',
    lastname: 'Sup'
  },
  title: 'Welcome to KMUTT',
  sentDetail: {
    sentDate: new Date(Date.now()),
    host: {
      name: '@sit.kmutt'
    }
  }
}
let {
  recipent: { firstname, lastname }
} = mail
let {
  sentDetail: {
    host: { name }
  }
} = mail
console.log(firstname, lastname)
console.log(name)

