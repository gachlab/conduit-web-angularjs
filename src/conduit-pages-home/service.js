import { listArticles } from '../conduit-api-lib/articles'
import { listTags } from '../conduit-api-lib/tags'

export function init() {
  return Promise.all([
    listArticles({
      limit: 10,
      page: 1,
      feed: { id: "all", name: "Global Feed" },
    }),
    listTags(),
  ])
    .then((response) => ({
      articles: response[0],
      tags: response[1],
    }))
    .then((state) => ({
      articles: state.articles.data,
      pages: state.articles.meta.pages,
      tags: state.tags.tags,
      selectedFeed: "all",
      feeds: [
        { id: "personal", name: "Your feed" },
        { id: "all", name: "Global Feed" },
      ],
      selectedPage: 1,
    }))
}

export function onTagSelected(input) {
  return selectFeed({
    feed: {
      id: input.tag.toLowerCase(),
      name: "#" + input.tag,
    },
    state: input.state,
  });
}

export function onFeedSelected(input) {
  return selectFeed({
    feed: input.feed,
    state: input.state,
  });
}

export function onPageSelected(input) {
  return changePage({ page: input.page, state: input.state });
}

function selectFeed(input) {
  if (!input.state.feeds.find((f) => f.id === input.feed.id)) {
    input.state.feeds[2] = input.feed;
  }

  return listArticles({
    limit: 10,
    page: 1,
    feed: input.feed,
  }).then((articles) => ({
    articles: articles.data,
    pages: articles.meta.pages,
    tags: input.state.tags,
    feeds: input.state.feeds,
    selectedFeed: input.feed.id,
    selectedPage: 1,
  }));
}

function changePage(input) {
  return listArticles({
    limit: 10,
    page: input.page,
    feed: input.state.feeds.find(
      (feed) => feed.id === input.state.selectedFeed
    ),
  }).then((response) => ({
    articles: response.data,
    pages: response.meta.pages,
    selectedPage: input.page,
    tags: input.state.tags,
    feeds: input.state.feeds,
    selectedFeed: input.state.selectedFeed,
  }));
}
