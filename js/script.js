// Creare l’array di oggetti con le informazioni dei diversi membri del team.
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo:"Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
];
console.log(teamMembers);


//Stampare su console le informazioni di nome, ruolo e la stringa della foto 

const cardContainer = document.querySelector(".row");
// console.log(cardContainer);

let memberCards = "";
for (let i = 0; i < teamMembers.length; i++) {
    let curTeamMember = teamMembers[i];
    console.log(curTeamMember.nome, curTeamMember.ruolo, curTeamMember.foto);
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    //creo gli elementi che voglio inserire all' interno del html
    memberCards += `
            <div class="col">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${curTeamMember.nome}</li>
                        <li class="list-group-item">${curTeamMember.ruolo} </li>
                        <li class="list-group-item">${curTeamMember.foto} </li>
                    </ul>
                </div>
            </div> 
    `;
}
// console.log(memberCards);
cardContainer.innerHTML = memberCards;
