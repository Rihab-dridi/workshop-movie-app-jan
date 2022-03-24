import React from "react";
import { Card , Button} from "react-bootstrap";
import Rating from "./rating";

const MovieCard = ({
  movie: { id, movieName, Description, rating, imgUrl },
}) => {
  return (
    <Card style={{ width: "20rem" }} className='cardContaier'>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{movieName} </Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Rating rating={rating} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
