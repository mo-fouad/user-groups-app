import React, { Component } from "react";
import { Button, Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";

class AddNewGroup extends Component {
   state = {
      group_name: "",
      group_description:
         "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
      group_image: null
   };

   inputChanged = e => {
      this.setState({ [[e.target.name]]: e.target.value });
   };

   fileHasUploaded = e => {
      const { files } = e.target;
      if (files[0]) this.setState({ group_image: files[0] });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.formSubmitted(this.state);
   };

   render() {
      return (
         <div>
            <Row>
               <Col>
                  <Form onSubmit={this.handleSubmit}>
                     <FormGroup>
                        <Label for="addNewGroup">Group Name</Label>
                        <Input
                           required
                           type="text"
                           name="group_name"
                           value={this.state.group_name}
                           onChange={this.inputChanged}
                           id="addNewGroup"
                           placeholder="Group Name"
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label for="exampleText">Group Description</Label>
                        <Input
                           required
                           type="textarea"
                           name="group_description"
                           value={this.state.group_description}
                           onChange={this.inputChanged}
                           id="exampleText"
                        />
                     </FormGroup>
                     <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                           required
                           onChange={this.fileHasUploaded}
                           type="file"
                           accept="image/*"
                           name="group_image"
                           id="exampleFile"
                        />
                        <FormText color="muted">PLease Add some Image to your Group</FormText>
                     </FormGroup>
                     <Button>Submit</Button>
                  </Form>
               </Col>
            </Row>
         </div>
      );
   }
}

export default AddNewGroup;
