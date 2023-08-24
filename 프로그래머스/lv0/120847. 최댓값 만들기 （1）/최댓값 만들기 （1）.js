function solution(numbers) {
    //배열에서 가장 큰 수 두개 구하기
        
    numbers.sort(function(a, b)  {
        return b - a;   
    });
    //화살표 함수를 이용해서 numbers.sort((a,b)=>b-a); 으로 축약이 가능하다! 
    
    return numbers[0]*numbers[1];

}

// arr.sort(function(a, b)  {
//   if(a > b) return 1;
//   if(a === b) return 0;
//   if(a < b) return -1;
// });
//sort 정렬 :  a > b이면 1, a == b이면 0, a < b이면 -1을 리턴하여, 주어진 배열을 오름차순으로 정렬함.

//arr.sort(function(a, b)  { return a - b; });
//두 숫자의 차가 양수값이냐, 음수값이냐를 이용하여 숫자를 오름차순으로 정렬하는 예제를 위와 같이 단순화 할 수도 있습니다.
