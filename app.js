let place = document.querySelector(".container .row");

axios.get("https://api.tvmaze.com/shows")
  .then(response => {
    const data = response.data;
    console.log(data[0].name)
       console.log(data[1].name)
    

    data.forEach((show, i) => {
      let maindiv = document.createElement("div");
      maindiv.classList.add("col-3", "mt-3");

      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("style", "width: 18rem;");

      card.innerHTML += `
        <img src="${show.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">Premiere ${show.premiered}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Imdb rating ${show.rating.average}</li>
          <li class="list-group-item">Genre ${show.genres[0]}</li>
          <li class="list-group-item">Language ${show.language}</li>
        </ul>
      `;

      let cardbody = document.createElement("div");
      cardbody.classList.add("card-body");

      let websiteLink = document.createElement("a");
      websiteLink.href = show.officialSite;
      websiteLink.classList.add("card-link", "btn", "btn-primary");
      websiteLink.target = "_blank";
      websiteLink.innerText = "Go to website";

      let details = document.createElement("a");
      details.classList.add("card-link", "btn");
      details.href = "./index2.html";
      details.innerText = "Go to detail";
      details.addEventListener("click", function () {
        localStorage.setItem("indexoffilm", i);
      });

      cardbody.appendChild(websiteLink);
      cardbody.appendChild(details);
      card.appendChild(cardbody);
      maindiv.appendChild(card);
      place.appendChild(maindiv);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

