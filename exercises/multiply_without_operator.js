function multiplicar(a, b) {
  if (b === 0) {
    return 0;
  } else if (b > 0) {
    return a + multiplicar(a, b - 1);
  } else {
    return -multiplicar(a, -b);
  }
}

console.log(multiplicar(4, 5));
