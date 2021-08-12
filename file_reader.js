const readerDiv = document.getElementById('file-uploader');
const dataTitle = document.getElementById('data-title');
const dataDate = document.getElementById('data-date');
const dataUploader = document.getElementById('data-file');
const generateReportBtn = document.getElementById('report-summ');
const csvBtn = document.getElementById('export-to-csv');
const alertDiv = document.createElement('div');
alertDiv.setAttribute('id', 'input-alert');
readerDiv.appendChild(alertDiv);
alertDiv.style.display = 'none';

function validateInputs() {
     // Check that all inputs have been received
     alertDiv.innerHTML = '<p> Please provide the following in order to proceed: </p>'
     if (dataTitle.value === "") {
         alertDiv.style.display = 'block';
         alertDiv.innerHTML += ' <p> - Report Title </p>';
     } else {
        alertDiv.style.display = 'none';
     }
     if (dataDate.value === "") {
         alertDiv.style.display = 'block';
         alertDiv.innerHTML += '<p> - Report Date </p>';
     } else {
        alertDiv.style.display = 'none';
     }
}

generateReportBtn.addEventListener('click', () => {
   validateInputs();
});

















// TODO: Integrate File Reader API into mapped_results script
    // TODO: Generate report on screen of mapped_results
// TODO: Create an export to CSV script with mapped_results
// TODO: Research a way to cache data until file reader runs again
    // TODO: Write to a .txt or .json, or to a DB
