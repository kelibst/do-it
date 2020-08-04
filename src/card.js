const template = `<div class="card shadow">
            <div class="card-img">
                
            </div>
            <div class="card-heading">
                <h4 class="card-title">Banku and Tilapia</h4>
                <p class="card-subtitle">Banku with Okro soup at your service</p>
            </div>
            <div class="card-action">
                <a href="#" class="card-price">$230</a>
            </div>
            </div>`;

const node = document.getElementById('content');

// render about template when function is called

const render = function render(template, node, container = document.createElement('div')) {
  container.classList.add('grid');
  container.innerHTML = template;
  node.appendChild(container);
};


function spitNum(num) {
  let i = 0;
  while (i < num) {
    render(template, node);
    i += 1;
  }
}

export default spitNum;