const nestorURL = 'https://ca.slack-edge.com/T05DE2VJ8TH-U05RQ2YL7GE-5e5fd90314d5-512';
const russURL = 'https://ca.slack-edge.com/T05DE2VJ8TH-U05GUA2HWNL-b8b4ab4f038f-512';
const rossURL = 'https://ca.slack-edge.com/T05DE2VJ8TH-U05P06GEWFL-c10056236ba2-512';
const arrOfImages = [nestorURL, russURL, rossURL];



function switchToRuss() {
    cleanedData.forEach(obj => {
        obj.action.redirect.url = arrOfImages[1];
    })
}
// document.querySelector('#nestor').click()
// let jsonObj;
// function fetchJSON() {
//     fetch('./rules.json') 
//     .then(res => res.json())
//     .then(data => {
//         jsonObj = data
//     })
// }
// fetchJSON();
const fs = require('fs');
const data = fs.readFileSync('./rules.json');
const cleanedData = JSON.parse(data);
console.log(cleanedData);

document.addEventListener('DOMContentLoaded', function() {
    let nestorButton = document.getElementById('russ');
    
    nestorButton.addEventListener('click', function() {
        switchToRuss();
        fs.writeFileSync('./rules.json', JSON.stringify(cleanedData, null, 2), 'utf-8')
    });
});
