var i = 0,
  text;
text = "Pronađite nešto za sebe!";

function typ() {
  if (i < text.length) {
    document.querySelector(".search-bar")[0].placeholder += text.charAt(i);
    i++;
    setTimeout(typ, 50);
  }
}
typ();
