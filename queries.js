// Creating routes for CRUD operations


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mczionjohnson',
  host: 'localhost',
  database: 'todoapp',
  password: 'abc',
  port: 5432,
})

// get all users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

// get all user by Id
const getUserById = (request, response) => {
const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

// create new user
const createUser = (request, response) => {
const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`User added with ID: ${results.insertId}`)
    })
}

// update an existing user
const updateUser = (request, response) => {
const id = parseInt(request.params.id)
const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

// delete user by ID
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

module.exports = {
getUsers,
getUserById,
createUser,
updateUser,
deleteUser,
}