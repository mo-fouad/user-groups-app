import React from "react";
import { Form, FormGroup, Input, Label, Row } from "reactstrap";

function AddNewGroup() {
   return (
      <div>
         <Row>
            <Form>
               <FormGroup>
                  <Label for="addNewGroup">Email</Label>
                  <Input type="text" name="newGroup" id="addNewGroup" placeholder="Group Name" />
               </FormGroup>
               <FormGroup>
                  <Label for="exampleText">Group Description</Label>
                  <Input type="textarea" name="text" id="exampleText" />
               </FormGroup>
            </Form>
         </Row>
      </div>
   );
}

export default AddNewGroup;
