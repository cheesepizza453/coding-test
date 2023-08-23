function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);
}


//filter 쓸 때 매개변수 index로 풀었어도 됐다 ㅠㅠ index를 활용할 줄 몰랐다
// function solution(numbers, num1, num2) {
//     return numbers.filter((v, i) => i >= num1 && i <= num2)
// }