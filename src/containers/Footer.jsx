import react from 'react';
import FeedBack from './FeedBack'
function Footer(){
	return(
		<div className="footer">
				<div className="container">
					<div className="footermenu">
						<div className="col-sm-2">
							<ul>
							<a href=""><li><img src="images/logo.png"/></li></a>
							<a href=""><li>Online Learning of Medical classNamees</li></a>
							<a href=""><li><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i></li></a>
						  </ul>
					  </div>
					<div className="col-sm-3">
						<ul className="contactusfooter">
						<a href=""><li><span>Contact us</span></li></a>
						<a href=""><li><i className="fa-light fa-location-dot"></i>2715 Ash Dr. San Jose, South Dakota 83475</li></a>
						<a href="tel:(219) 555-0114"><li><i className="fa-light fa-phone"></i>(219) 555-0114</li></a>
						<a href="mailto:info@screeno.com"><li><i className="fa-light fa-envelope"></i>info@screeno.com</li></a>
					    </ul>
					</div>
					<div className="col-sm-7">
						<ul className="contactusfooterr">
							<a href=""><li><span>Get In Touch</span></li></a>
							<li>
								<FeedBack />
							</li>
						</ul>
					</div>
				</div>
				</div>
				<div className="footerreserved">
					©2022 Screeno Ltd, All rights reserved
				</div>
		</div>
);
}
export default Footer;