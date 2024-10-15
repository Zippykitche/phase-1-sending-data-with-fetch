// Add your code here
function submitData(name,email){
    const data = {
        name: name,
        email: email
      };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        console.log('success:', json);

        const newId = json.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New User ID: ${newId}`;
        document.getElementById('output').appendChild(idElement);

        return json;
    })
    .catch(error => {
        console.error('Error:', error);
        
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`; 
        errorElement.style.color = 'red'; 
        
        document.getElementById('output').appendChild(errorElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('user-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        submitData(name, email);
    });
});
