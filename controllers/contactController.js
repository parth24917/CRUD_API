
const asyncHandler =  require("express-async-handler");
const Contact = require("../models/contactmodel");
const getContact = asyncHandler(async(req,res) => 
    {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    });

const CreateContact = asyncHandler(async(req,res) => 
        {
            console.log("The request body is : ",req.body);
            const {name, email, phone}=req.body;
            if(!name || !email || !phone)
                {
                    res.status(400);
                    throw new Error("All fields are mandatory !");
                }

                const contact = await contact.create({
                    name,
                    email,
                    phone,
                });
            res.status(201).json(contact);
        });

 const UpdateContact =asyncHandler(async(req,res) => 
    {
        const contact = await Contact.findById(req.params.id);
        if(!contact)
        {
            res.status(404);
            throw new console.error( "Contact not found");
        }
        const updatedcontact = await Contact.findByIdandUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                }
        );
        res.status(200).json(updatedcontact)});
   
const DeleteContact = asyncHandler(async(req,res) => 
    {
        const contact = await Contact.findById(req.params.id);
        if(!contact)
        {
            res.status(404);
            throw new console.error( "Contact not found");
        }
        await Contact.remove();
        res.status(200).json(contact)});
   
const Getcontacts = asyncHandler(async(req,res) => 
    {   const contact = await Contact.findById(req.params.id);
        if(!contact)
        {
            res.status(404);
            throw new console.error( "Contact not found");

            
        }
        res.status(200).json(contact)});
    
module.exports = { getContact,CreateContact,UpdateContact,DeleteContact,Getcontacts };
