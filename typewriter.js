const sentence = "hello there from lighthouse labs";
let delayer = 0;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write (char) 
}, delayer)
delayer += 50
}

setTimeout(() => {
  process.stdout.write("\n");
}, delayer);



 

//setTimeout(() => {
  //for (const char of sentence) {
  //process.stdout.write (char)
//}
//}, 1000) 