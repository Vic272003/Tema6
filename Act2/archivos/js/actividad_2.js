/* Víctor Martínez Escobar */

$(document).ready(function(){
    /* EJERCICIO 1 */
    $('#botones input').click(function(){
        $(this).css({
            'background-color':'red',
            'color':'white'
        })
    });
    

    /* EJERCICIO 2 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        
        if(idBoton=='ejercicio-2'){
                let contador=1;
            $('#frutas li').each(function(idx, el){
                
                $(this).prepend(contador+'kg ')
                contador++;
            });
        }
    });
    /* EJERCICIO 3 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        
        if(idBoton=='ejercicio-3'){
            
            $('#bebidas').append('<li>3l de limonada</li>');

        }
    });

    /* EJERCICIO 4 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        
        if(idBoton=='ejercicio-4'){
            
            $('#bebidas li:first').clone().appendTo('#bebidas');

        }
    });

    /* EJERCICIO 5 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        
        if(idBoton=='ejercicio-5'){
            
            $('#bebidas li').eq(1).remove();

        }
    });

    /* EJERCICIO 6 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-6'){
            $listaBebidas=$('#bebidas li').clone();
            $listaFrutas=$('#frutas li').clone();
            console.log($listaBebidas);
            if($('#bebidas li').length>$('#frutas li').length){
                console.log('hola');
                for(let i=0;i<=$('#bebidas li').length;i++){
                    $('#frutas-bebidas').append($listaBebidas);
                    $('#frutas-bebidas').append($listaFrutas);
                }
            }else{
                for(let i=0;i<=$('#frutas li').length;i++){
                    $('#frutas-bebidas').append($listaBebidas.eq(i));
                    $('#frutas-bebidas').append($listaFrutas.eq(i));
                }
            }
            

        }
    });
});