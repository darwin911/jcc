function createGridContainer() {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("grid");
  rowContainer.id = "grid";
  return rowContainer;
}

function createGridItem(item) {
  const outerWrapperDiv = document.createElement("div");
  outerWrapperDiv.classList.add("grid-item", item.ballType);
  outerWrapperDiv.setAttribute("data-price", item.price.toString());
  return outerWrapperDiv;
}

function createInnerDollarElement(price) {
  const innerDollarElement = document.createElement("div");
  innerDollarElement.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    trailingZeroDisplay: "stripIfInteger",
  }).format(price);
  innerDollarElement.classList.add("item-price");
  return innerDollarElement;
}

function enhanceForOwnedItem(outerWrapperDiv, owner) {
  outerWrapperDiv.classList.add("grayout");
  outerWrapperDiv.setAttribute("data-name", owner);

  const tooltipContainer = document.createElement("div");
  tooltipContainer.classList.add("tool");

  const tooltipText = document.createElement("div");
  tooltipText.innerText = owner;
  tooltipText.classList.add("toolttext");

  tooltipContainer.appendChild(tooltipText);

  outerWrapperDiv.appendChild(tooltipContainer);
}

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector("article.grid-container");
  const rowContainer = createGridContainer();
  const { campaignData } = window;

  campaignData.forEach((row) => {
    row.forEach((item) => {
      const outerWrapperDiv = createGridItem(item);
      const innerDollarElement = createInnerDollarElement(item.price);

      outerWrapperDiv.appendChild(innerDollarElement);

      if (item.owner) {
        enhanceForOwnedItem(outerWrapperDiv, item.owner);
      }

      rowContainer.appendChild(outerWrapperDiv);
    });
  });

  gridContainer.appendChild(rowContainer);
});
