import React from "react";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
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
  setSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };
  render = () => {
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm}></SearchBar>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  };
}

export default App;
