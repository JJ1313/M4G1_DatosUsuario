(() => {
  const getData = async () => {
    try{
      const URL = 'https://randomuser.me/api/?results=10';
      const response = await fetch(URL);
      const data = await response.json();
      const usuarios = data.results;

      displayUsers(usuarios);
    }
    catch(error){
      document.getElementById('user-data').innerText = `No se pudieron cargar los datos, intente mas tarde porfavorcito`;
    }
  }
  
  const displayUsers = (usuarios) => {
    const usersDiv = document.getElementById('user-data');

    usuarios.forEach((usuario) => {
      const div = document.createElement('div');
      
      const img = document.createElement('img');
      const name = document.createElement('p');
      const mail = document.createElement('p');
      const phone = document.createElement('p');

      img.setAttribute('src', usuario.picture.large);
      name.innerText = `${usuario.name.first} ${usuario.name.last}`;    
      mail.innerText = usuario.email;
      phone.innerText = usuario.cell;   

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(mail);
      div.appendChild(phone);

      usersDiv.appendChild(div);
    });
  }

  getData(); 
})()
