import { Container, Row } from "react-bootstrap";
import Gallery from "../components/Gallery";

export default function Favoritos() {
  return (
    <Container>
      <h1 className="py-3 text-dark ">Favoritos</h1>
      <Row xs={1} md={2} lg={4} className="g-3 mb-3">
        <Gallery filter={"favoritos"} />
      </Row>
    </Container>
  );
}
