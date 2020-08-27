import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

import StreamCreate from "./components/streams/stream_create";
import StreamDelete from "./components/streams/stream_delete";
import StreamEdit from "./components/streams/stream_edit";
import StreamList from "./components/streams/stream_list";
import StreamShow from "./components/streams/stream_show";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete/:id" component={StreamDelete} />
          <Route exact path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
