// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/wasm.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/wasm_bg.wasm");

  // Call the Add function export from wasm, save the result
  //   const addResult = helloWorld.add(24, 24);

  //   // Set the result onto the body
  //   document.body.textContent = `Hello World! addResult: ${addResult}`;

  document.getElementById("mybutton").addEventListener("click", () => {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = helloWorld.add(num1, num2);
  });
};
runWasm();
