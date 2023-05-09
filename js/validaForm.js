//funcion que valida un formulario
$(function(){
    $("#mi-formulario").validate({

        rules:{
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            fono:{
                required:true
            },
            pass:{
                required:true
            },
            fecha:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:pass
            },
        },//rules
        messages:{
            nom:{
                required:'Ingrese nombre de usuario',
                minlength:'Caracteres insuficientes (3)'
            },
            correo:{
                required:'Ingrese correo electrónico',
                email:'Formato de correo no válido'
            },
            fono:{
                required:'Ingrese número de teléfono',
                minlength:'Digitos insuficientes (9)'
            },
            fecha:{
                required:'Ingrese una fecha',
                min:'Seleccione una fecha válida'
            },
            pass:{
                required: 'Ingrese una contraseña',
                minlength: 'Caracteres insuficientes(8)'
            },
            pass2:{
                required:'Reingrese contraseña',
                minlength: 'Caracteres insuficientes(8)',
                equalTo:'Contraseñas no coinciden'
            }
        },
    })
});
