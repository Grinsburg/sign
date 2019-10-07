import React from 'react';

import Sign from '../Sign/Sign'

import {Container, Row} from 'react-bootstrap'

function App() {
  return (
      <Container>
          <Row className="d-flex align-items-center" style={{height: "100vh"}}>
              <Sign />
          </Row>
      </Container>
  );
}

export default App;
