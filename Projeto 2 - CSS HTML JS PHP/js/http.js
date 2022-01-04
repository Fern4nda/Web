// ajax etc

class EasyHTTP {
    //make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //matke HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP PUT request (update)
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP DELETE
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        });

        const resData = await 'Resource Deleted';
        return resData;
    }
}

//get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com',
};

// //Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

//Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
