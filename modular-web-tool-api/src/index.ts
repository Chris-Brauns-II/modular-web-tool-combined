import * as express from 'express'

const PORT = 5000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!!\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);
