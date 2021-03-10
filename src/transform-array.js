const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
    if (!Array.isArray(arr)) {
        throw new Error();
      }
    
    let copy = arr.slice();
    
    for(let index=0; index<copy.length; index++){   
       
    if(copy[index] === `--discard-next`){
        
            if((typeof(copy[index+1])=='undefined' || copy.length == 1)){
                copy.splice(index, 1);
                index--;
            }
    
           else if((copy[index+2] == '--double-prev') || (copy[index+2] == '--discard-prev')){         
              copy.splice(index, 3)
                index--;
            }
            
            else if((typeof(copy[index+1]))!='undefined'){
            copy.splice(index, 2);
            index--;
            } 
            
         }
     
    if(copy[index] === `--double-next`){
        if(((typeof(copy[index+1]))=='undefined') || (copy.length == 1) ){
                copy.splice(index, 1);
                index--;
            }
            
            else if(typeof(copy[index+1])!='undefined'){
                copy.splice(index, 1, copy[index+1]);
                index--;    
            }
            
        }
    
    if(copy[index] === `--discard-prev`){
            
            if(index == 0){
            copy.splice(index, 1);  
            index--;
            }
            
            if(index>0){
            copy.splice(index-1, 2); 
            index--;  
            } 
        }
    
    if(copy[index] === `--double-prev`){
            
            if(index == 0){
            copy.splice(index, 1); 
            index--;        
             }
    
            if(index>0){
            copy.splice(index, 1, copy[index-1]);
            index--;   
        }
      
    }
}
    
    return copy;  
};

