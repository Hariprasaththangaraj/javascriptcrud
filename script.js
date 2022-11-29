function onFormsubmit(){
    var datafromform =  getData();
    console.log(datafromform);
    alert("hellow");
}

//Get data from the form
function getData(){
    var name1 = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var dataArray = [name1, age, phone];
    return dataArray;
}