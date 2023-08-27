function solution(hp) {
    let answer = 0;
    
    const a = Math.floor( hp / 5 );
    const b = Math.floor( (hp - a*5) / 3 );
    const c = Math.floor(hp - (a*5 + b*3));
    
    answer = a + b + c;
    
    return answer;
}