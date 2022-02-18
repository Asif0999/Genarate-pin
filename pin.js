function creatPin(params) {
    const pin = Math.round(Math.random() * 10000);
    const convert = pin + '';
    if (convert.length == 4) {
        return pin;
        // ai khane recursive system use kora hoise
    } else {
        return creatPin();
    }
}


function getPin(params) {
    const display = document.getElementById('genarate-input');
    display.value = creatPin();


};
// adding event babul . kono kiso te click krlei kaj krbe .babul parent er modde lagano hoy taile child er modde click krle kaj kore
document.getElementById('type-num').addEventListener('click',
    function (event) {
        const show = event.target.innerText;
        const callDisplay = document.getElementById('input-cal');
        // number kina aita check korar jonno isNaN() diye check krbo
        if (isNaN(show)) {
            // clear krte hole aita set krbo
            if (show == 'C') {
                callDisplay.value = '';
            }
        }
        else {
            const insideCallDisplay = callDisplay.value;
            const previousDisplay = insideCallDisplay + show;
            callDisplay.value = previousDisplay;
        }

    });
// submit button clicked 
document.getElementById('submit-btn').addEventListener('click',
    function () {
        const display = document.getElementById('genarate-input');
        const callDisplay = document.getElementById('input-cal');
        if (display.value != callDisplay.value) {
            alert('input valid number')
            callDisplay.value = '';
        }
        else {
            alert('Your pin was matched')
        }
    })