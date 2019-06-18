/**
The product of the first two digits is 24.
The fourth digit is one-third of the sec digit.
The sum of the last two digits are the same as the sum of the first and third digits.
The sum of all the digits is 26.
Not all the digits are uniqu
 */
function getTheCode() {
    //hide the button 
    document.getElementById("getCode").style.display="none";

    var holder = document.getElementById("retreivedCode");
    var possible  = new Array();

    // The fourth digit is one-third of the sec digit.
    for(var sec=0; sec<=9; sec++){
        for(var fourth=0; fourth<=9; fourth++){
            if(fourth==sec/3 && fourth%(sec/3)==0){
                // The product of the first two digits is 24.
                for(var first=0; first<=9; first++){
                    if(first*sec==24){
                        /*
                        The sum of the last two digits are the same as the sum of the first and third digits.
                        The sum of all the digits is 26.
                        first+third == fourth+fifth
                        first+sec+third+fourth+fitfth==26
                        2*(first+third)+sec==26
                        third=(26-sec)/2 - first
                        */
                    if((26-sec)%2 == 0 && ((26-sec)/2 >= first)){
                        var third = (26-sec)/2 - first;
                        var fifth = first+third-fourth; 

                        // check - Not all the digits are unique
                        var uniqueSet = new Set([first,sec,third,fourth,fifth]);
                        if(uniqueSet.size<5){
                            possible.push([first,sec,third,fourth,fifth]);
                            console.log(first+" "+sec+" "+third+" "+ fourth+" "+fifth);
                        }
                    }
                    }
                }
                
                
            }
        }
    }
    if(possible.length==1){
        holder.innerHTML=possible[0].join("");
    }
    else {
        holder.innerHTML="Code could not be retreived";
    }
}