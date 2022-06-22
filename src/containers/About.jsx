import react from 'react'
import Aboutusimg from "../images/aboutusimg.png";
import Doctorabout from "../images/doctorabout.png";
import Doctorimg from "../images/doctorimg.png";

function  About (){
	return(
    
    <div>
      <section classname="aboutusimgtext fixedmargin">
        <div classname="container">
            <div classname="col-sm-5">
              <img src={Aboutusimg} />
            </div>
            <div classname="col-sm-7">
                <div classname="col-7">
                    <h4>About us</h4>
                    <span>What you should know</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leatype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leatype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea</p>
                </div>
            </div>
        </div>
      </section>
        <section classname="aboutcolr">
            <div classname="container">
                    <div classname="col-sm-7">
                    <div classname="col-7 col-77">
                        <h4>What you should know</h4>
                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leatype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leatype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea</p>
                    </div>
                </div>
                <div classname="col-sm-5">
                    <img src={Doctorabout} />
                </div>
            </div>
            </section>
            <section classname="aboutusclinic">
            <div classname="container">
                <div classname="clinicdepartment">
                    <span>Clinic Departments</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div classname="col-sm-3">
                    <div classname="aboutcol4">
                     <span>Lorem ipsum</span>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div classname="col-sm-3">
                    <div classname="aboutcol4">
                     <span>Lorem ipsum</span>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div classname="col-sm-3">
                    <div classname="aboutcol4">
                     <span>Lorem ipsum</span>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div classname="col-sm-3">
                    <div classname="aboutcol4">
                     <span>Lorem ipsum</span>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>
        </section>
        <section classname="aboutspecialist">
            <div classname="container">
                <div classname="clinicdepartment spanmargin">
                    <span>Our Specialists</span>
                    
                </div>
                <div classname="spcialistdoctor">
                    <div classname="col-sm-3">
                        <div classname="aboutdoctorclassname">
                            <img src={Doctorimg} />
                            <span>AKASH KUMAR</span>
                            <p>Dentist</p>
                            <a href=""><i classname="fa-brands fa-facebook-f"></i></a><a href=""><i classname="fa-brands fa-twitter"></i></a><a href=""><i classname="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div classname="spcialistdoctor">
                    <div classname="col-sm-3">
                        <div classname="aboutdoctorclassname">
                            <img src={Doctorimg} />
                            <span>Sonam Doe</span>
                            <p>Heart Spcialist</p>
                            <a href=""><i classname="fa-brands fa-facebook-f"></i></a><a href=""><i classname="fa-brands fa-twitter"></i></a><a href=""><i classname="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div classname="spcialistdoctor">
                    <div classname="col-sm-3">
                        <div classname="aboutdoctorclassname">
                            <img src={Doctorimg} />
                            <span>Jemmy Doe</span>
                            <p>ORTHO</p>
                            <a href=""><i classname="fa-brands fa-facebook-f"></i></a><a href=""><i classname="fa-brands fa-twitter"></i></a><a href=""><i classname="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div classname="spcialistdoctor">
                    <div classname="col-sm-3">
                        <div classname="aboutdoctorclassname">
                            <img src={Doctorimg} />
                            <span>Semenio Doe</span>
                            <p>GYNO</p>
                            <a href=""><i classname="fa-brands fa-facebook-f"></i></a><a href=""><i classname="fa-brands fa-twitter"></i></a><a href=""><i classname="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  
    
  );
}

export default About;