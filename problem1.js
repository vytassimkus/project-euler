function problem1 () {
var sum = 0;

for (var i = 1; i <= 1000; i++){

if (i%3 === 0 || i%5 === 0)
{
sum+=i;
}
return sum;
}
}
console.log("The multiples between 3 and 5 of 1000 is " + sum);
