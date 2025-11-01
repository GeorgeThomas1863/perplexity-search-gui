export const buildInputForm = async () => {
  const inputFormWrapper = document.createElement("div");
  inputFormWrapper.id = "input-form-wrapper";

  const queryListItem = await buildQueryListItem();
  const optionsListItem = await buildOptionsListItem();
  const buttonListItem = await buildButtonListItem();

  inputFormWrapper.append(queryListItem, optionsListItem, buttonListItem);

  return inputFormWrapper;
};

export const buildQueryListItem = async () => {
  const queryListItem = document.createElement("li");
  queryListItem.id = "query-list-item";

  const queryLabel = document.createElement("label");
  queryLabel.id = "query-label";
  queryLabel.setAttribute("for", "query-input");
  queryLabel.textContent = "Query";

  const queryInput = document.createElement("input");
  queryInput.type = "text";
  queryInput.name = "query-input";
  queryInput.id = "query-input";
  queryInput.className = "query-input";
  queryInput.placeholder = "Enter your search here";

  queryListItem.append(queryLabel, queryInput);
  return queryListItem;
};

export const buildOptionsListItem = async () => {};

export const buildButtonListItem = async () => {
  const buttonListItem = document.createElement("li");
  buttonListItem.id = "button-list-item";

  const button = document.createElement("button");
  button.id = "submit-button";
  button.className = "btn-submit";
  button.textContent = "SEARCH";
  button.setAttribute("data-label", "submit-button");

  buttonListItem.append(button);
  return buttonListItem;
};
