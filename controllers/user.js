const User = require("../models/users")

async function handleGetAllUsers(req,res) {
    const allDBUsers = await User.find({})
    return res.json(allDBUsers)
}
async function handleGetAllUserbyId(req,res) {
    const user = await User.findById(req.params.id)
    if(!user) return end.status(404).json({ error:"Not Found" })
}
async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id , {email:"changed_corrupted"})
    return res.json({ msg:"success" })
}
async function handleDeleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ msg:"success" })
}
async function handleCreateNewUser(req,res) {
    const body = req.body
    if(!body || !body.first_name)   
    return res.status(400).json({ msg:"all fields to be filled" })
    
    const result = await User.create({
        first_name: body.first_name,
        email: body.email
    })
    return res.status(201).json({msg:"created", id:result._id}) 
}


module.exports = {
    handleGetAllUsers,
    handleGetAllUserbyId,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}