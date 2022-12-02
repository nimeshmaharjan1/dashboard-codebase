//Import module scss as styles

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
};
export default Search;
