import React from "react";
import { Router, Route } from "react-router-dom";

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
        <div>
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
