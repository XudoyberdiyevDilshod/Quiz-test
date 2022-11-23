var userName = prompt("Ismingizni kiriting:")
var test1 = prompt("Barcha <p> elementlarni qalin qilish uchun to'g'ri CSS sintaksisi qanday? \n a) p {font-weight:bold;} \n b) p {font-size:bold;} \n c) p {text-weight:bold;} \n d) p {font-size:bold;}")
var test2 = prompt("Qaysi atribut textarea kengligini belgilaydi? \n a) height \n b) width \n c) rows \n d) cols")
var test3 = prompt("Jadvallarda qatorlar yaratish uchun qanday teg ishlatiladi? \n a) td \n b) th \n c) tr \n d) colspan")
var test4 = prompt(" Doctype tegining maqsadi nima? \n a) .doc turi bilan hujjatlar shaklida biriktirish uchun \n b) HTML versiyasini ko'rsatish uchun \n c) css bilan bog'lash uchun \n d) js bilan bog'lash uchun")
var test5 = prompt("Qanday qilib ichki ro'yxatni to'g'ri yaratish kerak (bir ro'yxat boshqasiga joylashtirilganda)? \n a) <ul> tegining ichiga boshqa <ul> tegi qo'yiladi va uning ichiga <li> tegli qo'shiladi \n b) <ul> tegining ichiga <li> tegi joylashtiriladi, uning ichiga yana <ul> tegini yaratib va uning ichida <li> \n c) ul>li>ul \n d) <ul class='list'><li class='item'>")

console.log(userName);
console.log("Test1" + " " + "bergan javob:" + test1 + " " + "(To'g'ri javob: a)");
console.log("Test2" + " " + "bergan javob:" + test2 + " " + "(To'g'ri javob: d)");
console.log("Test3" + " " + "bergan javob:" + test3 + " " + "(To'g'ri javob: c)");
console.log("Test4" + " " + "bergan javob:" + test4 + " " + "(To'g'ri javob: b)");
console.log("Test5" + " " + "bergan javob:" + test5 + " " + "(To'g'ri javob: b)");