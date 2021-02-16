const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/api/todos', async(req, res)=>{
    try{
        //db.Todo.findAll() will return array of objects .. save into variables 
      const todos = await db.Todo.findAll()
      //send whole list of json data to front end 
      res.json(todos)

    }catch(err){
    res.status(500).send(err)
    }


})

router.post('/api/todos', async (req, res)=>{
  //async await function ... 
  //wait for create.. 
  try{

    await db.Todo.create(req.body)
    res.status(200).send()
  }
  catch(err){
     res.status(500).send(err)
  }  

})

router.put('/api/todos/:id', async (req, res) => {

  try {
    const id = req.params.id

    console.log(req.body)

    await db.Todo.update(req.body, {
      where: { id }
    })
    res.status(200).send()
  } catch(err) {
    res.status(500).send(err)
  }
})



router.delete('/api/todos/:id', async(req, res)=>{
    try{
        const id = req.params.id
        await db.Todo.destroy({
           where:{id}
        })
        res.status(200).send()
    }catch(err){
        res.status(500).send()
    }

})

module.exports = router