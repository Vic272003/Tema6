/* Víctor Martínez Escobar */

$(document).ready(function(){
    /* EJERCICIO 1 */
    let cambiarTitulo=$('#titulo');
    cambiarTitulo.append('-Actividad 1')

    /* EJERCICIO 2 */
    $('#botones input').click(function(){
        $(this).css({
            'background-color':'red',
            'color':'white'
        })
    });

    /* EJERCICIO 3 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        
        if(idBoton=='ejercicio-3'){
            $('.subtitulo').html('LISTADO');
        }
    });

    /* EJERCICIO 4 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-4'){
            $('h2.subtitulo').html('HAZ TU PEDIDO').css({
                'background-color':'red',
            })
        }

    });

    /* EJERCICIO 5 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-5'){
            $('.listado').find('ul').eq(0).html(function(){
                $(this).find('li').eq(0).html('Fresa').css({
                    'color':'red',
            });
            });
        }
    });

    /* EJERCICIO 6 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-6'){
            $('.listado ul li:odd').css({
                'background-color':'green',
            })
        }
    });

    /* EJERCICIO 7 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-7'){
            $(':text').attr('value','MELOCOTÓN');
        }
    });

    /* EJERCICIO 8 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-8'){
            $('a').attr('href','web.html').css({
                'background-color':'yellow',
                'color':'green',
            });
        }
    });

    /* EJERCICIO 9 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-9'){
            $('.listado').has('p').css({
                'border':'1px solid red',
            });
        }
    });

    /* EJERCICIO 10 */
    $('#botones input').click(function(){
        let idBoton=$(this).attr('id');
        if(idBoton=='ejercicio-10'){
            $('h3').eq(1).html('BEBIDAS').css({
                'color':'red',
            });
        }
    });
    
});