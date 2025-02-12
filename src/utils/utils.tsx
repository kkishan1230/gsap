export function splitText(container: any) {
  const chars = [...container.innerText];
  container.innerText = "";

  const spans = chars.map((char) => {
    const span = document.createElement("div");
    span.textContent = char;
    span.style.display = "inline-block";
    container.appendChild(span);

    return span;
  });

  return spans;
}
