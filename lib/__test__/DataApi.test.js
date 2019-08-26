import DataApi from "state-api";
import data from "../testData";

const dataApi = new DataApi(data);

describe("DataApi", () => {
  describe("when calling getArticles", () => {
    it("should return article object with id as property", () => {
      const articleId = data.articles[0].id;

      expect(dataApi.getArticles()).toHaveProperty(articleId);
    });
    it("should return article object with articleTitles for a given articleId", () => {
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].articleTitle;
      expect(dataApi.getArticles()[articleId].articleTitle).toEqual(
        articleTitle
      );
    });
  });

  describe("when calling getAuthors", () => {
    it("should return author object with id as property", () => {
      const authorId = data.authors[0].id;
      expect(dataApi.getAuthors()).toHaveProperty(authorId);
    });

    it("should return author object with firstName for a given id", () => {
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;
      expect(dataApi.getAuthors()[authorId].firstName).toEqual(authorFirstName);
    });
  });
});
