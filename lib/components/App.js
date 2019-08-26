import React from "react";
import DataApi from "state-api";
import data from "testData";
import ArticleList from "./ArticleList";
const dataApi = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: dataApi.getArticles(),
      authors: dataApi.getAuthors()
    };
  }

  authorActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };

  render = () => (
    <ArticleList
      articles={this.state.articles}
      authorActions={this.authorActions}
    />
  );
}

export default App;
