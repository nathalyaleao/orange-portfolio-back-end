import Project from "./projetc.js";
import database from "./src/db.js";

async function addUser(req, res) {
    await database.sync();

    const novoProject = await Project.create({
        user_id_user: '1',
        title_project: 'Portifolio',
        tags_project: 'UX,',
        link_project: 'https://www.figma.com/proto/utDx59m5Opz1lDSN1J4r9I/Desafio---Programa-de-Forma%C3%A7%C3%A3o-5.0?page-id=171%3A2351&type=design&node-id=529-9925&viewport=-1084%2C-439%2C0.09&t=8ru0heFGnVZoDUw6-1&scaling=scale-down&starting-point-node-id=529%3A9727',
        desc_project: 'Portifolio, squad16',
        file_project: 'https://www.figma.com/proto/utDx59m5Opz1lDSN1J4r9I/Desafio---Programa-de-Forma%C3%A7%C3%A3o-5.0?page-id=171%3A2351&type=design&node-id=529-9925&viewport=-1084%2C-439%2C0.09&t=8ru0heFGnVZoDUw6-1&scaling=scale-down&starting-point-node-id=529%3A9727',
        date_project: '25/01/2024'
    })
    console.log(novoProject);
  }
  
  export default { addUser };
