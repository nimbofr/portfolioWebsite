AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Sudoku Solver",
    cardImage: "assets/images/project-page/SudokuSolver.png",
    description: "Developed an interactive Sudoku solver application that enables users to input Sudoku puzzles and visualizes the solving process in real-time. This web-based tool not only identifies and fills in the correct numbers to complete the puzzle but also validates the initial user inputs to ensure puzzles are solvable, enhancing user experience by preventing crashes and providing immediate feedback on puzzle solvability.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://sudokusolver-whgp.onrender.com/",
    Githublink: "https://github.com/nimbofr/sudokuSolver",
  },
  {
    title: "Flashcard App",
    cardImage: "assets/images/project-page/flashcard.png",
    description: "Flashcard App Using React which connects to a Backend.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://flashcard-bj1y.onrender.com/",
    Githublink: "https://github.com/nimbofr/flashcard-app/tree/main/REACT_FLASHCARDS",
  },
  {
    title: "Encryption App",
    cardImage: "assets/images/project-page/encryption.jpg",
    description: "3 different ways to encrypt and decrypt code",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://nimbofr.github.io/encryption-decryption-app/",
    Githublink: "https://github.com/nimbofr/encryption-decryption-app",
  },
  {
    title: "AirBNB Lookalike",
    cardImage: "assets/images/project-page/thinkfulBNB.png",
    description: "HTML and CSS to create visually appealing website.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://nimbofr.github.io/ThinkfulBNB/",
    Githublink: "https://github.com/nimbofr/ThinkfulBNB",
  },
  {
    title: "Recipe Tracker",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe tracker app in which you can add and delete recipes.",
    tagimg: "",
    Previewlink: "https://recipe-tracker-app-kw9d.onrender.com/",
    Githublink: "https://github.com/nimbofr/RecipeApp",
  },
  {
    title: "Reservation App",
    cardImage: "assets/images/project-page/reservationapp.jpg",
    description: "Restaurant Reservation App with a Front-end and Back-end.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://restaurant-reservations-frontend-ctaz.onrender.com/dashboard",
    Githublink: "https://github.com/nimbofr/restaurantReservation",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
