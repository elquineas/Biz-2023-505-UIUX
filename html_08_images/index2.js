document.addEventListener("DOMContentLoaded", () => {
  const image_view_box = document.querySelector("div.image_view");
  const image_view = image_view_box?.querySelector("img");

  const tickerOnCLickHandler = (event) => {
    const target = event.target;
    image_view.src = target.src;
  };

  const tickerBox = document.querySelector("div.image_ticker");
  tickerBox?.addEventListener("click", tickerOnCLickHandler);

  const tickerImages = document.querySelectorAll("div.image_box img");
});
