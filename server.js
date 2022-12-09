import express from 'express'
const app = express()
const port = 3000
const todos = 
//database
[
  {id: 1, todo: "learn express", done: false },
  {id: 2, todo: "learn js", done: true },
  {id: 3, todo: "learn react", done: false }
]

app.get('/', (req, res) => {
  res.send('Ola Mundo!')
})

app.get('/api/v1/todos', (req, res) => {
  res.json (todos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})