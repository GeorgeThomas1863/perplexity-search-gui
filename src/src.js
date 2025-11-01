import Perplexity from "@perplexity-ai/perplexity_ai";

import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

// Initialize the client (uses PERPLEXITY_API_KEY environment variable)
const client = new Perplexity({
  apiKey: CONFIG.PERPLEXITY_API_KEY,
});

export const runPerplexitySearch = async (searchInput) => {
  console.log("SEARCH INPUT");
  console.log(searchInput);

  const params = {
    query: searchInput,
    model: "sonar-pro",
    maxResults: 10,
    includeSources: true,
    maxTokensPerPage: 1024,
    // include_images: false,
    // include_text: true,
    // include_code: false,
    // include_table: false,
    // include_image_url: false,
    // include_image_caption: false,
    // include_image_description: false,
  };

  const search = await client.search.create(params);

  const searchArray = [];
  for (const result of search.results) {
    console.log("RESULT");
    console.log(result.title);
    console.log(result.url);

    const storeModel = new dbModel(result, "perplexitySearch");
    await storeModel.storeAny();

    searchArray.push(result);
  }

  return searchArray;
};
