import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

function Groups(props) {
   console.log(props);
   return (
      <section className="group-cards">
         <Row>
            {props.groups.map(group => {
               return (
                  <Col key={group.id} sm="4">
                     <Card key={group.id}>
                        <CardBody>
                           <CardTitle>{group.group_name}</CardTitle>
                           <CardText>{group.group_description}</CardText>
                           <Button>Button</Button>
                        </CardBody>
                     </Card>
                  </Col>
               );
            })}
         </Row>
      </section>
   );
}

export default Groups;
