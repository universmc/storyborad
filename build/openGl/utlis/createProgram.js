// createProgram.js
const gl = canvas.getContext('webgl');
  
if (!gl) {
  console.error('Impossible d\'obtenir le contexte WebGL.');
  return;
}
export default function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
  
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
      gl.deleteProgram(program); // Important: Supprimer le programme si le lien a échoué
      return null;
    }
  
    return program;
  }