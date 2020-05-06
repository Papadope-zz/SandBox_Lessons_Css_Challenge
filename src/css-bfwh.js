const instructions = `
    <!-- INSTRUCTIONS -->
    <hr/>
    <p>Put those CSS skills at work and transform the <strong>#droptarget</strong> and <strong>#draggable</strong> elements above to look like the elements displayed in the animated GIF below.</p>
    <p><strong>Note: </strong> The <strong>#droptarget</strong> element needs some extra styling on the <strong>.dragover</strong> class, in order for the dragover effect to be effective. The class is <strong>automatically</strong> added and removed when the user drags the draggable element over the drop target so you don't need to do anything else apart from the CSS styling.</p>
    <p><strong>References:</strong>
      <ul>
        <li>The color of the title strip is <strong>hotpink</strong></li>
        <li>The <strong>width</strong> CSS property sets an element's width.</li>
        <li>The <strong>height</strong> CSS property specifies the height of an element.</li>
        <li>The <strong>float</strong> CSS property places an element on the left or right side of its container, allowing elements to wrap around it.</li>
        <li>The <strong>border</strong> shorthand CSS property sets an element's border.</li>
        <li>The <strong>border-radius</strong> CSS property rounds the corners of an element's outer border edge.</li>
        <li>The <strong>opacity</strong> CSS property sets the opacity of an element.</li>
        <li>The <strong>cursor</strong> CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.</li>
      </ul>
    </p>
    <hr/>
    <img src="https://raw.githubusercontent.com/kostasx/EventLoop/master/Education/tmp/CSS-border-float-width-height-practice.gif?n=123" alt="guide">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
    <hr/>
`;
document.body.innerHTML += instructions;

const droptarget = document.querySelector("#droptarget");

const removeDragOverClass = e => {
  e.preventDefault();
  e.currentTarget.classList.remove("dragover");
};

droptarget.addEventListener("dragover", e => {
  e.preventDefault();
  e.currentTarget.classList.add("dragover");
});

droptarget.addEventListener("drop", removeDragOverClass);
droptarget.addEventListener("dragleave", removeDragOverClass);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
document.body.appendChild(passwordInput);
const textarea = document.createElement("textarea");
textarea.style.display = "none";
textarea.style.width = "100%";
textarea.setAttribute("rows", 10);
document.body.appendChild(textarea);
const decrypt = document.createElement("button");
decrypt.textContent = "Solution";
document.body.appendChild(decrypt);
decrypt.addEventListener("click", function() {
  const password = passwordInput.value;
  CryptoJS.AES.encrypt("Message", "Secret Passphrase");
  const solution = `U2FsdGVkX18aRVAmJfExorF7/NagaP760Q9tsiV5t3qtu2vVB+/t6vLzDhcSw5iRqqElrdee9O/Y5Dn3R8d6Fh0ah48oNRAAedNRRCkbDgvNMiBQ15LF+yFlY9OE1AX90VlhGlaMNjET+cLPFlLvq4yduBTULBXNM8wR4KTJSVKV6URPETD21F5o/1oH6ApXMXgaWZwvKDiIMRJExRk8AFnXbYewfw5SH3p7VdUZvJOlm6g4AB5esnMHRBsdUwN59tv436Yvo8SJJlSQl16ah64KfX1jH28MPfpTFozxFvacIloJ4EbWlzYZN7FjOtGPcTyPd9a/Vg4Pklq9+VTlPvzt3+VkTYx7//EeCFmnCgkLXpOl8ZQjGeerNVTIeqZVA42rL5gXaLWkRpxAom4KvYAz4loEaJOMgB45USmL0GJvt36Tyjc+l8WAjL3qw0nWOTOhhsjLNkxGcgb/1pKL+3/rqmB5xRdl5yaPuIRQTtShWRMT6q2fnpA+WKGPzGcsKi3d6IjZP1V7SUKeZut0t2koQWK0GdtkLoJsdNkmk6vA+WstVER8flLqh+98ZYZkYLzJYxlj4rWEPZ8TS1mZ8Oy3g5VinVKWDZ/VKSvfpsEYLBLIAaIl/1A8UX5KbYy58KMHhqmmfY/9F8n4UbBaR7GEm9PV4yCxjxnH3tYVyEck0TDIIV4KAuoQp7V29boh6LhGxXo1VADoDrBZHACbGA==`;
  const decrypted = CryptoJS.AES.decrypt(
    solution.toString(),
    password
  ).toString(CryptoJS.enc.Utf8);
  textarea.value = decrypted;
  textarea.style.display = "block";
});
