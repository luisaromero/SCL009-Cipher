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
}if(ascci >= 32 && ascci <=  32) {
result += String.fromCharCode ((ascci - 32 - desplazamiento) % 1 + 32)
}
}
 return result
}
}
