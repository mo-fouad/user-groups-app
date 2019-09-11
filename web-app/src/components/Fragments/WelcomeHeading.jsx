import React from "react";
import { Button, Jumbotron } from "reactstrap";

function WelcomeHeading() {
   return (
      <div>
         <Jumbotron>
            <h3 className="display-3">Hello, to Groupyz App</h3>
            <p className="lead">
               This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
               content or information.
            </p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
               <Button color="primary">Learn More</Button>
            </p>
         </Jumbotron>{" "}
      </div>
   );
}

export default WelcomeHeading;
