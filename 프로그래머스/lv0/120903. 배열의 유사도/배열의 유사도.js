function solution(s1, s2) {
    const aaa = [];
    for(let i of s1){
        for(let j of s2){
            if(i === j){
                aaa.push(i);
            }
        }
    }return aaa.length;

}