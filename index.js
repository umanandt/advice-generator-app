function getData(){

fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data=>(document.querySelector('.title').innerHTML = `<p>Advice - #${data.slip.id}</p>`,
document.querySelector('.description').innerHTML = `<p>"${data.slip.advice}"</p>`));

}
setInterval(getData, 2000);