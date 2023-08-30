function solution(num_list) {
    var answer = [];
    answer = [0,0];
    
    for ( intNum of num_list){
        if( intNum % 2 === 0 ){
            answer[0] += 1;
          
        }else if(intNum % 2 === 1 ){
            answer[1] += 1;
        }
    }
    return answer;
}