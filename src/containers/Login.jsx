import react from 'react';

function Login(){
  return(
	  <div>
	  	<section class="loginscreen fixedmargin">
	    	<div class="headers">
					<div class="container">
						<a href=""><img src="images/logo.png" /></a>
					</div>
			  </div>
			</section>
	    <section class="container">
			  <div class="form">
					<form>
						<div class="cr">
							<i class="fa-light fa-envelope key "></i><input type="Password" name="" placeholder="email" />
							<i class="fa-light fa-eye-slash eye"></i>
						</div>
						<div class="new">
							<i class="fa-light fa-key key"></i><input type="Password" name="" placeholder=" Password" />
							<i class="fa-light fa-eye-slash eye"></i>
						</div>
						
						<div class="bt">
							<button><a href="dashboard.html">login</a></button>
						</div>
					</form>
			  </div>
				<div class="image">
					<img src="images/doctorgroup.png" />
				</div>
		  </section>
	  </div>
	);	
}
export default Login;