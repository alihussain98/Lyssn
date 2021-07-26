const data = [{ "fname": "esme", "lname": "sanchez", "id": 1892038, "isTherapist": true },

{ "fname": "rick", "lname": "jeps", "id": 1894024, "isTherapist": false },

{ "fname": "angie", "lname": "lange", "id": 1982403, "isTherapist": false },

{ "fname": "renat", "lname": "gros", "id": 1894039, "isTherapist": true },

{ "fname": "bettino", "lname": "yang", "id": 3789204, "isTherapist": true }];

var nameBox = document.getElementById('users');


function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

for (let i = 0; i < data.length; i++) {
    var userList = document.createElement("div");
    userList.className = 'cards';

    userList.innerHTML = capitalize(data[i].lname) + "," + " " + capitalize(data[i].fname);
    nameBox.appendChild(userList);
}

