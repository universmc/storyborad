// Define image data in JSON format
const imageData = {
    shapes: [
      {
        type: "circle",
        x: 100,
        y: 100,
        radius: 50,
        fill: "red"
      },
      {
        type: "circle",
        x: 250,
        y:100,
        radius: 50,
        fill: "geen"
      },
      {
        type: "circle",
        x: 250,
        y:100,
        radius: 50,
        fill: "bleu"
      },
      // Add more shapes as needed
    ]
  };
  
  // Function to create SVG elements
  function createSVGElement(type, attributes) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", type);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }
  
  // Function to generate the SVG image
  function generateImage() {
    const container = document.getElementById("image-container");
    const svg = createSVGElement("svg", { width: "440", height: "160" });
  
    imageData.shapes.forEach(shape => {
      switch (shape.type) {
        case "circle":
          const circleR = createSVGElement("circle", {
            cx: shape.x,
            cy: shape.y,
            r: shape.radius,
            fill: shape.fill
          });
          svg.appendChild(circle);
          break;
        case "circle":
          const circleV = createSVGElement("circle", {
            x: shape.x,
            y: shape.y,
            width: shape.width,
            height: shape.height,
            fill: shape.fill
          });
          svg.appendChild(circle);
          break;
        // Add cases for other shapes (e.g., triangle, polygon)
        case "circle":
          const circleB = createSVGElement("circle", {
            x: shape.x,
            y: shape.y,
            width: shape.width,
            height: shape.height,
            fill: shape.fill
          });
          svg.appendChild(circle);
          break;
      }
    });
  
    container.innerHTML = ""; // Clear previous content
    container.appendChild(svg);
  }
  
  // Generate the image on page load
  generateImage();