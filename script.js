let queue = [];

function enqueue() {
  let color = document.getElementById("colorPicker").value;
  let element = `<div class="queue-element" style="background-color: ${color}" onclick="removeElement(this)"></div>`;
  document.getElementById("queue").innerHTML += element;
  queue.push(color);
}

function dequeue() {
  if (queue.length === 0) {
    alert("A fila está vazia!");
    return;
  }
  document.getElementById("queue").firstChild.remove();
  queue.shift();
}

function removeElement(element) {
  element.remove();
  let index = Array.from(element.parentNode.children).indexOf(element);
  queue.splice(index, 1);
}