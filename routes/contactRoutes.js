const express = require("express");
const router = express.Router(); 
const { getContact,CreateContact,UpdateContact,DeleteContact,Getcontacts } = require("../controllers/contactController");


router.route("/").get(getContact).post(CreateContact);
router.route("/:id").get(Getcontacts).put(UpdateContact).delete(DeleteContact);





module.exports = router;

