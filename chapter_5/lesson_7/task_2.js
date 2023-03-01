function aclean(arr) {
   let map = new Map();
   for (let item of arr) {
     let key = item.toLowerCase().split("").sort().join("");
     map.set(key, item);
   }
   return Array.from(map.values());
 }
 
 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 
 console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
 