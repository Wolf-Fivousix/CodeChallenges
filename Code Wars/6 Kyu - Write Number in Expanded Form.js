// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let number = num;
  let multiplier = 1;
  let expanded = [];
  while (number > 0) {
      const value = number % 10;
      if (value > 0) expanded.unshift(value * multiplier);
      number = Math.floor(number / 10);
      multiplier *= 10;
  }
  
  return expanded.join(" + ");
}