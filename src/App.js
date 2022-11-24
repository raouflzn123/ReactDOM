import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <div className="main-nav">
        <Navbar bg="none" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">A-Z VisiON</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="slider">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://media.slidesgo.com/storage/4657212/ai-tech-agency1617795984.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>WELCOME TO THE FUTURE</h3>
              <p>Everything here is Tech. Even You..</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://prezibase.com/wp-content/uploads/2018/09/technology-background-network-system-powerpoint-business-ppt-template-presentation-prezi-Slide1-1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://slidemodel.com/wp-content/uploads/7893-01-technology-roadmap-design-for-powerpoint-16x9-1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
        className="cards"
      >
        <Card
          style={{
            width: "18rem",
            height: "60vh",
            borderColor: "grey",
            borderRadius: "20px",
            boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",
          }}
        >
          <Card.Img
            style={{
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            variant="top"
            src="https://groupe-phone.com/wp-content/uploads/2021/10/iPhone-13-Apple.jpg"
          />
          <Card.Body>
            <Card.Title>Apple</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "60vh",
            borderColor: "grey",
            borderRadius: "20px",
            boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",
          }}
        >
          <Card.Img
            style={{
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            variant="top"
            src="https://img.phonandroid.com/2020/12/Galaxy-s21-2.jpg"
          />
          <Card.Body>
            <Card.Title>Samsung</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "60vh",
            borderColor: "grey",
            borderRadius: "20px",
            boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",
          }}
        >
          <Card.Img
            style={{
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            variant="top"
            src="https://static.digit.in/default/2d19cc250cf043ba2198dd45e18182973aeab7a1.jpeg"
          />
          <Card.Body>
            <Card.Title>Asus ROG</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
