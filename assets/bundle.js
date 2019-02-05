document.getElementsByTagName("body")[0].addEventListener("click", event => {
  if (event.target.className === "substrate") {
    hideSubstrate();
    closeModal();
  }
});
function openModal(src, name, description, price) {
  const modal = document.getElementsByClassName("modal")[0];
  modal.style = "display:block";
  modal.getElementsByClassName("modal__image")[0].src = src;
  modal.getElementsByClassName("modal__name")[0].innerHTML = name;
  modal.getElementsByClassName("modal__description")[0].innerHTML = description;
  modal.getElementsByClassName("modal__price")[0].innerHTML = price;
  const tabs = document.getElementsByClassName("tabs")[0];
  tabs.style = "opacity:0.4";
}
function showSubstate() {
  document.getElementsByClassName("substrate")[0].style.opacity = "0.4";
  document.getElementsByClassName("tabs")[0].style.opacity = "0.4";
}
function hideSubstrate() {
  document.getElementsByClassName("substrate")[0].style.opacity = "1";
  document.getElementsByClassName("tabs")[0].style.opacity = "1";
}
function closeModal() {
  const modal = (document.getElementsByClassName("modal")[0].style =
    "display:none");
}

function handleClickOnCross() {
  closeModal();
  hideSubstrate();
}

function handleClickOnTabs(event) {
  const elem = event.currentTarget;
  openModal(
    elem.getElementsByClassName("tabs__image")[0].src,
    elem.getElementsByClassName("tabs__name")[0].innerHTML,
    elem.getElementsByClassName("tabs__description")[0].innerHTML,
    elem.getElementsByClassName("tabs__price")[0].innerHTML
  );
  showSubstate();
}
const table = "tabs";
function createTab(where, nameDevice, src, description, price) {
  const tab = document.createElement("div");
  const body = document.createElement("div");
  const header = document.createElement("div");
  header.className = `${where}__header`;
  body.className = `${where}__body`;

  tab.addEventListener("click", handleClickOnTabs);
  tab.className = `${where}__block`;

  const img = document.createElement("img");
  img.src = src;
  img.className = `${where}__image`;
  img.style.height = "60%";

  const name = document.createElement("p");
  name.className = `${where}__name`;
  name.innerHTML = `<strong>${nameDevice}</strong>`;

  const descr = document.createElement("p");
  descr.innerHTML = description;
  descr.className = `${where}__description`;

  const money = document.createElement("p");
  money.innerHTML = `<span class="${where}__price-symb">$</span><strong><span class="${where}__price-value">${price}</span></strong><span> / month</span>`;
  money.className = `${where}__price`;

  header.appendChild(img);

  body.appendChild(name);
  body.appendChild(descr);
  body.appendChild(money);

  tab.appendChild(header);
  tab.appendChild(body);

  document.getElementsByClassName(where + "__container")[0].appendChild(tab);
}
createTab(
  table,
  "MOBILE",
  "./img/device.svg",
  "Get notifictations about new releases in our mobile app",
  "11"
);
createTab(
  table,
  "DESKTOP",
  "./img/laptop.svg",
  "Enjoy new episodes on your laptop, in browser with our web service, which supports all the platforms.",
  "12"
);
createTab(
  table,
  "TV",
  "./img/monitor.svg",
  "Whatch your favorite seriese at home on large screen with our TV application.",
  "13"
);
