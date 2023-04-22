const express = require("express") 
const {
    handleGetAllUsers,
    handleGetAllUserbyId,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user")
const router = express.Router()

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)


router.route("/:id")
    .get(handleGetAllUserbyId)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports =  router
    