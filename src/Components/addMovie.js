import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
export default function AddMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form.Label htmlFor="inputPassword5">Title</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
          <>
            <Form.Label htmlFor="inputPassword5">Description</Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
          <>
            <Form.Label htmlFor="inputPassword5">Poster </Form.Label>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
          <>
            <Form.Label htmlFor="inputPassword5">Rating  </Form.Label>
            <Form.Control
              type="number"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
        </Modal.Body>
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
