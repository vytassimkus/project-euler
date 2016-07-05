var prime = function(number) {    
	var primes = [];	
	for (var i = 2; i <= number; i++) {		
while (number%i === 0) {	
primes[primes.length] = i;
number/=i;
    }
  }  
   console.log(primes[primes.length - 1]);	
};

prime(600851475143);
console.log(primes);
