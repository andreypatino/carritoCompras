window.onload=consultaProductos;
/**
   * Método que permite ingresar con usuario y contrasena
   * @author Andrey Sarria
   * @copyright Todos los derechos reservado 2020.
   * @version 1.0  
*/
function sigin(){ 
	var email = $('#inputEmailAddress').val();
	var pass = $('#inputPassword').val();
	
	if (email == '') {
		alert('El email no puede estar vacío')
	}else if(pass == '')  {
		alert('El password no puede estar vacío')
	}else{
		var formdata = new FormData();
		formdata.append("email", email);
        formdata.append("pass", pass);
        formdata.append("command", "selectUser");
		$.ajax({
    
            url: "php_class/FrontController.php",
            type:"POST",
            dataType: "json",
            data: formdata,
            enctype: "multipart/form-data",
            contentType:false,
            processData:false,
            success: function(rta){
                console.warn(rta);
                if (rta.tipo === 'exito') {
                	window.location.replace("http://"+rta.ruta);
                }else{
                	alert('La dirección de email o el password es incorrecto')
                }
                
                          
            }
        });
	}

}
/**
   * Método que permite guardar productos
   * @author Andrey Sarria
   * @copyright Todos los derechos reservado 2020.
   * @version 1.0  
*/
function Productos(){
	var referencia = $('#Referencia').val();
	var descripcion = $('#Descripcion').val();
	var caracteristicas = $('#caracteristicas').val();
	var valorunidad = $('#valorunidad').val();

	if (referencia == '') {
		alert('No puede estar vacío referencia')
	}else if(descripcion == ''){
		alert('No puede estar vacío descripcion')
	}else if(caracteristicas == ''){
		alert('No puede estar vacío caracteristicas')
	}else if(valorunidad == ''){
		alert('No puede estar vacío valorunidad')
	}else {
		var formdata = new FormData();
		formdata.append("referencia", referencia);
        formdata.append("descripcion", descripcion);
        formdata.append("caracteristicas", caracteristicas);
        formdata.append("valorunidad", valorunidad);
        formdata.append("command", "Cproductos");
        $.ajax({
    
            url: "php_class/FrontController.php",
            type:"POST",
            dataType: "json",
            data: formdata,
            enctype: "multipart/form-data",
            contentType:false,
            processData:false,
            success: function(rta){
                console.warn(rta);
                if (rta.tipo === 'exito') {
                	document.getElementById("Referencia").value = "";
                	document.getElementById("Descripcion").value = "";
                	document.getElementById("valorunidad").value = "";
                	document.getElementById("caracteristicas").value = "";
                	alert(rta.mess)
                }else{
                	alert('No pudo registrar el producto')
                }
                          
            }
        });


	}
}


