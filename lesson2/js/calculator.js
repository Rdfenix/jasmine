window.Calculator = {
  current: 0,

  add: function(num1){
    var sum = this.current;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
      this.current = sum;
      return this.current;
  }
};
