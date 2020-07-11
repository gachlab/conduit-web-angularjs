angular.module("app").factory("conduiPagesHomeService", function ($http) {
  return {
    fetchTags() {
      return (
        $http
          .get("https://conduit.productionready.io/api/tags")
          //  .then((response) => response.json())
          .then((response) => response.data.tags)
      );
    },
    fetchArticles(filter) {
      const url =
        filter.feed.id === "personal"
          ? `https://conduit.productionready.io/api/articles/feed`
          : `https://conduit.productionready.io/api/articles${
              filter ? "?" : ""
            }${filter.limit ? `limit=${filter.limit}` : ""}${
              filter.offset >= 0 ? `&offset=${filter.offset}` : ""
            }${filter.feed.name.includes("#") ? `&tag=${filter.feed.id}` : ""}`;
      return $http.get(url).then((response) => response.data.articles);
    },
  };
});
