import react from 'react';
import {Form, InputGroup, Button, validated, Col,} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';
import React, { useState, useEffect,handleShow,handleClose } from 'react';


function FeedBack(props) {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [textarea, setTextarea] = useState([]);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  let feedbackForm = {
  	name: name, 
	  email: email, 
	  textarea: textarea 
  };

  const handleSubmit = (event) => {
  	event.preventDefault();
  	console.log(name)
  	console.log(email)
    fetch(`http://localhost:3001/api/v1/feedback_forms`, {
	   method: 'post',
	   headers: {'Accept': 'application/json',
               'Content-Type': 'application/json'},
	   body: JSON.stringify(feedbackForm)
	  })
	  .then((response) => response.json())
    .then((responseJson) => {
    	debugger
    	if (responseJson.success == true){
    		 setShow(true);
    	}else{

    	}
    })
    .catch((error) => {
     console.error(error);
    });
  };

  return (
  	<>
	    <Form noValidate onSubmit={handleSubmit}>
		    <Form.Group>
		      <Form.Control
		        required
		        type="text"
		        name="name"
		        placeholder="Your Name"
		        value={name}
		        onChange={e => setName(e.target.value)}
		      />
		    </Form.Group>
		    <Form.Group>
		      <InputGroup hasValidation>
		        <Form.Control
		          type="email"
		          placeholder="Email"
		          name="email"
		          value={email}
		          onChange={e => setEmail(e.target.value)}
		          required
		        />
		        <Form.Control.Feedback type="invalid">
		          Please choose a username.
		        </Form.Control.Feedback>
		      </InputGroup>
		    </Form.Group>
		    <Form.Group className="mb-3">
		      <Form.Control 
		      	as="textarea" rows={3} 
		      	name="textarea" 
		      	value={textarea}
		      	onChange={e => setTextarea(e.target.value)} 
		      />
		  	</Form.Group>
		    <Button type="submit" >Send </Button>
	    </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
	    
	  </>
  );
}

export default FeedBack;