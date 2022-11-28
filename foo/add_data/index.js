const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const bikes = [ 
                {
                  infernoID: '000001',
                  manufacturer: 'Co-op',
                  model: '',
                  serialNumber: 'U205K00053',
                  color: 'Grey',
                  drivetrain:'3x',
                  fork: '',
                  location: 'Ryan',
                  size: 'S',
                  wheelSize: ''
                },
                {
                  infernoID: '000002',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000003',
                  manufacturer: 'Trek',
                  model: 'Marlin 6',
                  serialNumber: 'WTU191C1196J',
                  color: 'Black/Green',
                  drivetrain:'1x',
                  fork: 'Suntour SR XC',
                  location: 'Shrek',
                  size: 'M',
                  wheelSize: '29'
                },
                {
                  infernoID: '000004',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000005',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000006',
                  manufacturer: 'Specialized',
                  model: '',
                  serialNumber: 'WSBO0112664985',
                  color: 'Red',
                  drivetrain:'2x',
                  fork: '',
                  location: '',
                  size: 'M',
                  wheelSize: '29'
                },
                {
                  infernoID: '000007',
                  manufacturer: 'Trek',
                  model: 'Marlin',
                  serialNumber: '',
                  color: 'Black',
                  drivetrain:'',
                  fork: '',
                  location: 'Shrek',
                  size: '',
                  wheelSize: '',
                  notes: 'Wolftooth to move to Giant Talon 008'
                },
                {
                  infernoID: '000008',
                  manufacturer: 'Giant',
                  model: 'Talon',
                  serialNumber: 'C1CD4146',
                  color: 'Black/Green',
                  drivetrain:'3x',
                  fork: '',
                  location: 'Shrek',
                  size: '',
                  wheelSize: '',
                  notes: 'Replace the drivetrain with 007'
                },
                {
                  infernoID: '000009',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000010',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000011',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000012',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000013',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000014',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000015',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
                {
                  infernoID: '000016',
                  manufacturer: '',
                  model: '',
                  serialNumber: '',
                  color: '',
                  drivetrain:'',
                  fork: '',
                  location: '',
                  size: '',
                  wheelSize: ''
                },
];

const data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA'
};

// Add a new document in collection "cities" with ID 'LA'
const res = db.collection('Bikes').doc().set(data);

