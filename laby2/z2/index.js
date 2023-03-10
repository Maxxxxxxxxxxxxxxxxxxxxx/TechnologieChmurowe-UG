const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const now = new Date()
  const date = now.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})
  const time = now.toLocaleTimeString('en-US', {hour12: false})

  const response = { date: date, time: time }
  res.json(response)
})

app.listen(8080, () => {
  console.log('Server listening on port 8080')
})
