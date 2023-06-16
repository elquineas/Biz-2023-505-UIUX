const images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  const badges = document.querySelectorAll("span.badge");
  const image_slides = document.querySelectorAll("img.image_slides");

  //   for (let [index, img] of Object.entries(imge_slides)) {
  //     img.imge_slides = images[index];
  //   }
  image_slides[0].src = images[0];
  image_slides[1].src = images[1];
  image_slides[2].src = images[2];

  const showImage = () => {
    for (let img of image_slides) {
      img.style.display = "none";
    }
    image_slides[0].src = images[slideIndex];
    image_slides[0].style.display = "block";

    for (let badge of badges) {
      badge.classList.remove("select");
    }
    badges[slideIndex].classList.add("select");
  };

  const prev = () => {};
  const next = () => {};
  const currentImage = (pos) => {};
  let slideIndex = 0;
  document
    .querySelector("div.controller_box")
    ?.addEventListener("click", (e) => {
      const target = e.target;
      const className = target.classList;
      const idName = target.idList;
      alert(className);
      if (className.contains("left")) {
        // slideIndex--;
        if (--slideIndex < 0) slideIndex = images.length - 1;
      } else if (className.contains("right")) {
        // slideIndex++;
        if (++slideIndex > images.length - 1) slideIndex = 0;
      } else if (className.value === "badge") {
        // alert("33");
        //span tag의 data-id 값 가져오기
        const id = Number(target.dataset.id);
        slideIndex = id - 1;
      }
      showImage();
    });

  showImage();
});
