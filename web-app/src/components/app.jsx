import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getDataActions from "../redux/actions/getDataActions";
// Components
import Groups from "./groups/Groups";
import Header from "./Fragments/Header";
import Footer from "./Fragments/Footer";
import { Container, Spinner } from "reactstrap";
import WelcomeHeading from "./Fragments/WelcomeHeading";
import Users from "./usres/Users";
import UserDetails from "./usres/OneUsre";
import GroupDetails from "./groups/OneGroup";

class App extends Component {
   state = {
      isLoading: true,
      groupsData: {}
   };

   componentDidMount() {
      const { getGroupsData } = this.props;
      getGroupsData();
   }

   render() {
      const { groupsData: { groups } = {} } = this.props;

      if (groups && groups.length > 0) {
         return (
            <Fragment>
               <Header />
               <Container>
                  <Switch>
                     <Route exact path="/">
                        <WelcomeHeading />
                     </Route>
                     <Route exact path="/groups">
                        <Groups groups={groups}></Groups>
                     </Route>
                     <Route exact path="/users">
                        <Users />
                     </Route>
                     <Route exact path="/group/:group_name">
                        <GroupDetails />
                     </Route>
                     <Route exact path="/user/:user_name">
                        <UserDetails />
                     </Route>
                  </Switch>
               </Container>
               <Footer />
            </Fragment>
         );
      } else {
         return (
            <div className="loading-screen">
               <Spinner color="primary"></Spinner>
            </div>
         );
      }
   }
}

// Map Redux state to props
const mapStateToProps = state => {
   const { groupsData } = state.getDataReducer;

   return {
      groupsData
   };
};

// Map action to props so we have access to different actions
const mapDispatchToProps = dispatch => {
   return bindActionCreators(Object.assign({}, getDataActions), dispatch);
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