/**
   * Método que permite guardar productos
   * @author Andrey Sarria
   * @copyright Todos los derechos reservado 2020.
   * @version 1.0  
*/
function Productos(){
	var referencia = $('#Referencia').val();
	var descripcion = $('#Descripcion').val();
	var caracteristicas = $('#caracteristicas').val();
	var valorunidad = $('#valorunidad').val();

	if (referencia == '') {
		alert('No puede estar vacío referencia')
	}else if(descripcion == ''){
		alert('No puede estar vacío descripcion')
	}else if(caracteristicas == ''){
		alert('No puede estar vacío caracteristicas')
	}else if(valorunidad == ''){
		alert('No puede estar vacío valorunidad')
	}else {
		var formdata = new FormData();
		formdata.append("referencia", referencia);
        formdata.append("descripcion", descripcion);
        formdata.append("caracteristicas", caracteristicas);
        formdata.append("valorunidad", valorunidad);
        formdata.append("command", "Cproductos");
        $.ajax({
    
            url: "php_class/FrontController.php",
            type:"POST",
            dataType: "json",
            data: formdata,
            enctype: "multipart/form-data",
            contentType:false,
            processData:false,
            success: function(rta){
                console.warn(rta);
                if (rta.tipo === 'exito') {
                	document.getElementById("Referencia").value = "";
                	document.getElementById("Descripcion").value = "";
                	document.getElementById("valorunidad").value = "";
                	document.getElementById("caracteristicas").value = "";
                	alert(rta.mess)
                	consultaProductos();
                }else{
                	alert('No pudo registrar el producto')
                }
                          
            }
        });


	}
}
/**
   * Método que permite consultar productos
   * @author Andrey Sarria
   * @copyright Todos los derechos reservado 2020.
   * @version 1.0  
*/

 function consultaProductos(){
    cotizarProducto();
    var formdata = new FormData();
    formdata.append("command", "Sproductos");
    $.ajax({
        url: "php_class/FrontController.php",
        type:"POST",
        dataType: "json",
        data: formdata,
        enctype: "multipart/form-data",
        contentType:false,
        processData:false,
        success: function(rta){
            console.log(rta.data);
            if (rta.tipo == 'exito') {
            	var cadena='';
            	var cadena1='';
	            var parsed = rta.data;
	            cadena+="<table class='table table-bordered' id='dataTable' width='100%' cellspacing='0'>"+
	            "<thead>"+
	                "<tr>"+
	                    "<th>#</th>"+
	                    "<th>referencia</th>"+
	                    "<th>descripción</th>"+
	                    "<th>caracteristicas</th>"+
	                    "<th>fechaCreacion</th>"+    
	                     "<th>valor unidad</th>"+
	                    "<th>opciones</th>"+                                        
	                "</tr>"+
	            "</thead>"+
	            "<tfoot>"+
	                "<tr>"+
	                    "<th>#</th>"+
	                    "<th>referencia</th>"+
	                    "<th>descripción</th>"+
	                    "<th>caracteristicas</th>"+
	                    "<th>fechaCreacion</th>"+  
	                    "<th>valor unidad</th>"+
	                    "<th>opciones</th>"+                                                                                   
	                "</tr>"+
	            "</tfoot>"+
	            "<tbody>";
	            for (var i=0; i<parsed.length; i++)
	            { 
	                cadena+="<tr>"+
	                "<td>"+parsed[i]['idproductos']+"</td>"+ 
	                "<td>"+parsed[i]['referencia']+"</td>"+
	                "<td>"+parsed[i]['descripción']+"</td>"+
	                "<td>"+parsed[i]['caracteristicas']+"</td>"+
	                "<td>"+parsed[i]['fechaCreacion']+"</td>"+
	                "<td>"+parsed[i]['valor']+"</td>"+ 
	                "<td><div class='btn-group'><button type='button' class='btn btn-success' data-toggle='modal' data-target='#myModalp' onclick='editarProducto(\""+parsed[i]['idproductos']+"\",\""+parsed[i]['referencia']+"\",\""+parsed[i]['descripción']+"\",\""+parsed[i]['caracteristicas']+"\",\""+parsed[i]['valor']+"\");'>Editar</button><button type='button' class='btn btn-danger' onclick='eliminarProducto("+parsed[i]['idproductos']+");'>Eliminar</button></div></td>"+
	                "</tr>";

	                cadena1+="<button type='button' onclick='ProductoView(\""+parsed[i]['idproductos']+"\",\""+parsed[i]['descripción']+"\",\""+parsed[i]['caracteristicas']+"\",\""+parsed[i]['fechaCreacion']+"\",\""+parsed[i]['valor']+"\");' data-toggle='modal' data-target='#myModal' class='list-group-item'><span class='badge'>$"+parsed[i]['valor']+"</span>"+parsed[i]['descripción']+"</button>";
	             
	            }
	            cadena+="</tbody>"+
	            " </table>";
	          	$("#compraprod").html(cadena1);
	            $("#datableproductos").html(cadena);
	            $('#dataTable').DataTable();





            } else {
            	alert('No hay productos Creados');
            }

        }
    });    
 
  }

  function cotizarProducto() {
  	var formdata = new FormData();
    formdata.append("command", "numeroCotizacion");
    $.ajax({
        url: "php_class/FrontController.php",
        type:"POST",
        dataType: "json",
        data: formdata,
        enctype: "multipart/form-data",
        contentType:false,
        processData:false,
        success: function(rta){	
        	console.log(rta.data[0]['AUTO_INCREMENT']);
        	var cadena ='';
        	cadena+='<input id="cotizacionV" name="cotizacion" type="hidden" value="'+rta.data[0]['AUTO_INCREMENT']+'">';
        	$("#facturtaC").html(cadena);
     }
    }); 	
  }


  /**
   * Método que permite consultar productos
   * @author Andrey Sarria
   * @copyright Todos los derechos reservado 2020.
   * @version 1.0  
*/

 function ProductoView(idproductos, descripción, caracteristicas, fechaCreacion, valor){
 	var cadena='';
	 	cadena+='<div class="input-group"><span class="input-group-addon">Descripcion</span><input id="descripcionV" type="text" class="form-control" name="descripcion" value="'+descripción+'"></div>'+
	            '<div class="input-group"><span class="input-group-addon">Caracteristicas</span><input id="caracteristicasV" type="text" class="form-control" name="caracteristicas" value="'+caracteristicas+'"></div>'+  	            
	            '<div class="input-group"><span class="input-group-addon">Valor unidad</span><input id="valorunidadV" type="number" class="form-control" name="valorunidad" value="'+valor+'"></div>'+	            
	            '<input id="idproductosV" name="idproductos" type="hidden" value="'+idproductos+'">'+
	            '<div class="input-group"><span class="input-group-addon">Cuantas unidades</span><input id="unidadesV" type="number" class="form-control" name="unidades"></div>';
	    $("#detalleprod").html(cadena);

 }


 function cotizar() {
 	
 	var idproductosV = $('#idproductosV').val();
 	var cotizacionV = $('#cotizacionV').val();
 	var unidadesV = $('#unidadesV').val();
 	var valorunidadV = $('#valorunidadV').val(); 	
 	var total =  unidadesV * valorunidadV;
 	if (unidadesV == '') {
 		alert('Ingrese la cantidad de unidades');
 	}else{
 		var mensaje;
	    var opcion = confirm("Esta seguro de agregar al carrito de compras este producto?");
	    if (opcion == true) {
	         	var formdata = new FormData();
				formdata.append("idproductosV", idproductosV);
				formdata.append("cotizacionV", cotizacionV);
		        formdata.append("unidadesV", unidadesV);
		        formdata.append("valorunidadV", valorunidadV);
		        formdata.append("total", total);
		        formdata.append("command", "Ccotizacion");

		 	$.ajax({
		        url: "php_class/FrontController.php",
		        type:"POST",
		        dataType: "json",
		        data: formdata,
		        enctype: "multipart/form-data",
		        contentType:false,
		        processData:false,
		        success: function(rta){	
		        	console.log(rta);
		        	alert(rta.mess);
		        	$("#myModal").modal("hide");
		        	mostrarCarrito(cotizacionV);
		     	}
		    }); 

		} else {
		    alert("Has clickado Cancelar");
		}
 	}

 }


 function mostrarCarrito(factura) {	
 	//document.getElementById("totalsuma").value = "";
	var formdata = new FormData();				
	formdata.append("factura", factura);
	formdata.append("command", "Cfactura");
	$.ajax({
        url: "php_class/FrontController.php",
        type:"POST",
        dataType: "json",
        data: formdata,
        enctype: "multipart/form-data",
        contentType:false,
        processData:false,
        success: function(rta){	
        	console.log(rta);
        	var cadena='';
        	var suma = 0;        	
        	var parsed = rta.data;
        	 for (var i=0; i<parsed.length; i++)
	         { 
	         	cadena+='<li class="list-group-item">Producto - '+parsed[i]['descripción']+' /  Valor Cantidad -  $'+parsed[i]['valorTotal']+'    <a class="btn btn-danger" href="#!" onclick="eliminaCotizacion('+parsed[i]['idcotizacion']+', '+parsed[i]['fk_idproductos']+', '+factura+');" role="button">Elimnar</a> <input id="idproductosV'+parsed[i]['idcotizacion']+'" name="idproductos" type="hidden" value="'+parsed[i]['valorTotal']+'"></li>';
	         	suma += parseInt(parsed[i]['valorTotal']);
	         	
	         }

        	$("#vistafactura").append(cadena);
        	$("#subtotal").append(suma);
     	}
    }); 

 }


