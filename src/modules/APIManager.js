const APIUrl = "http://localhost:5000";

const APIManager = {
  getUsers() {
    return fetch(`${APIUrl}/users`).then((response) => response.json());
  },
  getResourceById(resource, id) {
    return fetch(`${APIUrl}/${resource}/${id}`).then((response) =>
      response.json()
    );
  },
  getUserWithHousehold(id) {
    return fetch(
      `${APIUrl}/users/${id}?_embed=householdMembers`
    ).then((response) => response.json());
  },
  getUserWithAllData(id) {
    return fetch(
      `${APIUrl}/users/${id}?_embed=householdMembers&_embed=waters&_embed=foods`
    )
      .then((response) => response.json())
      .then((user) => {
        return fetch(`${APIUrl}/supplies?userId=${id}&_expand=category`)
          .then((response) => response.json())
          .then((supplies) => {
            supplies.forEach(
              (supply) => (supply.category = supply.category.name)
            );
            user.supplies = supplies;
            return user;
          });
      });
  },
  getUserByEmail(email) {
    let lowerEmail = email.toLowerCase();
    return fetch(`${APIUrl}/users?email=${lowerEmail}`).then((response) =>
      response.json()
    );
  },
  authenticateUser(email, password) {
    let lowerEmail = email.toLowerCase();
    return fetch(
      `${APIUrl}/users?email=${lowerEmail}&password=${password}`
    ).then((response) => response.json());
  },
  postNew(resource, newItem) {
    return fetch(`${APIUrl}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((data) => data.json());
  },
  updateResource(resource, updatedItem) {
    return fetch(`${APIUrl}/${resource}/${updatedItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    }).then((data) => data.json());
  },
  deleteResource(resource, id) {
    return fetch(`${APIUrl}/${resource}/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
};

export default APIManager;
