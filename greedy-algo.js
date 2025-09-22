// https://leetcode.com/problems/assign-cookies//

/**
 * @param {number[]} Student
 * @param {number[]} Cookie
 * @return {number}
 */
var findContentChildren = function(Student, Cookie) {
     let n = Student.length;
       let m = Cookie.length;
       Student = Student.sort((a,b)=> a-b);
       Cookie = Cookie.sort((a,b)=> a-b);
       let l = 0;
       let r = 0;
       while(l<n && r<m) {
        if(Cookie[r] >= Student[l]) {
            l++
        }
        r++

       }
       return l;
};


//https://leetcode.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
      let five = 0; 
        let ten = 0;   
        for (let bill of bills) {
            if (bill === 5) {
                five++;  
            }
            else if (bill === 10) {
                if (five > 0) {
                    five--; 
                    ten++;   
                } 
                else {
                    return false;  
                }
            } 
            else {
                if (five > 0 && ten > 0) {
                    five--; 
                    ten--;   
                } 
                else if (five >= 3) {
                    five -= 3;  
                } 
                else {
                    return false;  
                }
            }
        }
        
        return true;  
    }
    
