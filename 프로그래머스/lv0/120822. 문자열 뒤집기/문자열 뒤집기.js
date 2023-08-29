function solution(my_string) {
    
    return [...my_string].map( (v,i)=>{ return my_string[(my_string.length-1)-i]}).join('');
}


// var answer = [...my_string].reverse().join(""); 
//reverse라는 함수로 뒤집을 수 있다!!