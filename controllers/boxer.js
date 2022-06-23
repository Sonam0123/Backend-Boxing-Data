const express = require("express")
const router = express.Router()

const Boxer = require('../models/Boxer')

router.get("/", (req, res) => {
    Boxer.find()
    .then(boxer => res.json(boxer))
})

router.get("/:name", (req, res) => {
    Boxer.find({name: req.params.name})
    .then(boxer => res.json(boxer))
})

router.post("/", (req, res) => {
    console.log(req.body);
    Boxer.create(req.body)
    .then(boxer => {
        res.json(boxer)
    })
})

router.put('/:name', (req, res) => {
    Boxer.findOneAndUpdate(
        {name:req.body.name},
        {
          name: req.body.name,
          wins: req.body.wins,
          losses: req.body.losses,
          knockouts: req.body.knockouts,
          image: req.body.image,
        },
        {new: true})
        .then(boxer => {
            res.json(boxer)
        })
})

router.delete('/:id', (req, res) => {
    Boxer.findOneAndDelete({_id:req.params.id})
    .then(boxer => {
        res.json(boxer)
    })
})


module.exports = router

