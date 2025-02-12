// Define image data in JSON format
const imageData = {
    shapes: [
      {
        type: "circle",
        x: 100,
        y: 100,
        radius: 50,
        fill: "orange"
      },
      {
        type: "circle",
        x: 200,
        y: 100,
        radius: 50,
        fill: "yellow"
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
    const svg = createSVGElement("svg", { width: "640", height: "360" });
  
    imageData.shapes.forEach(shape => {
      switch (shape.type) {
        case "circle":
          const circle = createSVGElement("circle", {
            cx: shape.x,
            cy: shape.y,
            r: shape.radius,
            fill: shape.fill
          });
          svg.appendChild(circle);
          break;
        case "circle":
          const element = createSVGElement("circle", {
            x: shape.x,
            y: shape.y,
            width: shape.width,
            height: shape.height,
            fill: shape.fill
          });
          svg.appendChild(circle);
          break;
        // Add cases for other shapes (e.g., triangle, polygon)
      }
    });
  
    container.innerHTML = ""; // Clear previous content
    container.appendChild(svg);
  }
  
  // Generate the image on page load
  generateImage();