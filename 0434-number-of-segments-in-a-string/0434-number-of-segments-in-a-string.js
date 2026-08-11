/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let newStart = 0;
    let newEnd = s.length;

    while(s[newStart] === ' ' || s[newEnd - 1] === ' ') {
        if(s[newStart] === ' ')
            newStart++;

        if(s[newEnd - 1] === ' ')
            newEnd--;
    }

    let segmentsCounter = Number(newStart < newEnd);
    
    for(let i = newStart + 1; i < newEnd; i++)
        if(s[i] === ' ' && s[i - 1] !== ' ')
            segmentsCounter++;

    return segmentsCounter;
};