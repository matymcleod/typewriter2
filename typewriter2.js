const sentence = "hello there from lighthouse labs \n";
let delay = 0;
for (let char of sentence) {
  delay += 75;
  setTimeout(() => {
    process.stdout.write(char)
  }, delay);
}