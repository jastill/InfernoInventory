const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const { bikes } = require('./bikes.js');

function initData() {
  for (const bike of bikes) {
    // Add a new document in collection "cities" with ID 'LA'
    const res = db.collection('Bikes').doc(bike.infernoID).set(bike);
  }
}

async function getBikesAtLocation(location) {
  const snapshot = await db.collection('Bikes').where('location', '==', location).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

async function readData() {
  const snapshot = await db.collection('Bikes').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

}

//initData();

//readData();

getBikesAtLocation('Shrek');


