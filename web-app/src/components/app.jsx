import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getDataActions from "../redux/actions/getDataActions";
import * as groupsActions from "../redux/actions/groupActions";
// Components
import Groups from "./groups/Groups";
import Header from "./Fragments/Header";
import Footer from "./Fragments/Footer";
import { Container, Spinner } from "reactstrap";
import WelcomeHeading from "./Fragments/WelcomeHeading";
import Users from "./usres/Users";
import UserDetails from "./usres/OneUsre";
import GroupDetails from "./groups/OneGroup";
import AddNewGroup from "./groups/AddNewGroup";
import AddNewUser from "./usres/AddNewUser";
import groupReducer from "../redux/reducers/groupReducer";

class App extends Component {
   state = {
      isLoading: true,
      groupsData: {}
   };

   componentDidMount() {
      const { getGroupsData } = this.props;
      getGroupsData();
   }

   submitAddNewGroup = FormData => {
      const { addNewGroupAction } = this.props;
      addNewGroupAction(FormData);
   };

   render() {
      console.log(this.props);
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
                        <Groups groups={groups} />
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

                     <Route exact path="/add-new-form">
                        <AddNewGroup formSubmitted={this.submitAddNewGroup} />
                     </Route>

                     <Route exact path="/add-new-user">
                        <AddNewUser />
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
   return bindActionCreators(Object.assign({}, getDataActions, groupsActions), dispatch);
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
