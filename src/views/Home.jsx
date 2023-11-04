import { Container, Row } from "react-bootstrap";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="my-3 text-dark ">Natural Pic</h1>
        <p className="my-3 text-dark d-flex justify-content-center ">
          Click on the ❤️ to mark as favorite
        </p>
        <Row xs={1} md={2} lg={5} className="g-3 mb-3">
          <Gallery filter={"home"} />
        </Row>
      </Container>
    </>
  );
}
