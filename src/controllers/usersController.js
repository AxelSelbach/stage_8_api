const appError = require("../utils/appError")

class usersController {
  create(request, response) {
    const { name, email, password } = request.body

    if(!name){
      throw new appError("Nome é obrigatório!")
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = usersController
