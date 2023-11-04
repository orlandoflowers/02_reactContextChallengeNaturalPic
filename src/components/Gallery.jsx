import { Col, Card } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../contexts/PhotoContext";
import Heart from "./Heart";
import PropTypes from "prop-types";

// Gallery component
export default function Gallery({ filter = "home" }) {
  // Usign the useContext hook to get the photos from the context
  const { fotos } = useContext(Context);

  return (
    <>
      {/* Map photos array and creating a Card for each photo */}
      {fotos
        // Filtering the photos based on the filter prop
        .filter((photo) =>
          filter === "favoritos" ? photo.liked === true : true
        )
        .map((photo) => (
          // Creating a column for each photo
          <Col key={photo.id}>
            {/* Creating a Card with the photo */}
            <Card className="text-white">
              {/* Setting the image of the Card to the photo */}
              <Card.Img src={photo.src} alt={photo.alt} />
              <Card.ImgOverlay>
                {/* Heart component  in the Card */}
                <Card.Text className="text-end">
                  <Heart id={photo.id} />
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
    </>
  );
}
Gallery.propTypes = {
  filter: PropTypes.string,
};
