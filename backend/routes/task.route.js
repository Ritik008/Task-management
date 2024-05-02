const { taskController } = require('../controller')
const validator = require('../middleware/validator')
const { taskValidation } = require('../validation')
const router = require('express').Router()

router.post('/',validator(taskValidation.taskValidationSchema), taskController.addTask)

router.get('/', taskController.getTasks)

router.get('/:id', taskController.getSingleTask)

router.put('/:id',validator(taskValidation.taskUpdateValidationSchema), taskController.updateTask)

router.delete('/:id', taskController.deleteTask)


module.exports = router