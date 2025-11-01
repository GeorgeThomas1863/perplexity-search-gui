import { buildReturnForm } from "./forms/return-form.js";
import { sendToBack } from "./util/api-front.js";
import { EYE_CLOSED_SVG, EYE_OPEN_SVG } from "./util/define-things.js";

export const runAuthSubmit = async () => {
  const authPwInput = document.getElementById("auth-pw-input");
  if (!authPwInput || !authPwInput.value) return null;

  const data = await sendToBack({ route: "/site-auth-route", pw: authPwInput.value });
  if (!data || !data.redirect) return null;

  window.location.href = data.redirect;
  return data;
};

export const runSearchSubmit = async () => {
  const searchSubmitRoute = await sendToBack({ route: "/get-backend-value-route", key: "searchSubmitRoute" });
  if (!searchSubmitRoute) return null;

  const queryInput = document.getElementById("query-input");

  const data = await sendToBack({ route: searchSubmitRoute, query: queryInput.value });
  await buildReturnForm(data);
};

//-------------------------

export const runPwToggle = async () => {
  const pwButton = document.querySelector(".password-toggle-btn");
  const pwInput = document.querySelector(".password-input");

  console.log(pwButton);
  console.log(pwInput);
  const currentSvgId = pwButton.querySelector("svg").id;

  if (currentSvgId === "eye-closed-icon") {
    pwButton.innerHTML = EYE_OPEN_SVG;
    pwInput.type = "text";
    return true;
  }

  pwButton.innerHTML = EYE_CLOSED_SVG;
  pwInput.type = "password";
  return true;
};
