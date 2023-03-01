function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name);

// undefined
// В качестве вызова this в функции ссылка будет на глобальный обьект (либо window либо undefined (use strict)). В связи с этим при вызове this будет получаться undefined
