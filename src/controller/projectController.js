import ProjectRepository from "../models/projetc.js";

function findAll(req, res) {
    ProjectRepository.findAll().then((result) => res.json(result));
}

function findProject(req, res) {
    ProjectRepository.findById(req.params.id).then((result) => res.json(result));
}

function meusProjetos(req, res) {
    ProjectRepository.findAll({
        where: {
            user_id_user: req.params.id,
        },
    }).then((result) => res.json(result));
}

function addProject(req, res){
    ProjectRepository.create({
        user_id_user: req.body.user_id_user,
        title_project: req.body.title_project,
        tags_project: req.body.tags_project,
        link_project: req.body.link_project,
        desc_project: req.body.desc_project,
        file_project: req.body.file_project,
        date_project: req.body.date_project
    }).then((result)=>res.json(result));
}

async function updateProject(req, res) {
    await ProjectRepository.update(
        {
            user_id_user: req.body.user_id_user,
            title_project: req.body.title_project,
            tags_project: req.body.tags_project,
            link_project: req.body.link_project,
            desc_project: req.body.desc_project,
            file_project: req.body.file_project,
            date_project: req.body.date_project   
        },
        {
            where: {
                id_project: req.params.id,
            },
        }
    );

    ProjectRepository.findById(req.params.id).then((result)=> res.json(result));
}

async function deleteProject(req, res) {
    await ProjectRepository.destroy({
        where: {
            id_project: req.params.id,
        },
    });

    ProjectRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addProject, findProject, meusProjetos, updateProject, deleteProject};