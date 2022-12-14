const routes = {
  "/login": { templateId: "login" },
  "/dashboard": { templateId: "dashboard" },
  "/credit": { templateId: "credit" },
};

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate("/login");
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(view);

  // Assignment

  window.document.title = template.title;

  // console.log(`${templateId}`);
}

updateRoute();

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}

window.onpopstate = () => updateRoute();
updateRoute();

// console.log(routes[window.location.pathname]);
