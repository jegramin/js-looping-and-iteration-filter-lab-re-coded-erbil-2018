// Code your solution in this file
function findMatching(arr, value){
  let newArr=[];
  return arr.filter(function(str){
      if(str.toUpperCase() === value.toUpperCase()){
        return str;
      }
  })
}

function fuzzyMatch(arr,val){
  return arr.filter(function(str){
    if(str[0]+str[1]===val){
      return str;
    }
  })
}

function matchName(){
  
}