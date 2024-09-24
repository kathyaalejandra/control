let contrasena = prompt("Ingrese una contraseña:");

let tieneMayuscula = false;
for (let i = 0; i < contrasena.length; i++) {
  if (contrasena[i] >= 'A' && contrasena[i] <= 'Z') {
    tieneMayuscula = true;
    break; // Deja de buscar si encontróhola una mayúscula
  }
}
let tieneNumero = false;
for (let i = 0; i < contrasena.length; i++){
    if (contrasena[i] >= '0' && contrasena[i] <= '9'){
        tieneNumero = true;
        break; //deja de buscar si encontró un número
    }
}


if (contrasena.length >= 8) {
    if (tieneMayuscula) {
        if (tieneNumero){
            console.log(`Felicidades, tu contraseña es válida! Tu contraseña es ${contrasena}`);
        }else {
            console.log("La contraseña no tiene un número");
        }
      } else {
        console.log("La contraseña no tiene mayúsculas.");
      }
}else {
    console.log(`La contraseña debe tener al menos 8 caracteres, la que pusiste tiene ${contrasena.length}`);
}      



//if (contrasena.length >= 8) {
    //if (tieneMayuscula) {
       // if (tieneNumero){
        //if (tienecaracterespecial){
          //  console.log(`Felicidades, tu contraseña es válida! Tu contraseña es ${contrasena}`);
        //}
        //else {
          //  console.log("A tu comtraseña le falta un caracter especial como:  !@#$%^&*()_+{}[]:;<>,.?~\-");
        //}
        //}else {
            //console.log("La contraseña no tiene un número");
        //}
      //} else {
        //console.log("La contraseña no tiene mayúsculas.");
      //}
//}else {
  //  console.log(`La contraseña debe tener al menos 8 caracteres, la que pusiste tiene ${contrasena.length}`);
//}    