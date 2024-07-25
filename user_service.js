const firebaseConfig = {
  apiKey: "AIzaSyDiD7mkeMkeo8AQNublF2h2iTnvKBnwDeM",
  authDomain: "gram-panchayat-f3b70.firebaseapp.com",
  projectId: "gram-panchayat-f3b70",
  storageBucket: "gram-panchayat-f3b70.appspot.com",
  messagingSenderId: "3622316949",
  appId: "1:3622316949:web:108a271f104089399a249c",
};

// Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Function to load ward details
function loadWardDetails() {
  const wardId = document.getElementById("ward-select").value;
  if (wardId) {
    const wardRef = db.collection("wards").doc(wardId);
    wardRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const ward = doc.data();
          document.getElementById("ward-details-content").innerHTML = `
          <p>Name: ${ward.name}</p>
          <p>Population: ${ward.population}</p>
          <p>Details: ${ward.details}</p>
        `;
          loadWardExpenses(wardId);
          loadWardNotifications(wardId);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
}

// Function to load ward expenses
function loadWardExpenses(wardId) {
  const expensesRef = db.collection("wards").doc(wardId).collection("expenses");
  expensesRef
    .get()
    .then((querySnapshot) => {
      let expensesHtml = "<ul>";
      querySnapshot.forEach((doc) => {
        const expense = doc.data();
        expensesHtml += `<li>${expense.name}: ${expense.amount} - ${expense.description}</li>`;
      });
      expensesHtml += "</ul>";
      document.getElementById("expenses-content").innerHTML = expensesHtml;
    })
    .catch((error) => {
      console.log("Error getting documents:", error);
    });
}

// Function to load ward notifications
function loadWardNotifications(wardId) {
  const notificationsRef = db
    .collection("wards")
    .doc(wardId)
    .collection("notifications");
  notificationsRef
    .get()
    .then((querySnapshot) => {
      let notificationsHtml = "<ul>";
      querySnapshot.forEach((doc) => {
        const notification = doc.data();
        notificationsHtml += `<li>${notification.title}: ${notification.message}</li>`;
      });
      notificationsHtml += "</ul>";
      document.getElementById("notifications-content").innerHTML =
        notificationsHtml;
    })
    .catch((error) => {
      console.log("Error getting documents:", error);
    });
}

// Function to load ward options in the select dropdown
function loadWardOptions() {
  const wardSelect = document.getElementById("ward-select");
  const wardsRef = db.collection("wards");
  wardsRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const ward = doc.data();
        const option = document.createElement("option");
        option.value = doc.id;
        option.textContent = ward.name;
        wardSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.log("Error getting documents:", error);
    });
}

// Load ward options on page load
window.onload = loadWardOptions;
