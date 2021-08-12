const { request, response} = require('express');
const Usuario = require('../models/usuario');
const Experto = require('../models/experto');
const Tool = require('../models/tool');

const adminIsLogin = async (req, res) => {

    res.status(200).json({msg: "Sesion es valida"})
}
const getUser = async (req, res) => {
    const [user] = await Promise.all([
        Usuario.find()
     ])

    res.status(200).json({user})
}

const userUpdate = async (req, res) => {
    const { id } = req.query;
    const {estado, nombre, correo, location, position, rol} = req.body;
    if (!id || !estado || !nombre || !correo || !location || !position || !rol) {
        res.status(404).json({msg: "Hace falta datos"})
    }
    
    const userGuardado = await Usuario.findById(id);
    let contrasena = userGuardado.password

    let todo = {id, estado, nombre, correo, contrasena, location, position, rol}
    const user = await Usuario.findByIdAndUpdate(id, todo);

    res.status(200).json(user)
}

const userDelete = async (req, res) => {
    const {id} = req.query;

    if(!id){
        res.status(401).json({msg: 'id no valida'})
    }

    const user = await Usuario.findByIdAndDelete( id );

    res.status(200).json({user, mensaje: "Experto eliminado"})
}

const getExpert = async (req, res) => {
    const [expert] = await Promise.all([
        Experto.find()
     ])

    res.status(200).json({expert})
}

const expertUpdate = async (req, res) => {
    const { id } = req.query;
    const {estado, nombre, category, correo, phoneNumber, company, experience} = req.body;
    if (!id || !estado || !nombre || !correo ||!category ||!company ||!phoneNumber ||!experience) {
        res.status(404).json({msg: "Hace falta datos"})
    }

    let todo = {id, estado, nombre, category,correo,phoneNumber, company, experience}
    const expert = await Experto.findByIdAndUpdate(id, todo);

    res.status(200).json(expert)
}

const expertDelete = async (req, res) => {
    const {id} = req.query;

    if(!id){
        res.status(401).json({msg: 'id no valida'})
    }

    const expert = await Experto.findByIdAndDelete( id );

    res.status(200).json({expert, mensaje: "Experto eliminado"})
}

const getTools = async (req, res) => {
    const [tools] = await Promise.all([
        Tool.find()
     ])

    res.status(200).json({tools})
}

const toolsUpdate = async (req, res) => {
    const { id } = req.query;
    const {estado, nombre, category, description} = req.body;
    if (!id || !estado || !nombre ||!category ||!description) {
        res.status(404).json({msg: "Hace falta datos"})
    }

    let todo = {id, estado, nombre, category, description}
    const tools = await Tool.findByIdAndUpdate(id, todo);

    res.status(200).json(tools)
}

const toolsDelete = async (req, res) => {
    const {id} = req.query;

    if(!id){
        res.status(401).json({msg: 'id no valida'})
    }

    const tools = await Tool.findByIdAndDelete( id );

    res.status(200).json({tools, mensaje: "Herramienta eliminada"})
}


module.exports = {
    adminIsLogin,
    getUser,
    userUpdate,
    userDelete,
    expertUpdate, 
    expertDelete,
    getExpert,
    getTools,
    toolsUpdate,
    toolsDelete
}