const authElement = document.getElementById("auth-element");
const displayElement = document.getElementById("display-element");

export const clickHandler = async (e) => {
  e.preventDefault();

  const clickElement = e.target;
  const clickId = clickElement.id;
  const clickType = clickElement.getAttribute("data-label");

  console.log("CLICK HANDLER");
  console.log(clickId);
  console.log("CLICK TYPE");
  console.log(clickType);

  if (clickType === "pwToggle") await runPwToggle();
  if (clickType === "auth-submit") await runAuthSubmit();
};

export const keyHandler = async (e) => {};

if (authElement) {
  authElement.addEventListener("click", clickHandler);
  authElement.addEventListener("keydown", keyHandler);
}

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
  displayElement.addEventListener("keydown", keyHandler);
}
