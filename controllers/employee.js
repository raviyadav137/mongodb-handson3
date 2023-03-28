const {Information} = require('../models/info')
const detail = require('../APIData/Apidata')

const employeeEnrollment = async(req,res)=>{
    try{
    const result = await Information.insertMany(detail);
    res.send(result)
    }
    catch(err){
        console.log(err.message);
        res.send('Error in student enrollement')
    }
        
}

const findAllData = async(req,res)=>{
    try{
        const result = await Information.find()
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling database Operation')
    }
}

const finddataBySalary = async(req,res)=>{
     try{
        const result = await Information.find({salary:{$gt:'30000'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling database Operation')
    }
}

const finddataByExp = async(req,res)=>{
    try{
        const result = await Information.find({'overallExp':{$gt:'1'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling database Operation')
    }
}

const finddataByGrad = async(req,res)=>{
    try{
        const result = await Information.find({$and:[{'yearGrad':{$gt:2015}},{'overallExp':{$gt:'1'}}]})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling db Operation')
    }
}

const updatedataBySalary = async(req,res)=>{
    try{
        const result = await Information.updateOne({department:'HR'},{$set:{salary:'65000'}})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling database Operation')
    }
}

const deleteEmployeedata = async(req,res)=>{
    try{
        const result = await Information.deleteMany({lastCompany:'Y'})
        res.send(result)
        
    }catch(err){
        console.log(err)
        return res.status(500).send('Something went wrong whlie calling database Operation')
    }
}


module.exports = {employeeEnrollment,findAllData,finddataBySalary,finddataByExp,finddataByGrad,updatedataBySalary,deleteEmployeedata}