import TextTransfer from '/SWAC/swac/TextTransfer.js';

let value = document.getElementById('texttransfer_example1_value');
let status = document.getElementById('texttransfer_example1_status');
document.getElementById('texttransfer_example1_copy').addEventListener('click', async function () {
    status.textContent = await TextTransfer.copy(value.value)
            ? 'Copied.' : 'Could not copy text.';
});
