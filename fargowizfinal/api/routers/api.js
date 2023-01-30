const router = require("express").Router()
const Student = require('../models/student')



router.post('/',async(req,res)=>{
    const{name,email,phonenumber} = req.body
    const record = new Student({name:name,email:email,phonenumber:phonenumber})
   // console.log(record)
    await record.save()
    res.json(record)
})

router.get('/',async(req,res)=>{
   const data = await Student.find()
   res.json(data)
})

router.delete('/deleterecord/:id',async(req,res)=>{
    const id = req.params.id
    await Student.findByIdAndDelete(id)
    res.json({message:"successfully Deleted"})
})


module.exports = router