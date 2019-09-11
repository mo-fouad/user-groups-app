import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";

function Groups(props) {
   return (
      <section className="group-cards">
         <Row>
            {props.groups.map(group => {
               return (
                  <Col key={group.id} sm="4">
                     <Card className="shadow-sm" key={group.id}>
                        <CardImg top width="100%" src={group.group_image} alt="Card image cap" />
                        <CardBody>
                           <CardTitle>{group.group_name}</CardTitle>
                           <CardText>{group.group_description}</CardText>
                           <Button>Visit Group Page</Button>
                        </CardBody>
                     </Card>
                  </Col>
               );
            })}
         </Row>
         <Row className="pt-3 pb-3">
            <Col>
               <Button tag={Link} to="/add-new-form">
                  Add New Group
               </Button>
            </Col>
         </Row>
      </section>
   );
}

export default Groups;
