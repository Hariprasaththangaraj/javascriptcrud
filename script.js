 var selectedRow= null;
// function onFormsubmit(e){

//     event.preventDefault();
//     var fromData = readFormData();
//     if(selectedRow === null){
//         insertNewRecord(data);
//     }
//         else{

//         }
// }

// //Retrive data 
// function readFormData(){
//     var fromData ={};
//     fromData["Product Code"] =document.getElementById("Product Code").value;
//     fromData["Product"] =document.getElementById("Product").value;
//     fromData["Quality"] =document.getElementById("Quality").value;
//     fromData["Product Price"] =document.getElementById("Product Price").value;
//     return fromData;
// }

// //Insert Data
// function insertNewRecord(data){
//     var table=document.getElementById("StoreList").getElementsByTagName("tbody")[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML= data.productcode;
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML= data.product;
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML= data.Quality;
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML= data.productprice;
//     var cell5 = newRow.insertCell(4);
//     cell5.innerHTML = "<button>Edit</button> <button>Delete</button>"
//     }

function onFormSubmit(){
   var getFormData = readDataFromForm();
   //To see we are getting value from the function
   console.log(getFormData);
}

function readDataFromForm(){
    //To fetch the Values
    var ProductCode=document.getElementById("ProductCode").value;
    var Product=document.getElementById("Product").value;
    var quality=document.getElementById("Quality").value;
    var Productprice=document.getElementById("ProductPrice").value;

    // To store the value in a Single variable we need to create a array\
    var arraydata = [ProductCode, Product, quality, Productprice];

    //Then return the array
    return arraydata;
}