(function () {
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");
  const result = document.getElementById("result");
  const noTitleText = "That's not allowed!";
  const yesTitleText = "Will you be my valentine?";

  function showGif(src, alt) {
    result.setAttribute("aria-hidden", "false");
    result.innerHTML = "";
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.onerror = function () {
      result.innerHTML = "<p>Image not found: " + src + "</p>";
    };
    result.appendChild(img);
  }

  function yesOption() {
    showGif("images/cute_meow.gif", "Cute cat");
    document.getElementById("fireworks").classList.add("active");
    if (document.getElementById("mainTitle").textContent === noTitleText) {
      document.getElementById("mainTitle").textContent = yesTitleText;
    }
  }

  function noOption() {
    showGif("images/angry_cat.png", "Angry cat");
    document.getElementById("fireworks").classList.remove("active");
    document.getElementById("mainTitle").textContent = noTitleText;
    // Turn No button into a Yes button
    btnNo.textContent = "Yes";
    btnNo.classList.add("as-yes");
    btnNo.removeEventListener("click", noOption);
    btnNo.addEventListener("click", yesOption);
  }

  btnYes.addEventListener("click", yesOption);
  btnNo.addEventListener("click", noOption);
})();
