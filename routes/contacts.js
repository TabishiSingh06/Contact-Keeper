const express = require('express')
const router = express.Router();

// @route    GET api/contacts
// @desc     Get all users contact
// @access   Private

router.get('/', (req,res)=>{
    res.send('Get all contacts');
});

// @route     POST api/contacts
// @desc      ADD new contact
// @access    Private

router.post('/', (req,res)=>{
    res.send('Add contacts');
});

// @route     PUT api/contacts/:id
// @desc      UPDATE contact
// @access    Private

router.put('/:id', (req,res)=>{
    res.send('Update Contact');
});

// @route  DELETE api/contacts/:id
// @desc   Delete  contact
// @access Private

router.delete('/:id', (req,res)=>{
    res.send('Delete Contact');
});
module.exports = router;