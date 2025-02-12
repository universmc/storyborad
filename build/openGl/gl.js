function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
  
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
  
    return shader;
  }
  
  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
  
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
      return null;
    }
  
    return program;
  }
  
  const canvas = document.getElementById('myCanvas');
  const gl = canvas.getContext('webgl');
  
  // Définir les dimensions du canvas
  canvas.width = 610;
  canvas.height = 340;
  
  // Vertex shader source
  const vertexShaderSource = `
    attribute vec2 aPosition;
    attribute vec4 aColor;
    varying vec4 vColor;
  
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
      vColor = aColor;
    }
  `;
  
  // Fragment shader source
  const fragmentShaderSource = `
    precision mediump float;
    varying vec4 vColor;
  
    void main() {
      gl_FragColor = vColor;
    }
  `;
  
  // Compiler les shaders et créer le programme
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createProgram(gl, vertexShader, fragmentShader);
  
  // Utiliser le programme
  gl.useProgram(program);
  
  // Données des sommets (positions et couleurs)
  const vertices = [
    -0.5, -0.5, 1.0, 0.0, 0.0, 1.0, // Sommet inférieur gauche (rouge)
    0.5, -0.5, 0.0, 1.0, 0.0, 1.0, // Sommet inférieur droit (vert)
    0.0,  0.5, 0.0, 0.0, 1.0, 1.0  // Sommet supérieur (bleu)
  ];
  
  // Créer un buffer et envoyer les données
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
  // Attribut position
  const positionLocation = gl.getAttribLocation(program, 'aPosition');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 6 * 4, 0);
  
  // Attribut couleur
  const colorLocation = gl.getAttribLocation(program, 'aColor');
  gl.enableVertexAttribArray(colorLocation);
  gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 6 * 4, 2 * 4);
  
  // Dessiner le triangle
  gl.drawArrays(gl.TRIANGLES, 0, 3);