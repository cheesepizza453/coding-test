function solution(my_string) {
    var answer = 0;
    const numberString = my_string.match(/\d/g);
    
    answer = numberString.reduce((total, number) => total + parseInt(number), 0);
    
    return answer;
}