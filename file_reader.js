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
     let counter = 0;
     alertDiv.innerHTML = '<p> Please provide the following in order to proceed: </p>'
     if (dataTitle.value === "") {
        counter += 1;
        alertDiv.style.display = 'block';
        alertDiv.innerHTML += ' <p> - Report Title </p>';
     } 

     if (dataDate.value === "") {
        counter += 1;
        alertDiv.style.display = 'block';
        alertDiv.innerHTML += '<p> - Report Date </p>';
     } 

     if (dataUploader.value === "") {
        counter += 1;
        alertDiv.style.display = 'block';
        alertDiv.innerHTML += '<p> - Report File </p>';
    } 
    // If all inputs are OK, hide the div
    if (counter === 0) {
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
