
export function listTags() {
    return fetch(
        "https://conduit.productionready.io/api/tags"
    ).then((response) => response.json());
}