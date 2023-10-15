function typeEffect(element, text, index, speed) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(function () {
      typeEffect(element, text, index, speed);
    }, speed);
  }
}
function startTyping(paragraph, speed) {
  const text = paragraph.innerHTML;
  paragraph.innerHTML = "";
  typeEffect(paragraph, text, 0, speed);
}

const paragraphs = document.querySelectorAll("#about .about-box p");

const typingSpeed = 50;

for (let i = 0; i < paragraphs.length; i++) {
  setTimeout(function () {
    startTyping(paragraphs[i], typingSpeed);
  }, i * (typingSpeed * paragraphs[i].textContent.length));
}
