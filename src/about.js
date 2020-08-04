const template = `<div class="about-container" id="about">
                <div class="about-img"></div>
                <div class="about-content">
                <h1 class="about-header">About Ghana Cuisine</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis molestias. Soluta natus
                    temporibus aspernatur veniam ab voluptatum repellendus saepe delectus quia ea, veritatis inventore
                    incidunt nulla fugiat earum, aliquam doloremque animi laudantium libero doloribus id corporis ipsam
                    quo. Fugiat maxime dicta natus eum, nihil eaque est animi soluta iure molestias fuga provident minus
                    nesciunt debitis veniam. Laudantium cupiditate neque quam velit? Omnis distinctio facilis cumque
                    odit? Molestias delectus eius nesciunt ab itaque ipsa, ullam repellat odio commodi sed, eum tempore
                    velit! Quas quidem mollitia, enim obcaecati debitis deserunt quasi aliquam error labore similique
                    dolor consequatur. Itaque fuga aliquam nulla.
                </div>
                </div>`;

const node = document.getElementById('content');

const render = function render(template, node, container = document.createElement('div')) {
  container.classList.add('about');
  container.innerHTML = template;
  node.appendChild(container);
};


function about(num) {
  let i = 0;
  while (i < num) {
    render(template, node);
    i += 1;
  }
}

export default about;