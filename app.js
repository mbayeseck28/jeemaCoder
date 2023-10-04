let allUsers = [];
let bouton = document.querySelector('.btnAjouter');
bouton.addEventListener('click', function (e) {
  e.preventDefault();
  let utilisateur = {
    nom: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    email: document.getElementById('email').value,
    telephone: document.getElementById('tel').value,
  };
  allUsers = JSON.parse(localStorage.getItem('utilisateur')) || [];
  allUsers.push(utilisateur);
  localStorage.setItem('utilisateur', JSON.stringify(allUsers));

  //   _______________
  const list = document.querySelector('#list');
  let ligne = document.createElement('tr');
  ligne.innerHTML = `
  <td>${utilisateur.nom}</td>  <td>${utilisateur.prenom} <td>${utilisateur.email} </td><td>${utilisateur.telephone}</td>
  <button type="button" class="btn btn-warning">Modifier</button>
  <button type="button" class="btn btn-danger">Supprimer</button>  `;
  list.appendChild(ligne);
  // __________________

  document.getElementById('nom').value = '';
  document.getElementById('prenom').value = '';
  document.getElementById('email').value = '';
  document.getElementById('tel').value = '';
  console.log(allUsers);
});
