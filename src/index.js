module.exports = function getZerosCount(number, base) {
  //your implementation

  let b = base;
   
  //factorize base number  
  function primeFactorList(x) {
    if (x < 1)
      throw "Argument error";
    var result = [];
    while (x != 1) {
      var factor = smallestFactor(x);
      result.push(factor);
      x /= factor;
    }
    return result;
  }
  
  
  //smallest factor of the number
  function smallestFactor(x) {
    if (x < 2)
      throw "Argument error";
    if (x % 2 == 0)
      return 2;
    var end = Math.floor(Math.sqrt(b));
    for (var i = 3; i <= end; i += 2) {
      if (x % i == 0)
        return i;
    }
    return x;
  }
  
  
  let baseFactors = primeFactorList(b);
    
  console.log(baseFactors);
    
  //creat array of factors with their powers
  function toFactorPowerList(factors) {
    var result = [];
    var prevFactor = factors[0];
    var count = 1;
    for (var i = 1; i < factors.length; i++) {
      if (factors[i] == prevFactor) {
        count++;
      } else {
        result.push([prevFactor, count]);
        prevFactor = factors[i];
        count = 1;
      }
    }
    result.push([prevFactor, count]);
    return result;
  }
  
  
  let baseFactorPower = toFactorPowerList(baseFactors);
  
   
  //factorization number to factors of base    
  let pureFactor=[]; //factors without powers and duplicates
  
  for (i=0; i < baseFactorPower.length; i++) {
      pureFactor[i] = baseFactorPower[i][0]
  } ;
  
  let powerOfNumber = [];
  
  for (i=0; i < pureFactor.length; i++) {
      powerOfNumber[i] = 0;
  } ;
  
  //calculate maximum power of factor of number n
  function numberFactorPower(k) {
    for (i=0; i < pureFactor.length; i++) {
      
      let n = k;
      while (n >= pureFactor[i]) {
          
        powerOfNumber[i]= powerOfNumber[i] + Math.trunc(n/pureFactor[i]);
        
        n = Math.trunc(n/pureFactor[i]);
      }
    }
    return powerOfNumber;
  };
  
  let numberPower = numberFactorPower(number);
  
  //devide to each other powers of number and base 
  let devide = [];
  
  for (i=0; i < numberPower.length; i++) {
      devide[i] = Math.floor(numberPower[i]/baseFactorPower[i][1]);
  } ;
  
  
  //find the smallest value among the devide array
  Array.min = function(array){
      return Math.min.apply(Math, array);
  };
  var minimum = Array.min(devide);
  
  return minimum;
 
}