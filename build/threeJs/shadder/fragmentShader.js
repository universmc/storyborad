// fragmentShaderSource.js
const fragmentShaderSource = `
  precision mediump float;
  varying vec4 vColor;

  void main() {
    gl_FragColor = vColor;
  }
`;

export default fragmentShaderSource;