
document.getElementById("formInscription").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));
  
  const response = await fetch("https://docs.google.com/spreadsheets/d/1qSQy7A3pgcL8JNF3bMfDEV3Upw7zGNJP_ukg6cNzkAU/edit?gid=0#gid=0",{
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.ok) {
    document.getElementById("msg").style.display = "block";
    e.target.reset();
  } else {
    alert("Erreur lors de l'inscription !");
  }
});
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const fs = require('fs');

// Charger les identifiants du compte de service
const auth = new google.auth.GoogleAuth({
  keyFile: 'const { google } = require('googleapis');
const sheets = google.sheets('v4');
const fs = require('fs');

// Charger les identifiants du compte de service
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your-service-account-key.json', // Chemin vers le fichier JSON
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// ID de la feuille Google Sheets
const spreadsheetId = 'VOTRE_SPREADSHEET_ID';

// Fonction pour ajouter des données à Google Sheets
async function appendData() {
  const client = await auth.getClient();
  const request = {
    spreadsheetId,
    range: 'Sheet1!A1:C1', // Remplacez par votre plage
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        ['Nom', 'Email', 'Message'], // Exemple de données
      ],
    },
    auth: client,
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Données ajoutées avec succès :', response.data);
  } catch (error) {
    console.error('Erreur lors de l’ajout des données :', error);
  }
}

appendData();'const { google } = require('googleapis');
const sheets = google.sheets('v4');
const fs = require('fs');

// Charger les identifiants du compte de service
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your-service-account-key.json', // Chemin vers le fichier JSON
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// ID de la feuille Google Sheets
const spreadsheetId = 'VOTRE_SPREADSHEET_ID';

// Fonction pour ajouter des données à Google Sheets
async function appendData() {
  const client = await auth.getClient();
  const request = {
    spreadsheetId,
    range: 'Sheet1!A1:C1', // Remplacez par votre plage
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        ['Nom', 'Email', 'Message'], // Exemple de données
      ],
    },
    auth: client,
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Données ajoutées avec succès :', response.data);
  } catch (error) {
    console.error('Erreur lors de l’ajout des données :', error);
  }
}

appendData();'https://console.cloud.google.com/apis/credentials/oauthclient/56370745515-3cfhh2mi8mamic6odun9h66n7o5mirqj.apps.googleusercontent.com?project=ascendant-pixel-469719-e6', // Chemin vers le fichier JSON
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// ID de la feuille Google Sheets
const spreadsheetId = 'https://docs.google.com/spreadsheets/d/1qSQy7A3pgcL8JNF3bMfDEV3Upw7zGNJP_ukg6cNzkAU/edit?gid=0#gid=0';

// Fonction pour ajouter des données à Google Sheets
async function appendData() {
  const client = await auth.getClient();
  const request = {
    spreadsheetId,
    range: 'Sheet1!A1:C1', // Remplacez par votre plage
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        ['Nom', 'Âge', 'Email' , 'Téléphone' , 'Poste'], // Exemple de données
      ],
    },
    auth: client,
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Données ajoutées avec succès :', response.data);
  } catch (error) {
    console.error('Erreur lors de l’ajout des données :', error);
  }
  nmp install googleapis
}

appendData();
node indexedDB.js
