class Rectangle { 
  constructor(length, width) { 
    this.length = length 
    this.width = width 
  } 
  
  getArea() { 
    return this.length * this.width 
  }

  getPerimeter() { 
  return this.length * 2 + this.width * 2 
} 

isSquare() { 
  if (this.length === this.width) { 
    return true 
  } else { 
    return false 
  } 
} 
}

class Vehicle { 
  passengers = [] 
  constructor(type, capacity, color) { 
    this.type = type 
    this.capacity = capacity 
    color ? this.color = color : this.color = "black" 
    this.passengers 
  } 
  
  paint(color) { 
    return this.color = color 
  } 
  
  addPassenger(passenger) { 
    if (this.passengers.length === this.capacity) { 
      return -1 
    } 
    
    this.passengers.push(passenger) 
    return this.passengers.length
   } 
  }

class PasswordManager { 
  #password 
  constructor(password) { 
    this.#password = password 
  } 
  checkPassword(attempt){ 
    return attempt === this.#password 
  }
  setPassword(oldPassword, newPassword) { 
    if (oldPassword === this.#password) { 
      this.#password = newPassword 
      return true 
    } 
    return false 
  } 
}

class TodoList {
  #toDo = []
  constructor(title) {
this.title = title
  }

  addItem(description) {
    this.#toDo.push(description)
    return this.#toDo.length
  }

  removeItem(description) {
    const i = this.#toDo.indexOf(description)
    
    if(i === -1) {
      return null
    }
    return this.#toDo.splice(i, 1)[0]
    
  }

  getItems() {
    return [...this.#toDo]
  }

}

class BankAccount {
  

}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
