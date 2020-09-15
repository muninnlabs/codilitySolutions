const convertToRoman = (arabic) => {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letters = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  let roman = '';
  let N = arabic;

  if (arabic < 1) {
    return '';
  }
  if (arabic > 3999) {
    return 'N';
  }

  for (let i = 0; i < numbers.length; i++) {
    while (N >= numbers[i]) {
      roman += letters[i];
      N -= numbers[i];
    }
  }
  console.log(roman);
  return roman;
};

console.log(convertToRoman('1325'));
