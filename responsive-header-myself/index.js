const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const itemContainer = document.querySelector(".item-container");
    const links = document.querySelector(".links");

    nav.insertAdjacentElement("afterend", itemContainer);

    ITEM_CONTAINER_STYLE = "display: flex;"
        + "flex-direction: column;"
        + "background-color: gray;"
        + "text-align: center;"
        + "width: 100%;"
        + "color: white;"
        + "font-weight: bold;"
        + "justify-content: space-around;"
        + "height: 150px;";
    itemContainer.style.cssText = ITEM_CONTAINER_STYLE;

    itemContainer.insertAdjacentElement("afterend", links);

    LINKS_STYLE = "display: flex;"
    + "flex-direction: column;"
    + "background-color: gray;"
    + "text-align: center;"
    + "width: 100%;"
    + "color: white;"
    + "font-weight: bold;"
    + "padding: 20px 0px 20px 0px";

    links.style.cssText = LINKS_STYLE;
});