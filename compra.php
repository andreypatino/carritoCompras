<!DOCTYPE html>
<html lang="en">
<head>
  <title>Compra</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
  </style>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Prueba</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>      
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="index.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="container-fluid text-center">    
  <div class="row content">    
    <div class="col-sm-8 text-left"> 
      <h1>Bienvenido Nuestro portal de Compras</h1>
      <p>Para realizar alguna compra debe seleccionar el producto que le interese con el fin de agregar al carrito de comprar y finalizar la compra.</p>
      <hr>
      <h3>Productos</h3>      
      <div class="list-group">
        <div id="compraprod"></div>  
      </div>  
      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Agregar al Carrito</h4>
            </div>
            <div class="modal-body">
              <form>
                <div id="facturtaC"></div>
                <div id="detalleprod"></div>
                <hr>
                <button type="button" class="btn btn-success" onclick="cotizar();">cotizar</button>
              </form>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
          
        </div>
      </div>
      

    </div>
    <div class="col-sm-4 sidenav">
      <h1>Carrito de Compras</h1>
      <form>
        <ul class="list-group">
          <div id="vistafactura"></div>       
        </ul>  
        <h3>TOTAL<div id="subtotal"></div><h3>
        <hr>
        <button type="button" class="btn btn-success btn-lg btn-block">Comprar</button>
      </form>
      
      
    </div>
  </div>
</div>

<script src="js/funciones.js"></script>
</body>
</html>
