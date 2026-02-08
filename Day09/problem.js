// parameters and return
// parameters - wo chez jo app function ko daita hain (Raw material)
// return - wo chez jo function apko wapis daita hai (Finished product)


// calculater using functions
function calculate(v1 , v2 , OP){
 if(v1 == 0 || v2== 0) return "zero not allowed";
 if (v1 < 0 || v2 <0) return "only greater values then zero allowed";
  
  switch (OP) {
    case '*':
      return v1 * v2
      break;
    case "+":
      return v1 + v2
      break;
    case "-":
      return v1 - v2
      break;
    case "/":
      return v1 / v2;
      break;
    default:
      return "no Operation Available"
  }
  
  
}

const result = calculate(5,2,"%");

console.log(result);

