const APIUrl = "http://localhost:5000"

const APIManager = {
  getUsers(){
    return fetch(`${APIUrl}/users`)
    .then(response => response.json())
  },
  getUserWithHousehold(id){
    return fetch(`${APIUrl}/users/${id}?_embed=householdMembers`)
    .then(response => response.json())
  },
  getUserWithAllData(id){
    return fetch(`${APIUrl}/users/${id}?_embed=householdMembers&_embed=waters`)
    .then(response => response.json())
  },
  getUserByEmail(email, password){
    let lowerEmail = email.toLowerCase()
    return fetch(`${APIUrl}/users?email=${lowerEmail}&password=${password}`)
    .then(response => response.json())
  },
  postNew(resource, newItem) {
    return fetch(`${APIUrl}/${resource}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    }).then(data => data.json())
  },
  delete(resource, id){
    return fetch(`${APIUrl}/${resource}/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
  }
}

export default APIManager