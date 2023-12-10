const str = "Hello 1world!";

const solve = (str) => {
  const arr = str.split("");
  for (let i = 0; i <= Math.ceil(arr.length / 2) - 1; i++) {
    if (i === arr.length - i - 1) {
      continue;
    }

    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  console.log(arr.join(""));
};

solve(str);
