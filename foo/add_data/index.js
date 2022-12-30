const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const { bikes } = require('./bikes.js');

/**
 * Initialize the data
 */
function initData() {
  for (const bike of bikes) {
    // Add a new document in collection "cities" with ID 'LA'
    const res = db.collection('Bikes').doc(bike.infernoID).set(bike);
  }
}

/**
 * Get the bikes at a given location
 * @param {} location 
 */
async function getBikesAtLocation(location) {
  const snapshot = await db.collection('Bikes').where('location', '==', location).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

/**
 * Read the data from the Firestore
 */
async function readData() {
  const snapshot = await db.collection('Bikes').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

}

/**
 * Update the data
 * @param {*} bike 
 */
async function updateData(bike) {
  const { infernoID, ...rest } = bike;
  const res = await db.collection('Bikes').doc('000001').update({
    status: 'Out',
    location: 'Ryan',
    lastUpdated: FieldValue.serverTimestamp()
  });
}

initData();

//readData();

//getBikesAtLocation('Shrek');


