class MyMath {
  constructor(value) {
    this.value = value;
  }

  add(number) {
    this.value += number;
  }

  getCurrentValue() {
    return this.value;
  }
}

module.exports = MyMath
