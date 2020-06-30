// homework:
// check ip-addresses
// 4 numbers separated by . and each number should be between 0-255
// 127.123.0.1 -> valid
// 500.555.44.1 -> not valid

window.onload = function(){

    let inpIp = document.querySelector('#inpIp');
    let btnIp = document.querySelector('#btnIp');

    // inpIp.value = '127.123.0.1';
    // inpIp.value = '500.555.44.1';

    let regexIp = new RegExp(/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/);

    // for each number of the ip-address
    // 25[0-5] -> matches 250 - 255
    // | -> or
    // 2[0-4][0-9] -> matches 200 - 249
    // | -> or
    // 1[0-9][0-9] -> matches 100 - 199
    // | -> or
    // [1-9][0-9] -> matches 10 - 99
    // | -> or
    // [0-9] -> matches 0 - 9
    // \. -> .

    btnIp.addEventListener('click',function(){
        if (regexIp.test(inpIp.value)) {
            inpIp.classList.remove('invalid');
            inpIp.classList.add('valid');
        } else {
            inpIp.classList.remove('valid');
            inpIp.classList.add('invalid');
        }
    })

}	

