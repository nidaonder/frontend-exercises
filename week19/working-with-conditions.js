const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`

const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`

let examGrade = prompt("Puan girin")
let textInfo;
let info = document.querySelector('#info');

if (examGrade >= 0 && examGrade <= 100) {
    textInfo = SMILE;
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo += 'AA';
    } else if (examGrade >= 85) {
        textInfo += 'BA';
    } else if (examGrade >= 80) {
        textInfo += 'BB';
    } else if (examGrade >= 75) {
        textInfo += 'CB';
    } else if (examGrade >= 70) {
        textInfo += 'CC';
    } else if (examGrade >= 65) {
        textInfo += 'DC';
    } else if (examGrade >= 60) {
        textInfo += 'DD';
    } else if (examGrade >= 50) {
        textInfo += 'FD';
    } else if (examGrade < 50) {
        textInfo = ` ${FROWN} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
} else {
    textInfo = 'Bilgiler dogru degil!'
}

console.log(textInfo);

info.innerHTML = `${textInfo} -> ${examGrade}`