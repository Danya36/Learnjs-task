
for (let i = 0; i < 5; i++) console.log(i);



for (let i = 0; i < 5; ++i) console.log(i);

/*В двух ситуациях выведется 0, 1, 2, 3, 4, т.к. изначально i = 0, и далее i увеличивается на 1 и сравнивается с условием. Так что, в данном примере нет никакой разницы между i++ и ++i.*/
