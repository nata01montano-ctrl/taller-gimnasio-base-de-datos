//promesa
function getAthletes() {
  return new Promise((resolve, reject) => {
    console.log("Searching athletes...");
    setTimeout(() => {
        const success = true; 

      const athletes = [
        { id: 1, user: "jUAn pErez", status: "inactive", points: 45 },
        { id: 2, user: "mArIa gArCiA", status: "active", points: 88 },
        { id: 3, user: "cArLoS rOdrIguEz", status: "inactive", points: 12 },
        { id: 4, user: "lUciA fErNAnDeZ", status: "active", points: 95 },
        { id: 5, user: "pAbLo mArTiN", status: "inactive", points: 30 }
      ];
    if (success) {
        resolve(athletes);
    } else {

        reject("404 Error");
    }
    }, 1200);
  });
  
}

async function loadDashboard() {
  const userDate = document.getElementById("athletes-container");
  console.log("Loading ...");

  try {
    const data = await getAthletes();

    const cards = data.map(athlete => {
    let level;
    if (athlete.points > 50) {
        level = "Elite";
    } else {
        level = "Amateur";
    }
    return {
        ...athlete,
        user: athlete.user.toUpperCase(),
        level: level
    };
});     

    console.log (" ... ");

    cards.forEach(athlete => {
      const card = document.createElement("div");
      card.className = `card ${athlete.status}`;
      card.id = `athlete-${athlete.id}`;

      card.innerHTML = `
        <h3>${athlete.user}</h3>
        <p>Puntos: ${athlete.points}</p>
        <p>Nivel: ${athlete.level}</p>
        <p>Estado: <span class="status">${athlete.status}</span></p>
        <button>Comprar</button>
      `;

      const button = card.querySelector("button");

      button.addEventListener("click", () => {

        athlete.status = "active";


        card.classList.remove("inactive");
        card.classList.add("active");

        card.querySelector(".status").textContent = "active";
        button.textContent = "Comprovited";
        button.disabled = true;
      });

      userDate.appendChild(card);
    });

  } catch (error) {
    console.error("Error: ", error)
  }
  finally {    
    console.log("Proceso finalizado");
  }
}

loadDashboard();