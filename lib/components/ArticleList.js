import React from "react";
import Article from "./Article";
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const article = Object.values(this.props.articles).map(article => {
      return (
        <Article
          key={article.id}
          article={article}
          authorActions={this.props.authorActions}
        />
      );
    });
    return <div>{article}</div>;
  }
}

export default ArticleList;
