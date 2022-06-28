var customerForm = document.getElementById("customerForm");
var stuNum = document.getElementById("stuNum");


function afterSubmit(e){
    e.preventDefault();

    // var stu_num = {
    //     number: stuNum.value,
    // };
    // console.log(JSON.stringify(stu_num));
    const url = "https://script.google.com/macros/s/AKfycbw8OJqtniMXCCO-b1sBDBSGVKGe6HYOnwJNU0FuFTBOE82q8oditu25aggFvUZHiZklIQ/exec" + '?number=' + stuNum.value;
    fetch(url)
    .then(d => d.json())
    .then(d => {
        console.log(d);
        document.getElementById("res").textContent = d.stuname;
        document.getElementById("res1").textContent = d.semester1;
        document.getElementById("res2").textContent = d.semester2;
        document.getElementById("res3").textContent = d.semester3;
        document.getElementById("res4").textContent = d.semester4;
        document.getElementById("res5").textContent = d.semester5;
        document.getElementById("res6").textContent = d.semester6;
        customerForm.reset();
    });
}

document.getElementById("submitButton").addEventListener("click", afterSubmit);