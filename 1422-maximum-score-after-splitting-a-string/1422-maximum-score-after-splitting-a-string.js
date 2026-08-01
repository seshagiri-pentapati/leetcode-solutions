/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zerosLeft = 0;
    let onesRight = 0;
    let maxScore=0;
    for(let c of s){
        if(c === '1'){
            onesRight++;
        }
    }

    for(let i=0;i<s.length-1;i++){
        if(s[i]==='0'){
            zerosLeft++;
        }
        else{
            onesRight--;
        }

        maxScore = Math.max(maxScore, zerosLeft+onesRight);
    }
    return maxScore;
};