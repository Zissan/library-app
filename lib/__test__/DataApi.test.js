import StateApi from "state-api";
import data from "../testData";

const store = new StateApi(data);

describe("StateApi", () => {
  describe("when calling getArticles", () => {
    it("should return article object with id as property", () => {
      const articleId = data.articles[0].id;

      expect(store.getState().articles).toHaveProperty(articleId);
    });
    it("should return article object with articleTitles for a given articleId", () => {
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].articleTitle;
      expect(store.getState().articles[articleId].articleTitle).toEqual(
        articleTitle
      );
    });
  });

  describe("when calling getAuthors", () => {
    it("should return author object with id as property", () => {
      const authorId = data.authors[0].id;
      expect(store.getState().authors).toHaveProperty(authorId);
    });

    it("should return author object with firstName for a given id", () => {
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;
      expect(store.getState().authors[authorId].firstName).toEqual(
        authorFirstName
      );
    });
  });
});
