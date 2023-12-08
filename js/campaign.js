document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector("article.grid-container");

  const rowContainer = document.createElement("div");
  rowContainer.classList.add("grid");
  rowContainer.id = "grid";

  const { campaignData } = window;

  for (let i = 0; i < campaignData.length; i++) {
    for (let j = 0; j < campaignData[i].length; j++) {
      const item = campaignData[i][j];
      const outerWrapperDiv = document.createElement("div");
      outerWrapperDiv.classList.add("grid-item", item.ballType);
      outerWrapperDiv.setAttribute("data-price", item.price.toString());

      const innerDollarElement = document.createElement("div");
      innerDollarElement.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        trailingZeroDisplay: "stripIfInteger",
      }).format(item.price);
      innerDollarElement.classList.add("item-price");

      outerWrapperDiv.appendChild(innerDollarElement);

      if (item.owner) {
        outerWrapperDiv.classList.add("grayout");
        outerWrapperDiv.setAttribute("data-name", item.owner);

        const tooltipContainer = document.createElement("div");
        tooltipContainer.classList.add("tool");

        const tooltipText = document.createElement("div");
        tooltipText.innerText = item.owner;
        tooltipText.classList.add("toolttext");

        tooltipContainer.appendChild(tooltipText);

        outerWrapperDiv.appendChild(tooltipContainer);
      }

      rowContainer.appendChild(outerWrapperDiv);
    }
  }

  gridContainer.appendChild(rowContainer);
});
