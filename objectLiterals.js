function UserPolicy(type) {
    const Users = {
    admin: 'This User is Admin!',
    client: 'This User is Client!',
    salesman: 'This User is Salesman!',
    default: 'Ops, this guy doesn\'t have user profile'
  }

  return Users[type] || Users.default
}

UserPolicy() // "Ops, this guy doesn't have user profile"
UserPolicy('admin') // "This User is Admin!"
