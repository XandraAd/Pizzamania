function Slider () {
    return (
        <div className="container-fluid" >
 	<div className="row">
 		<div className="col-md-12">
 		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner carouselpizza">
                      <div className="carousel-item active">
                           <img className="d-block w-100" src="images/evelyn12.jpg" alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                           <img className="d-block w-100" src="images/aliyah-jamous-2.jpg" alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                           <img className="d-block w-100" src="images/istockphoto14.jpg" alt="Third slide"/>
                      </div>
            </div>
                       <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="sr-only">Previous</span>
                       </a>
                       <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="sr-only">Next</span>
                       </a>
        </div>
        </div>
 			
 		
 	</div>
 </div>
    );
}

export default Slider;