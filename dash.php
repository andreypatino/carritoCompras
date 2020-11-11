<?php 
    if(!isset($_SESSION))
        session_start();
   // print_r($_SESSION);die();
    if (empty($_SESSION) || $_SESSION['id']=='') {
        header("Location: ". "index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Dashboard - Admin</title>
       <link href="css/styles.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Prueba</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button
            >
            <!-- Navbar-->
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html"
                                ><div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Productos</a
                            >
                            
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small"></div>                       
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                       
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card mb-4">
                                    <div class="card-header"><i class="fas fa-chart-area mr-1"></i>Crear Productos</div>
                                    <div class="card-body">
                                      <form id="FcrearP">  
                                        <div class="form-group row">
                                          <div class="col-md-6">
                                            <label for="ex1">Referencia:</label>
                                            <input class="form-control" id="Referencia" type="text">
                                          </div>
                                          <div class="col-md-6">
                                            <label for="ex2">Descripcion:</label>
                                            <input class="form-control" id="Descripcion" type="text">
                                          </div>
                                          <div class="col-md-6">
                                            <label for="ex3">Caracteristicas:</label>
                                            <input class="form-control" id="caracteristicas" type="text">
                                          </div>
                                          <div class="col-md-6">
                                            <label for="ex3">Valor por unidad:</label>
                                            <input class="form-control" id="valorunidad" type="number">
                                          </div>
                                        </div>
                                        <button type="button" class="btn btn-success" onclick="Productos();">Guardar</button>
                                      </form>  
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>DataTable Productos</div>
                            <div class="card-body">
                                <div class="table-responsive" id='datableproductos'>                                   
                                </div>
                                <!-- Modal -->
                                  <div class="modal fade" id="myModalp" role="dialog">
                                    <div class="modal-dialog">
                                    
                                      <!-- Modal content-->
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                                          <h4 class="modal-title">Actualizar Producto</h4>
                                        </div>
                                        <div class="modal-body">
                                          <form>
                                                <input id="idproductose" name="idproductose" type="hidden" value="idproductose">
                                              <div class="form-group">
                                                <label class="control-label col-sm-2" for="">referencia:</label>
                                                <div class="col-sm-10">
                                                  <input type="text" class="form-control" id="referenciae" value="">
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label col-sm-2" for="">descripcion:</label>
                                                <div class="col-sm-10">
                                                  <input type="text" class="form-control" id="descripcione" value="">
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label col-sm-2" for="">caracteristicas:</label>
                                                <div class="col-sm-10">
                                                  <input type="text" class="form-control" id="caracteristicase" value="">
                                                </div>
                                              </div>
                                              <div class="form-group">
                                                <label class="control-label col-sm-2" for="">valor por unidad:</label>
                                                <div class="col-sm-10">
                                                  <input type="number" class="form-control" id="valore" value="">
                                                </div>
                                              </div>
                                              <button type="button" class="btn btn-info" onclick="actualizarProducto();">Actualizar</button>
                                          </form>
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                           
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
        <script src="assets/demo/datatables-demo.js"></script>
        <script src="js/funciones.js"></script>
    </body>
</html>
