let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log(this.step);
  },
  down() {
    this.step--;
    console.log(this.step);
  },
  showStep: function () {
    console.log(this.step);
  },
};
ladder.up(); // 1
ladder.up(); // 2
ladder.down(); // 1
ladder.showStep(); // 1
ladder.down(); // 0
ladder.showStep(); // 0
