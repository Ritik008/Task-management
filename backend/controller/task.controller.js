const {Task} = require('../model')
const {createError} = require('../utils/error')

const addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    }catch(error) {
        next(error)
    }
}

const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    }catch(error) {
        next(error)
    }
}

const getSingleTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        if(!task) {
            return next(createError(404, 'Task not found'))
        }
        res.status(200).json(task)
    }catch(error) {
        next(error)
    }
}

const updateTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true})
        if(!task) {
            return next(createError(404, 'Task not found'))
        }
        res.status(200).json(task)
    }catch(error) {
        next(error)
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Task.findByIdAndDelete(id)
        if(!task) {
            return next(createError(404, 'Task not found'))
        }
        res.status(200).json(task)
    }catch(error) {
        next(error)
    }
}

module.exports = {
    addTask,
    getTasks,
    updateTask,
    getSingleTask,
    deleteTask
}

