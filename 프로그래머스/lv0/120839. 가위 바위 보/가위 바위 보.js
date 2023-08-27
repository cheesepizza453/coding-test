// function solution(rsp) {
//     let answer = [];
    
//     for(let i = 0; i < rsp.length ; i++){
        
//     switch(rsp[i]){
            
//       case '2':
//             answer.push("0");
//       break;
            
//       case '0':
//             answer.push('5');
//       break;
//       case '5':
//             answer.push('2');
//       break;
            
//       default:
//       break;
            
//     }
//   }
//     return answer.join("").replace(",");
// }


function solution(rsp) {
    let answer = rsp.split('').map((el)=>{
    switch(el){
            
      case '2':
            return '0';
      break;
            
      case '0':
            return '5';
      break;
      case '5':
            return '2';
      break;
            
      default:
      break;
            
    }
 }).join('');
    return answer;
}