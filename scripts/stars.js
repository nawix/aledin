function stars() {
  const colors = ["rgb(143, 206, 0)", "rgb(0, 245, 323)", "rgb(255, 217, 102)"];
  const animations = ["fall-1", "fall-2", "fall-3"];

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = (items) => items[rand(0, items.length - 1)];

  const originPosition = { x: 0, y: 0 };

  const last = {
    starPosition: originPosition,
    mousePosition: originPosition,
  };

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };

  window.onmousemove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const star = document.createElement("span");
    star.className = "star fa-star fa-solid";
    star.style.left = `${mouseX}px`;
    star.style.top = `${mouseY}px`;
    star.style.color = selectRandom(colors);
    star.style.animationName = selectRandom(animations);

    const glow = document.createElement("div");
    glow.className = "glow-point";
    glow.style.left = `${mouseX}px`;
    glow.style.top = `${mouseY}px`;

    last.mousePosition = { x: e.clientX, y: e.clientY };

    document.body.appendChild(glow);
    setTimeout(() => document.body.removeChild(glow), 75);

    if (calcDistance(last.starPosition, last.mousePosition) >= 30) {
      document.body.appendChild(star);
      last.starPosition = last.mousePosition;
      setTimeout(() => document.body.removeChild(star), 1500);
    }
  };
}
stars();
