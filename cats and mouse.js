function catAndMouse(x, y, z) {
    
    let psA = 0;
    let psB = 90;
  
    if (x > z){
      psA = x - z;
    }
    else {
      psA = z - x;
         }
    
    if (y > z){
      psB = y - z;
    }
    else {
      psB = z - y;
         }
    if (psA > psB){
      return ("Cat B")
    }
    else if (psA < psB){
      return ("Cat A")
    }
    else if (psA === psB){
      return ("Mouse C")
    }
  }
  
    let result = catAndMouse(1, 2, 3);
    console.log(result)