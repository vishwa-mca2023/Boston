import {boston} from"./boston.js"
var newBoston=boston.data
var ele="";
for(let i=0;i<newBoston.length;i++){
    for(let j=i+1;j<newBoston.length;j++){
        if(newBoston[i][11]<newBoston[j][11]){
            let temp=newBoston[i]; 
            newBoston[i]=newBoston[j]
            newBoston[j]=temp;
        }   
    }
}

let output=newBoston.slice(0,5);
for(let i=0;i<output.length;i++){
ele=ele+"<h1>"+output[i][8]+"</h1>"+"<h1>"+output[i][11]+"</h1>"
console.log(output[i][8],output[i][11])
}
document.getElementById("app").innerHTML=ele;