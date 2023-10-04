import { concert, monthsList, merchandise } from './concerts.js';
import { storedmessages } from './storedmessages.js'

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');
let username = document.getElementById('username');
let useremail = document.getElementById('useremail');
let usermessage = document.getElementById('usermessagetext');
let usersubmitbtn = document.getElementById('usermessagesubmit');
let merchspawner = document.getElementById('merchspawner');
// let menucheck = document.getElementById('menu-bar');
// let menuicon = document.getElementById('hamburgericon');
// let messages = [];

// const { value: email } = Swal.fire({
//     title: 'Input email address',
//     input: 'email',
//     inputLabel: 'Your email address',
//     inputPlaceholder: 'Enter your email address'
// })

// if (email) {
//     Swal.fire(`Entered email: ${email}`)
// }

var email = "";

//testing

// menuicon.innerHTML = `<i class="fa-solid fa-bars fa-2x"></i>`

// let uniquemonths = [
//     ...new Set(concert.map((month) => month.concertMonth)),
// ];

function counttickets(month) {
    let count = 0;
    concert.map((concrt, index) => {
        if (concrt.concertMonth === month) {
            count++;
        }
    })
    console.log(count);
    return count;
}

//testing

//for mapping months original
const monthlyspawnerhtml = monthsList.map((month, index) => {
    if (counttickets(month) !== 0) {
        return `
            <div class="specificmonth">
                    <div class="monthnamestatus">
                        <strong>${month}</strong>
                    </div>
                    <div class="numberoftickets">${counttickets(month)}</div>
                </div>
                <hr>`
    } else {
        return `
            <div class="specificmonth">
                    <div class="monthnamestatus">
                        <strong>${month}</strong>
                        <div class="soldoutbanner">Sold Out</div>
                    </div>
                </div>
                <hr>`
    }
    
}).join('')

let monthlyspawner = document.getElementById('concertmonthlyspawner');


function test() {
    console.log('this is test');
}

test();


const crtid = 12345;

//for mapping all tickets
const ticketspawnerhtml = concert.map((concrt, index) => {
    return `
    <div class="ticketcard">
        <img src="${concrt.concertImage}" alt="" width="300px" height="200px">
        <div class="ticketdetails">
            <strong>${concrt.concertLocation}</strong>
            <h4>${concrt.concertDate}</h4>
            <p>${concrt.concertDesc}</p>
            <button onclick="insidehtml(
                '${concrt.concertImage}',
                '${concrt.concertMonth}',
                '${concrt.concertLocation}',
                '${concrt.concertDate}',
                '${concrt.concertDesc}',
                ${concrt.concertId},
                ${concrt.concertPrice}
                )">Buy Tickets</button>
        </div>
    </div>`
}).join('')



const merchspawnerhtml = merchandise.map((merch, index) => {
    return `
    <div class="ticketcard">
        <div class="merchImage">
            <img src="${merch.merchImage}" alt="" width="300px" height="300px">
        </div>
        <div class="ticketdetails merchdetails">
            <strong>${merch.merchName}</strong>
            <h4>${merch.merchCategory}</h4>
            <p>${merch.merchPrize}</p>
            <button onclick="insidehtml()">Buy Tickets</button>
        </div>
    </div>`
}).join('')

const ticketspawner = document.getElementById('concertticketspawner');

monthlyspawner.innerHTML = monthlyspawnerhtml;
ticketspawner.innerHTML = ticketspawnerhtml;
merchspawner.innerHTML = merchspawnerhtml;

// console.log(storedmessages);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

function savedetails() {
    let message = {
        id: 'um' + Date.now(),
        usern: username.value,
        usere: useremail.value,
        userm: usermessage.value
    }

    storedmessages.push(message);
    console.log(storedmessages);

    alert('message saved from ' + username.value + '\n' + useremail.value + '\n' + usermessage.value);
    // console.log(messages);

    username.value = "";
    useremail.value = "";
    usermessage.value = "";
}

usersubmitbtn.addEventListener("click", savedetails);