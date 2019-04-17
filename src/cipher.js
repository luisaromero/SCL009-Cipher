window.cipher = {

  encode: (texto, desplazamiento) => {
    let result ='';
  for (let i=0 ; i < texto.length ; i=i+1 ){
let ascci = texto.charCodeAt(i)
if(ascci >= 65 && ascci <=  90) {
 result += String.fromCharCode ((ascci - 65 + parseInt(desplazamiento)) % 26 + 65)
 }if(ascci >= 97 && ascci <=  122) {
result += String.fromCharCode ((ascci - 97 + parseInt(desplazamiento)) % 26 + 97)
}if(ascci >= 32 && ascci <=  32) {
result += String.fromCharCode ((ascci - 32 + desplazamiento) % 1 + 32)
}if(ascci ==241) {
  result += String.fromCharCode ((ascci - 241 + parseInt(desplazamiento)) % 1 + 241)
}if (ascci ==209) {
    result += String.fromCharCode ((ascci - 209 + parseInt(desplazamiento)) % 1 + 209) 
} if(ascci >= 48 && ascci <=  57) {
  result += String.fromCharCode(((ascci - 48 + parseInt(desplazamiento)+20) % 10) + 48)
}
} return result
},
decode: (texto, desplazamiento) => {
  let result='';
for (let i=0 ; i < texto.length ; i=i+1 ){
let ascci = texto.charCodeAt(i)
if(ascci >= 65 && ascci <=  90) {
result += String.fromCharCode (((ascci - 65 - parseInt(desplazamiento)+52) % 26) + 65)
}if(ascci >= 97 && ascci <=  122) {
result += String.fromCharCode (((ascci - 97 - parseInt(desplazamiento)+52) % 26 )+ 97)
}if (ascci >= 32 && ascci <=  32) {
result += String.fromCharCode ((ascci - 32 - desplazamiento) % 1 + 32)
}if(ascci ==241) {
  result += String.fromCharCode ((ascci - 241 - parseInt(desplazamiento)) % 1 + 241)
}if(ascci ==209) {
    result += String.fromCharCode ((ascci - 209 - parseInt(desplazamiento)) % 1 + 209)
} if(ascci >= 48 && ascci <=  57) {
    result += String.fromCharCode(((ascci - 48 - parseInt(desplazamiento)+1000) % 10) + 48)
    
}
}
 return result
}
}
