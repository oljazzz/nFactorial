/*Smallest divisor*/
function smallestDivisor(number){
  iter = function(acc){
  if(number <= acc){
    return number;
    }
  if(number % acc == 0){
    return acc;
    }
  return iter(acc + 1);
  };
 return iter(2);
 }
 
