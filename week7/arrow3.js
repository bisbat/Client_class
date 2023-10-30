const keywords = ['desturcturing', 'spread', 'rest', 'prototypes', 'function']
const mails = [
  {
    id: 123445,
    sender: {
      firstname: 'Baitong',
      lastname: 'Saekow'
    },
    subject: 'Welcome to HELL'
  },
  {
    id: 123642,
    sender: {
      firstname: 'Tom',
      lastname: 'Holland'
    },
    subject: 'Welcome to HELL'
  }
]
//suggest to create array name plural noun and ตัวแปรที่นำมารับชั่วคราวในarrow function is single noun
keywords.forEach((keyword) => console.log(keyword))
mails.forEach((mail) => console.log(mail))

//1.string contain the first charactor of each keyword
//'dsrpf'
let firstchar = ''
keywords.forEach((keyword) => (firstchar += keyword.charAt(0)))
console.log(firstchar)

//2.all mail ids if mails array
const mailIds = []
mails.forEach((mail) => mailIds.push(mail.id))

//3.return array that contain keyword which include 'es' (case insensitive)ตัวเล็กตัวใหญ่เอาหมด
const esKeyword = keywords.filter((keyword) =>
  keyword.toLowerCase().includes('es')
)
console.log(esKeyword)

//map and filter vs forEach the differance is map and filter create new array but for each not you have to create it by yourself

//4.array that contains all senders's firstname
const mailSender = mails.map((mail) => mail.sender.firstname)
console.log(mailSender)

//5.array that contains all mailIds that start with 'logId-'
const logIdMail = mails.map((mail) => 'logId-' + mail.id)
console.log(logIdMail)
