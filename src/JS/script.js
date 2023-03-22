function validate() {
    let flag1 = 0;
    let flag2 = 0;
    let flag3 = 0;
    //get the value
    let pswd = document.getElementById("password").value;
    pswd = String(pswd);
    if (pswd.length < 8 || pswd.length > 15) {
        flag1 = 0;
    } else {
        for (let j = 0; j < pswd.length; j++) {
            let i = pswd.charAt(j);
            //check lower case
            if (i >= 'a' && i <= 'z') {
                flag1 = 1;
            }
             //check upper case
            if (i >= 'A' && i <= 'Z') {
                flag2 = 1;
            }
            //check special charcter
            if ((i == '@') || (i == '#') || (i == '$') || (i == '!')) {
                flag3 = 1;
            }
        }
    }
    if (flag1 && flag2 && flag3) {
        document.getElementById("msg").innerHTML = "correct";
    }
    else {
        document.getElementById("msg").innerHTML = " not correct";
    }
}

