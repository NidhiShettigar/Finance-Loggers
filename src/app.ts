const anchor = document.querySelector('a')!; //can be written without ! - i.e html identifier
console.log(anchor);  
//console.log(anchor.href);  does not work without ! in const anchor line
if(anchor){
    console.log(anchor.href); 
}

