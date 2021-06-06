import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Main from "./pages/Main/Main";
import { Container, Row } from "react-bootstrap";
import { posts_reducer } from "./store/store";
import { initialStatePosts } from "./store/dafaultState";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const StateContext = React.createContext(state);

const App = (): JSX.Element => {
  // const initialState = {
  //   title: "title",
  //   postMessage: "postMessage",
  // };

  const [state, dispatch] = React.useReducer(posts_reducer, initialStatePosts);
  return (
    <Container className='app' fluid>
      <Row>
        {/* <Col className='page'> */}
        <Header />
        {/* </Col> */}
      </Row>
      {/* <Row> */}
      {/* <Col> */}
      <Route exact path='/' component={() => <Main posts={state.posts} />} />
      <Route
        exact
        path='/posts'
        component={() => <Post dispatch={dispatch} />}
      />
      {/* </Col> */}
      {/* </Row> */}
    </Container>
    // <div className='App'>

    // </div>
  );
};

export default App;
