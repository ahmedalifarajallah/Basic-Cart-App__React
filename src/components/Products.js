import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/Cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img"
                style={{
                  height: "200px",
                  objectFit: "contain",
                }}
              />
              <Card.Body style={{ flex: "1" }}>
                <Card.Title>
                  {product.title.length > 53
                    ? Array.from(product.title).slice(0, 53).join("") + "..."
                    : product.title}
                </Card.Title>
                <Card.Text>
                  {product.description.length > 130
                    ? Array.from(product.description).slice(0, 130).join("") +
                      "..."
                    : product.description}
                </Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  onClick={() => {
                    if (!cart.some((p) => p.id === product.id)) {
                      dispatch(addToCart(product));
                    }
                  }}
                  variant={
                    cart.some((p) => p.id === product.id)
                      ? "success"
                      : "primary"
                  }
                  className="mt-auto"
                  disabled={cart.some((p) => p.id === product.id)}
                >
                  {cart.some((p) => p.id === product.id)
                    ? "Added"
                    : "Add To Cart"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
