/* Víctor Martínez Escobar */

$(document).ready(function(){

    /* Ejercicio 1 */
    $('#contenedor > div').not('#ver-inicio').hide();
    $('#pestana #inicio').addClass('activa');
    let contenedor;
    $('#pestana li').click(function(){  //Al hacer click sabremos a dónde tenemos que dirigirnos
        
        let idBoton=$(this).attr('id');
        switch(idBoton){
            case 'inicio':
                contenedor='ver-inicio';
            break;
            case 'slider':
                contenedor='ver-slider';
            break;
            case 'info':
                contenedor='ver-info';
            break;
            case 'tabla':
                contenedor='ver-tabla';
            break;
            case 'form':
                contenedor='ver-form';
            break;
        }
        $('#contenedor > div').not("#"+contenedor).hide();  //Ocultamos todas menos el contenedor
        $("#"+contenedor).show();   //Mostramos solo el contenedor
        $('#pestana li').removeClass('activa');
        $('#'+idBoton).addClass('activa');
        
    });
    

    /* Ejercicio 2 */
    //Función para devolver una imagen aleatoria
    function imagenAleatoria(numImagenes){  //Devuelve un número random
        let resultado=Math.floor(Math.random()*(numImagenes-1+1)+0);
        return resultado;
    }
    
    let numeroImagenes=$('#ver-inicio img').length; //Saber el num de imagenes
    let imagenAle=imagenAleatoria(numeroImagenes);  //Hacemos una img aleatoria
    $('#ver-inicio img').hide();  //Ocultamos todas menos la imagen que tenemos
    $('#ver-inicio img').eq(imagenAle).show();  //Mostramos la imagen aleatoria
    
    $('#ver-inicio img').click(function(){  //Cuando clicka en una imagen 
        let imagenAleClick;
        $('#ver-inicio img').eq(imagenAle).toggle(2000); //Cuando haga click en la imagen desaparece con toggle la anterior
        do{
            imagenAleClick=imagenAleatoria(numeroImagenes); //Lo hace hasta que sea distinta a la anterior
        }while(imagenAleClick==imagenAle);
        imagenAle=imagenAleClick;   //Añadimos a imagenAle otra imagen aleatoria
        $('#ver-inicio img').eq(imagenAle).toggle(2000); //Mostramos el siguiente con el efecto toggle
            
    });

    /* Ejercicio 3 */
    let numeroImagen=1; 
    $('#ver-slider img').not(":nth-child("+numeroImagen+")").hide();   //Ocultamos todas las que no sean la primera
    $('#ver-slider img').click(function(){  //Cuando haga click
        if(numeroImagen==$('#ver-slider img').length){  //Si numeroImagen==tamaño del slider entra
            numeroImagen=0; //Volvemos a la primera imagen
        }
        $('#ver-slider img').hide();    //Ocultamos todo lo que no esté oculto
        $('#ver-slider img').eq(numeroImagen).fadeIn( "slow");  //Mostramos la imagen siguiente
        numeroImagen++;
        
    });

    /* Ejercicio 4 */
    $('#ver-info p').hide();    //Ocultamos todos los p
    $('#ver-info a').click(function(){  //Cuando haga click en algún enlace
        let noticia=$(this).attr('id');     //Cogemos el id del enlace
        $("#ver-"+noticia).toggle('slow');  //Mostramos el elemento con id vernoticia
    });
    $('#ver-ocultar-enlace').click(function(){  //Cuando haga click en el checkbox
        if($('#ver-ocultar-enlace').is(':checked')){    //Si está checked entra
            $('#ver-info > a').hide();  //Oculta los enlaces
        }else{
            $('#ver-info > a').show(); //Muestra los enlaces
        }
    });
    

    /* Ejercicio 5 */
    
    $('#radio input:radio').click(function(){   //Cuando haga click en uno de los radios
        let saberRadius=$('input:radio[name=frutas-verduras]:checked').val();   //Sacamos el valor del radio
        $('.datos td').css({    
            'background-color':'white',
        });
        for (let index = 0; index <= $('.datos').length; index++) { //Recorremos los datos que tenga la tabla
            $(".datos").eq(index).html(function(){
                let saberTipo=$(this).find('td').eq(1).html();  //Sacamos el tipo de datos de la tabla(FRUTA O VERDURA)
                if(saberTipo==saberRadius){ //Si son iguales(FRUTA==FRUTA) entra
                    $(this).find('td').css({
                        'background-color':'yellowgreen',
                    });  
                } 
            })   
        }
    });
    /* Ejercicio 6 */
    $('#enviar').click(function(){  //Cuando haga click en el botón enviar entra
        let seAgrega=true;  //Lo usaremos luego y si se agrega todo es true
        let valorNombre=$('#nombre').val(); //Sacamos el valor del nombre
        let valorCantidad=$('#cantidad').val(); //Sacamos la cantidad dada
        let valorUrl=$('#url').val();   //Sacamos el valor de la url
        
        
        if(!valorNombre){   //Si no hay valor en el nombre entra y se pone en rojo
            $('#nombre').css({
                'background-color':'red',
            });
            seAgrega=false;
        }else{  //Si no en verde
            $('#nombre').css({
                'background-color':'green',
            });
        }

        if(!valorCantidad){ //Si no hay valor en el cantidad entra y se pone en rojo
            $('#cantidad').css({
                'background-color':'red',
            });
            seAgrega=false;
        }else{  //Si no en verde
            $('#cantidad').css({
                'background-color':'green',
            });
        }
        
        if(!valorUrl){  //Si no hay valor en el url entra y se pone en rojo
            $('#url').css({
                'background-color':'red',
            });
            seAgrega=false;
        }else{  //Si no en verde
            $('#url').css({
                'background-color':'green',
            });
        }
        if(seAgrega){   //Si es true entra y añade a la lista
            $('#listado').append('<li><a href=“'+valorUrl+'”>'+valorNombre+'('+valorCantidad+')</a></li>'); //Añadimos a la lista

            $('#formulario .campo').css({   //Coloreamos todos los campos fondo en blanco
                'background-color':'white',
            });
        }
    });
    
    /* Ejercicio 7 */
    $('#ordenar').click(function(){ //Cuando haga click entra
        let espacioListado=$('#listado li').length; //Sabemos la longitud del listado
        let bandera;    //Creamos una bandera
        
        do{ //Se hace el do mientras bandera sea distinto de 0
            bandera=0;  //Asignamos a la bandera 0
            for(let i=0;i<espacioListado-1;i++){  //Un bucle que recorra todos los li
                let valor1=$('#listado li a').eq(i).html(); //Sacamos un valor
                let valor2=$('#listado li a').eq(i+1).html();//Sacamos un valor siguiente
                if(valor1.localeCompare(valor2)>0){     //Comparamos la cadena
                    $('#listado li').eq(i+1).insertBefore($('#listado li').eq(i));  //Cambiamos las posiciones
                    bandera=1;  //Ponemos la bandera a 1
                }
            }
        }while(bandera!=0);
        console.log(bandera);
    });
});