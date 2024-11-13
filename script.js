/*Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.*/
const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  function generateCard(member){
    return `<div class="col-md-4">
            <div class="card bg-dark text-white border-0 d-flex flex-row align-items-center" style="height: 120px;">
                <img src="${member.img}" class="rounded-start" style="width: 100px; height: 100px; object-fit: cover;" alt="${member.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold mb-0">${member.name}</h5>
                    <p class="card-subtitle mb-1">${member.role}</p>
                    <p class="card-text"><a href="mailto:${member.email}" class="text-info text-decoration-none">${member.email}</a></p>
                </div>
            </div>
        </div>
    `;
}

  

  const profilo = document.getElementById("profilo");

  teamMembers.forEach(mhanz =>{profilo.innerHTML += generateCard(mhanz)} );


  