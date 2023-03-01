// Хранение отметок "не прочитано"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let weakSet = new WeakSet();
weakSet.add(messages[0]);
weakSet.add(messages[1]);

for (const object of messages) {
  let a = messages.indexOf(object);
  if (weakSet.has(object)) {
    delete messages[a];
  }
}

console.log(messages);
