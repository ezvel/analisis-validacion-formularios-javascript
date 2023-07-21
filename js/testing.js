function probarValidarNombre() {
    //Camino triste
    console.assert(
        validadNombre("") === "El campo nombre no puede estar vacío",
        "La función validarNombre() no validó que se dejó el campo en blanco"
    );
    console.assert(
        validadNombre("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "El campo nombre no puede ser muy largo",
        "La función validarNombre() permitió que se ingresará un campo muy largo"
    );
    console.assert(
        validadNombre(2) === "El campo nombre solo puede contener letras",
        "La función validarNombre() permitió que se ingresará números"
    );
    //Camino feliz
    console.assert(
        validadNombre("Nombre") === "", "La función validarNombre() falló con un nombre correcto" 
    );  
}

function probarValidarEdad() {
    //Camino triste
    console.assert(
        validarEdad("") ===  "El campo edad no puede estar vacío",
        "La función validarEdad() no validó que se dejó el campo en blanco"
    );
    console.assert(
        validarEdad(1000) === "El campo edad no puede ser de 4 dígitos",
        "La función validarEdad() no validó que se ingresó una edad de 4 dígitos"
    );
    console.assert(
        validarEdad("No soy un número") === "El campo edad solo puede contener números",
        "La función validarEdad() permitió que se ingresara letras"
    );
    console.assert(
        validarEdad(-2) === "Ingrese una edad válida",
        "La función validarEdad() permitió que se ingresaran edades fuera del rango contemplado por el programa"
    );
    //Camino feliz
    console.assert(
        validarEdad(20) === "",
        "La función validarEdad() falló al ingresar los datos correctos"
    );
}   

function probarValidarContrasena() {
    //Camino triste
    console.assert(
        validarContrasena("") === "El campo contraseña no puede estar vacío",
        "La función validarContrasena() permitió que se ingresara un campo vacío"
    );
    console.assert(
        validarContrasena("Hlas") === "El campo contraseña no puede ser menor a 8 caracteres",
        "La función validarContrasena() permitió que se ingresara un campo corto"
    );
    console.assert(
        validarContrasena("Hlasssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "El campo contraseña no puede ser muy largo",
        "La función validarContrasena() permitió que se ingresara un campo largo"
    );
    //Camino feliz
    console.assert(
        validarContrasena("sdskfj284js") === "",
        "La función valdarContrasena() no funcionó con el dato correcto"
    );
}   

//probarValidarNombre();
//probarValidarEdad();
//probarValidarContrasena();