var selectedRow= null;
function onFormsubmit(){

}

//Retrive data 

function readFormData(){
    var fromData ={};
    fromData["Product Code"] =document.getElementById("Product Code").value;
    fromData["Product"] =document.getElementById("Product").value;
    fromData["Quality"] =document.getElementById("Quality").value;
    fromData["Product Price"] =document.getElementById("Product Price").value;
    return fromData;
}

//Insert Data
function insertNewData(){
    var table=document.getElementById("StoreList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    }