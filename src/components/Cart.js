import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import {
  addQuantity,
  clearCart,
  deleteFromCart,
  subQuantity,
} from "../rtk/slices/Cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);
  return (
    <Container>
      <h1 className="mb-4">Cart-{cart.length}</h1>
      <Button
        variant="danger"
        onClick={() => dispatch(clearCart())}
        className="mb-4"
      >
        Clear Cart
      </Button>
      <h4>Total Is: ${totalPrice.toFixed(2)}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Img</th>
            <th>quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    style={{ width: "75px", height: "75px" }}
                    alt=""
                  />
                </td>
                <td>
                  <p className="d-block text-center">{product.quantity}</p>
                  <span>
                    <Row xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                      <Col>
                        <Button
                          onClick={() => dispatch(addQuantity(product))}
                          variant="warning"
                          className="btn-sm"
                        >
                          +
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => dispatch(subQuantity(product))}
                          variant="warning"
                          className="btn-sm"
                        >
                          -
                        </Button>
                      </Col>
                    </Row>
                  </span>
                </td>
                <td>${product.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteFromCart(product))}
                    className="btn-sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
