const CLIENT_ID = 'SEU_CLIENT_ID';
const API_KEY = 'SUA_API_KEY';
const DISCOVERY_DOCS = ["https://people.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = 'https://www.googleapis.com/auth/contacts';

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(() => {
        console.log('API carregada. Inicializando cliente...');
        if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
            gapi.auth2.getAuthInstance().signIn();
        }
    }).catch(err => {
        console.error('Erro ao inicializar o cliente:', err);
    });
}

function addContact(name, phone, email) {
    const contact = {
        "names": [{ "givenName": name }],
        "phoneNumbers": [{ "value": phone }],
        "emailAddresses": [{ "value": email }]
    };

    gapi.client.people.people.createContact({
        resource: contact
    }).then(response => {
        console.log('Contato adicionado com sucesso:', response);
        alert('Contato adicionado com sucesso!');
    }).catch(err => {
        console.error('Erro ao adicionar contato:', err);
        alert('Erro ao adicionar contato.');
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    addContact(name, phone, email);
});

window.onload = handleClientLoad;