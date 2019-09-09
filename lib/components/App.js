import React from "react";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";
import PropTypes from "prop-types";
import pickby from "lodash.pickby";
class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render = () => {
    let { articles, searchTerm } = this.state;
    const searchRe = new RegExp(searchTerm, "i");
    if (searchTerm) {
      articles = pickby(articles, value => {
        return value.title.match(searchTerm) || value.body.match(searchRe);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar></SearchBar>
        <ArticleList articles={articles} />
      </div>
    );
  };
}

export default App;
