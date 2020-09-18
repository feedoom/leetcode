var reverse = function(x) {
  let anwser = 0;
  while (x != 0) {
    anwser = anwser * 10 + (x % 10);
    x = Number.parseInt(x / 10);
  }
  if (Math.abs(anwser) >= Math.pow(2, 31)) return 0;
  return anwser;
};
