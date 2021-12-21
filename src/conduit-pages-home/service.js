const initialState = {
  articles: { data: undefined, availablePages: undefined, selectedPage: undefined },
  tags: ['test', 'test2'],
  feeds: [
    { id: "personal", name: "Your feed", selected: false },
    { id: "all", name: "Global Feed", selected: true },
  ],

}

export function init(dependencies) {
  return () => Promise.all([
    dependencies.listArticles({
      limit: 10,
      page: 1,
      feed: { id: "all", name: "Global Feed" },
    }),
    dependencies.listTags(),
  ])
    .then((response) => ({
      articles: response[0],
      tags: response[1].tags.length > 0 ? response[1].tags : initialState.tags,
    }))
    .then((state) => Object.assign({}, initialState, {
      articles: Object.assign({}, initialState.articles, {
        data: state.articles.data,
        availablePages: state.articles.meta.pages,
        selectedPage: 1
      }),
      tags: state.tags,
    }))
}

export function onFeedSelected(dependencies) {
  return input => {
    return Promise.resolve(Object.assign({}, input.state))
  }
}

export function onTagSelected(dependencies) {
  return input => {
 
    return Promise.resolve(Object.assign({}, input.state))
  }
}