// Compute the width of |source| and make the widths of |targets| the same.
// |source| is a selector, and |targets| is an array of selectors.
function matchWidth(source, targets) {
  source = document.querySelector(source);
  let width = source.offsetWidth + 'px';
  for (let target of targets) {
    let elements = document.querySelectorAll(target);
    for (let i = 0; i < elements.length; i++) {
      let target = elements[i];
      target.style.width = width;
    }
  }
  source.style.display = 'none';
}
