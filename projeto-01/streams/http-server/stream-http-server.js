import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = String(Number(chunk.toString()) * -1)

    console.log(transformed)

    callback(null, transformed)
  }
}

// req => readable stream
// res => writable stream
const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullBody = Buffer.concat(buffers).toString()

  console.log(fullBody)

  return res.end(fullBody)
})

server.listen(3334)