function eliminaCotizacion(idcotizacion, producto, factura) {
	var formdata = new FormData();				
	formdata.append("factura", factura);
	formdata.append("producto", producto);
	formdata.append("command", "ElimnarCotizacion");
	$.ajax({
        url: "php_class/FrontController.php",
        type:"POST",
        dataType: "json",
        data: formdata,
        enctype: "multipart/form-data",
        contentType:false,
        processData:false,
        success: function(rta){	
        	console.log(rta);
        	alert('Se elimino el producto con exito');
        	mostrarCarrito(factura);
        }
    }); 	
}


function eliminarProducto(producto){
	var formdata = new FormData();	
	formdata.append("producto", producto);
	formdata.append("command", "eliminarProducto");
	$.ajax({
        url: "php_class/FrontController.php",
        type:"POST",
        dataType: "json",
        data: formdata,
        enctype: "multipart/form-data",
        contentType:false,
        processData:false,
        success: function(rta){	
        	console.log(rta.mess);
        	alert(rta.mess); 
        	 consultaProductos();       	
        }
    });
}

function editarProducto(idproductos, referencia, descripcion, caracteristicas, valor) {
	//alert(idproductos);
	$("#idproductose").val(idproductos);
	$("#referenciae").val(referencia);
	$("#descripcione").val(descripción);
	$("#caracteristicase").val(caracteristicas);
	$("#valore").val(valor);
}

function actualizarProducto() {
	var referencia = $('#referenciae').val();
	var descripcion = $('#descripcione').val();
	var caracteristicas = $('#caracteristicase').val();
	var valorunidad = $('#valore').val();
	var idproductose = $('#idproductose').val();

	if (referencia == '') {
		alert('No puede estar vacío referencia')
	}else if(descripcion == ''){
		alert('No puede estar vacío descripcion')
	}else if(caracteristicas == ''){
		alert('No puede estar vacío caracteristicas')
	}else if(valorunidad == ''){
		alert('No puede estar vacío valorunidad')
	}else {
		var formdata = new FormData();
		formdata.append("idproductose", idproductose);
		formdata.append("referencia", referencia);
        formdata.append("descripcion", descripcion);
        formdata.append("caracteristicas", caracteristicas);
        formdata.append("valorunidad", valorunidad);
        formdata.append("command", "UProducto");
        $.ajax({
    
            url: "php_class/FrontController.php",
            type:"POST",
            dataType: "json",
            data: formdata,
            enctype: "multipart/form-data",
            contentType:false,
            processData:false,
            success: function(rta){
                console.warn(rta);
                if (rta.tipo === 'exito') {                	
                	alert(rta.mess)
                	$("#myModalp").modal("hide");
                	consultaProductos();
                }else{
                	alert('No pudo registrar el producto')
                }
                          
            }
        });


	}
}