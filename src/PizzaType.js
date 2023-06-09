import React, {Component} from 'react';


function PizzaType (Image, Title, Description ) {
    return(
        <div 
		className="container">
	<div className="row">
		<h2 className="text-center">Pizza Types</h2>
	</div>
	<div className="row">
		<div className="col-md-3">
			<div className="img-thumbnail">
				<img src="images/pizza1.jpg" alt="Pepperoni pizza"/>
				<div className="caption">
					<h2>Pepperoni Pizza</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div className="col-md-3">
			<div className="img-thumbnail">
				<img src="images/pizza2.jpg" alt="Vegetable pizza" class="ip"/>
				<div className="caption">
					<h2>Vegetable Pizza</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div className="col-md-3">
			<div className="img-thumbnail">
				<img src="images/pizza.31.jpg" alt="Chessy pizza" class="ip"/>
				<div className="caption">
					<h2>Chessy Pizza</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div className="img-responsive img-thumbnail">
				<img src="images/pizza1.jpg" alt="Bossu pizza" class="ip"/>
				<div className="caption">
					<h2>Bossu Pizza</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
    </div>	
		

</div>
    );
}

export default PizzaType;
