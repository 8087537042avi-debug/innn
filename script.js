/* WEBSITE DATA LOAD */

document.getElementById("coupleNames").innerHTML =
    `${websiteData.groomName}
     <span>♥</span>
     ${websiteData.brideName}`;


document.getElementById("welcomeText").innerText =
    websiteData.welcomeText;


document.getElementById("weddingDate").innerText =
    websiteData.date;


document.getElementById("weddingDay").innerText =
    websiteData.day;


document.getElementById("weddingTime").innerText =
    websiteData.time;


document.getElementById("venueName").innerText =
    websiteData.venueName;


document.getElementById("venueAddress").innerText =
    websiteData.venueAddress;


document.getElementById("mainMessage").innerText =
    websiteData.message;


document.getElementById("footerNames").innerText =
    `${websiteData.groomName} ♥ ${websiteData.brideName}`;


/* GOOGLE MAP */

document.getElementById("mapButton").href =
    websiteData.mapLink;


/* VIDEO */

const introVideo =
    document.getElementById("introVideo");

introVideo.src =
    websiteData.video;


/* GALLERY LOAD */

const gallery =
    document.getElementById("gallery");

websiteData.photos.forEach(photo => {

    const img =
        document.createElement("img");

    img.src = photo;

    gallery.appendChild(img);

});


/* REVEAL CARD */

const cover =
    document.getElementById("cover");

cover.addEventListener("click", () => {

    cover.classList.add("open");

});


/* MUSIC */

const music =
    document.getElementById("backgroundMusic");

music.src =
    websiteData.music;


const musicBtn =
    document.getElementById("musicBtn");


let musicPlaying = false;


musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play();

        musicBtn.innerText = "🔊";

        musicPlaying = true;

    } else {

        music.pause();

        musicBtn.innerText = "🔇";

        musicPlaying = false;
    }

});


/* WISH FORM */

const wishForm =
    document.getElementById("wishForm");

const wishesList =
    document.getElementById("wishesList");


wishForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
        document.getElementById("guestName").value;

    const message =
        document.getElementById("guestMessage").value;


    const wishCard =
        document.createElement("div");

    wishCard.classList.add("wish-card");


    wishCard.innerHTML = `

        <h3>${name}</h3>

        <p>${message}</p>

    `;


    wishesList.prepend(wishCard);


    wishForm.reset();

});