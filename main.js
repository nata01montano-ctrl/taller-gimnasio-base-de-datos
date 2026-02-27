//promesa
function getAthletes() {
  return new Promise((resolve, reject) => {
    console.log("Searching athletes...");
    setTimeout(() => {
      const athletes = [
        { id: 1, user: "jUAn pErez", status: "inactive", points: 45 },
        { id: 2, user: "mArIa gArCiA", status: "active", points: 88 },
        { id: 3, user: "cArLoS rOdrIguEz", status: "inactive", points: 12 },
        { id: 4, user: "lUciA fErNAnDeZ", status: "active", points: 95 },
        { id: 5, user: "pAbLo mArTiN", status: "inactive", points: 30 }
      ];
      reject("Error al cargar los atletas");
    }, 1200);
  });
  
}

async function loadDashboard() {
  const user = document.getElementById("athletes-container");
  console.log("Cargando atletas...");

  try {
    const data = await getAthletes();

    const cards = data.map(athlete => {
      const formattedName = athlete.user.toUpperCase();

      const level = athlete.points > 50 ? "Elite" : "Amateur";

      return {
        ...athlete,
        user: formattedName,
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

      user.appendChild(card);
    });

  } catch (error) {
    console.error("Error: ", error)
  }
  finally {    
    console.log("Proceso finalizado");
  }
}

loadDashboard();