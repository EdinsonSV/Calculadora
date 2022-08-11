const imprimirvalores= (valor)=>{
    document.containercalculadora.ans.value+=valor;
}
const resultado = ()=>{
    document.containercalculadora.ans.value=eval(document.containercalculadora.ans.value);
}
const borrarUno = ()=>{
    document.containercalculadora.ans.value=document.containercalculadora.ans.value.toString().slice(0,-1);
}