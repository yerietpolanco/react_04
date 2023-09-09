import { Form } from "react-bootstrap";

export default function Buscador({ setFilter }) {
  

  return (
    <>
      <Form className="search-container">
        <Form.Group className="mb-3">
          <Form.Label>Filtrar resultados</Form.Label>
          <Form.Control type="text" onChange={(e) => setFilter(e.target.value)} placeholder="Escribe acá el título de una película" />
        </Form.Group>
      </Form>
    </>
  );
}
