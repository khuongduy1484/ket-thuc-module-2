function isPrime(snt) {
    let ctx = true;
    if (snt < 2){
        ctx = false;
    } if (snt == 2){
        ctx = true;
    }if (snt % 2 == 0) {
        ctx = false;
    }for (let  i = 3;i<snt;i+=2) {
        if (snt % i == 0) {
            ctx = false;
            break;
        }
    }if (ctx == true) {
        document.write('true')
    }else {
        document.write('false');
    }
}
isPrime(17);