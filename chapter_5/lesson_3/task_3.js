function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength);
    str = str.replace(str[str.length - 1], "...");
    return console.log(str);
  } else return console.log(str);
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

truncate("Всем привет!", 20);
