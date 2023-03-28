const router = require('express').Router()
const employeeController = require('../controllers/employee')

router.post('/employee',employeeController.employeeEnrollment)

router.get('/alldata',employeeController.findAllData)

router.get('/databysalary',employeeController.finddataBySalary)

router.get('/databyexp',employeeController.finddataByExp)

router.get('/databygrad',employeeController.finddataByGrad)

router.put('/databysalary',employeeController.updatedataBySalary)

router.delete('/employeedata',employeeController.deleteEmployeedata)




module.exports = router