(function () {
  const btnYes = document.getElementById("btnYes");
  const btnNo = document.getElementById("btnNo");
  const result = document.getElementById("result");

  function yesOption() {
    // Load image (path can be set later)
    const imgSrc = "valentine-image.jpg"; // Change this when you add your image
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Valentine";
    img.onerror = function () {
      result.innerHTML = "<p>Image will appear here.</p>";
    };
    result.setAttribute("aria-hidden", "false");
    result.innerHTML = "";
    result.appendChild(img);
  }

  function noOption() {
    // Turn No into a Yes option
    btnNo.textContent = "Yes";
    btnNo.classList.add("as-yes");
    btnNo.removeEventListener("click", noOption);
    btnNo.addEventListener("click", yesOption);
  }

  btnYes.addEventListener("click", yesOption);
  btnNo.addEventListener("click", noOption);
})();
