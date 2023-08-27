function solution(my_string) {
    let answer = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    answer = my_string.split('').filter(char => !vowels.includes(char)).join('');
    
    return answer;
}