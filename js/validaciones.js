const $btnEnviar = document.getElementById("enviar");
const $form = document.formulario;




function validadNombre(nombre) {
    if (nombre.toString().trim().length === 0) { //Si escribo un espacio y luego nada no me reconoce cómo espacio en blanco porque el length no es cero. Por eso aplicamos el trim(). El problema ahora es que si escribe un número y le aplicamos el trim() dará error. Por eso convertimos la entrada en String, luego el trim() y luego el .length  y validamos que no esté vacío
        return "El campo nombre no puede estar vacío";
    } else if (nombre.length >= 20) {
        return "El campo nombre no puede ser muy largo";
    } else {
        nombre = nombre.toString().trim(); //El .trim() para que de esta manera se le quiten los espacios y valide si hay letras o nó sin importar los espacios
        if(!/^[A-z]+$/i.test(nombre)) {
            return "El campo nombre solo puede contener letras";
        }
    }
    return "";
}

function validarEdad(edad) {//1000
    if (edad.toString().trim().length === 0) { //Si escribo un espacio y luego nada no me reconoce cómo espacio en blanco porque el length no es cero. Por eso aplicamos el trim(). El problema ahora es que si escribe un número y le aplicamos el trim() dará error. Por eso convertimos la entrada en String, luego el trim() y luego el .length  y validamos que no esté vacío
        return "El campo edad no puede estar vacío";
    } else if(!/[0-9]+$/i.test(edad)) {
        return "El campo edad solo puede contener números";
    } else {   
        if (edad.toString().trim().length >= 4) {
            return "El campo edad no puede ser de 4 dígitos";
        } else {
            if(edad <= 0 || edad >= 150) {
                return "Ingrese una edad válida";
            } else {
                return "";
            }
        }
    }
} 


function validarContrasena(psw) {
    if (psw.toString().trim().length === 0) { //Si escribo un espacio y luego nada no me reconoce cómo espacio en blanco porque el length no es cero. Por eso aplicamos el trim(). El problema ahora es que si escribe un número y le aplicamos el trim() dará error. Por eso convertimos la entrada en String, luego el trim() y luego el .length  y validamos que no esté vacío
        return "El campo contraseña no puede estar vacío";
    } else if (psw.length <= 9) {
        return "El campo contraseña no puede ser menor a 8 caracteres";
    } else if (psw.length >= 20) {
        return "El campo contraseña no puede ser muy largo";
    } else {
        return "";
    }
}



const validarFormulario = (e) => {
    const nombre = $form.nombre.value;
    const edad = $form.edad.value;
    const psw = $form.psw.value;

    const errorNombre = validadNombre(nombre);
    const errorEdad = validarEdad(edad);
    const errorContrasena = validarContrasena(psw);

    e.preventDefault();

    //Cómo no puedo retornar una variable por cada valor ya que solo se permite retornar 
    //una sola variable, retorno un arreglo con cada error
   //manejarErrores([errorNombre,errorEdad,errorContrasena]);//órden --> asociación con objetos
   /*
    EL PROBLEMA CON ESTO ES QUE NOSOTROS LE DAMOS ESA INTEPRETACIÓN. CON OBJETOS
    LA INTEPRETACIÓN SE LA DÁ EL PROGRAMA
   */


  const errores = {
    nombre: errorNombre,
    edad : errorEdad,
    psw: errorContrasena
  }

 // console.log(errores);
  manejarErrores(errores);
    
}



function manejarErrores(errores) {//Recibo el error de cada posición y lo despacho en variables distintas
    ///const errorNombre = errores[0];
    ///const errorEdad = errores[1];//El problema con esto es que tiene que ser en ese órden. Necesitamos alguna manera que haya una  asociación sin necesidad de recordar la posición del arreglo. Si llegan a cambiar algo se comienza a complicar
    ///const errorPsw = errores[2];

    //const errorNombre = errores.nombre; //Se comporta cómo un diccionario
    //const errorEdad = errores.edad;
    //const errorPsw = errores.psw;

    //Hacerlo dinámicamente, más no estático
    const keys = Object.keys(errores); //Devuelve un array de las llaves

    /*
    keys.forEach((key)=>{ //Mostrar los mensajes de error en los campos
        const error = errores[key];
        if(error) {//form key coincide con en name del formulario. Si no fuese así no funcionaría.
            $form[key].classList.add("error");
            $form[key].placeholder = errores[key] + ".";
            $form[key].style.color = "red";

            $form[key].addEventListener("click", () => {
                $form[key].classList.remove("error");
                $form[key].placeholder = " ";
                $form[key].style.color = "initial";
            });
        }
    })*/

    const $errores = document.getElementById("errores");

    keys.forEach((key)=>{ //Mostrar los mensajes de error en un contenedor
        const error = errores[key];
        if(error) {//form key coincide con en name del formulario. Si no fuese así no funcionaría.
            $form[key].classList.add("error");
            $error = document.createElement("p");
            $error.innerText = error;
            $error.style.color = "red";
            $errores.appendChild($error);

            $form[key].addEventListener("click", () => {
                $form[key].classList.remove("error");
                $errores.innerHTML = "";
            });
        }
    })

    /*
     *CADA VEZ QUE AGREGO UN ERROR AGREGO UN IF. EL CÓDIGO SE HACE MUY LARGO 
     * 
     */
    /*
    if(errorNombre) {//Las utilizo para estilizar los formularios con los errores
        $form.nombre.classList.add("error");
        $form.nombre.placeholder = errorNombre + ".";
        $form.nombre.style.color = "red";

        $form.nombre.addEventListener("click", () => {
            $form.nombre.classList.remove("error");
            $form.nombre.placeholder = " ";
            $form.nombre.style.color = "initial";
        });
    }

    if(errorEdad) {//Si erroreEdad tiene caracteres
        $form.edad.classList.add("error");
        $form.edad.placeholder = errorEdad + ".";
        $form.edad.style.color = "red";

        $form.edad.addEventListener("click", () => {
            $form.edad.classList.remove("error");
            $form.edad.placeholder = " ";
            $form.edad.style.color = "initial";
        });
    }

    if(errorPsw) {
        $form.psw.classList.add("error");
        $form.psw.placeholder = errorPsw + ".";
        $form.psw.style.color = "red";

        $form.psw.addEventListener("click", () => {
            $form.psw.classList.remove("error");
            $form.psw.placeholder = " ";
            $form.psw.style.color = "initial";
        });
    }*/
}


$btnEnviar.addEventListener("click", validarFormulario);


//función de callback. No le decimos nosotros cuándo llamamos a la función, lo decide el navegador
//cuándo suceda algo y los parámetros también los decide el navegador

//el foreach tiene que terminar a diferencia del for dónde puedes colocar un break

//si usan un foreach es porque quieren recorrer todo el array

//Object.keys(objeto)
//Object.values(objeto)

//$form.key === $form['key'] --> NO ==> $form[key] --> SÍ