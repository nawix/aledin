var i = 0,
  text;
text = "Pronađite nešto za sebe!";

function typ() {
  if (i < text.length) {
    document.getElementsByName("input")[0].placeholder += text.charAt(i);
    i++;
    setTimeout(typ, 70);
  }
}
typ();
