import react from 'react';


function Home(){
return( 
 <div>
	<section className="surgreyvideo fixedmargin">
		<div className="container">
		    <div className="col-sm-5">
			  <div className="surgreytext">
				<h3>Welcome to New Hampshire Oral & Maxillofacial Surgery (NHOMS)</h3>
				<span>The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno</span>
				<i className="fa-regular fa-location-dot locationicon"></i><input type="search" name="" placeholder="Choose location"/><i className="fa-light fa-magnifying-glass searchicon"></i>
			   </div>
		    </div>
		    <div className="col-sm-7">
		    	<div className="surgreyvideos">
		    		<img src="images/homeomfs.png"/>
		    		<iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen></iframe>
		    	</div>
		    </div>
		</div>  
	</section>
  <section className="membershipblacksection">
	<div className="container">
		<div className="membershiptext">
			<span>Learn from 150+ of the world's best, in one membership.</span>
		</div>
		<div className="membershipinf">
			<div className="col-sm-7">
				<div className="membershipinftext">
					<h3>Lorem Ipsum</h3>
					<p>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
					<a href="">Get Started</a>
				</div>
			</div>
			<div className="col-sm-5">
				<img src="images/doctorhome.png"/>
			</div>
		</div>
		<div className="membershipinf">
			<div className="col-sm-5">
				<img src="images/mailhome.png"/>
			</div>
			<div className="col-sm-7">
				<div className="membershipinftext">
					<h3>Lorem Ipsum</h3>
					<p>Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup.</p>
					<a href="">Get Started</a>
				</div>
			</div>
			
		</div>
		<div className="membershiptext membershiptextmargin">
			<span>Lorem Ipsum</span>
			<h6>Consistent quality and experience across all platforms and devices.</h6>
			<iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowFullScreen></iframe>
		</div>	
	</div>
   </section>
	<section className="aboutspecialist">
		<div className="container">
			<div className="clinicdepartment spanmargin">
				<span>Our Specialists</span>
				
			</div>
			<div className="spcialistdoctor">
				<div className="col-sm-3">
					<div className="aboutdoctorclassName">
						<img src="images/doctorimg.png"/>
						<span>AKASH KUMAR</span>
						<p>Dentist</p>
						<a href=""><i className="fa-brands fa-facebook-f"></i></a><a href=""><i className="fa-brands fa-twitter"></i></a><a href=""><i className="fa-brands fa-instagram"></i></a>
					</div>
				</div>
			</div>
			<div className="spcialistdoctor">
				<div className="col-sm-3">
					<div className="aboutdoctorclassName">
						<img src="images/doctorimgs.png"/>
						<span>Sonam Doe</span>
						<p>Heart Spcialist</p>
						<a href=""><i className="fa-brands fa-facebook-f"></i></a><a href=""><i className="fa-brands fa-twitter"></i></a><a href=""><i className="fa-brands fa-instagram"></i></a>
					</div>
				</div>
			</div>
			<div className="spcialistdoctor">
				<div className="col-sm-3">
					<div className="aboutdoctorclassName">
						<img src="images/doctorimgss.png"/>
						<span>Jemmy Doe</span>
						<p>ORTHO</p>
						<a href=""><i className="fa-brands fa-facebook-f"></i></a><a href=""><i className="fa-brands fa-twitter"></i></a><a href=""><i className="fa-brands fa-instagram"></i></a>
					</div>
				</div>
			</div>
			<div className="spcialistdoctor">
				<div className="col-sm-3">
					<div className="aboutdoctorclassName">
						<img src="images/doctorimgsss.png"/>
						<span>Semenio Doe</span>
						<p>GYNO</p>
						<a href=""><i className="fa-brands fa-facebook-f"></i></a><a href=""><i className="fa-brands fa-twitter"></i></a><a href=""><i className="fa-brands fa-instagram"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
 </div>

);

}
export default Home;