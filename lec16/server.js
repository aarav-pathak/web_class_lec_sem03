require('dotenv').config();
const server=require('./src/app')

const PORT=process.env.PORT;

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hash a password
async function hashPassword(plainPassword) {
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  return hash;
}

// Verify a password
async function verifyPassword(plainPassword, hash) {
  const match = await bcrypt.compare(plainPassword, hash);
  return match;
}


server.listen(PORT,(err)=>{
    console.log(`Server is running at ${PORT}`)
})
