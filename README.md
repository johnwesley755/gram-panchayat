# Gram Panchayat Website

Welcome to the Gram Panchayat website project! This project aims to digitize various services provided by the Gram Panchayat, making them easily accessible to users and efficient to manage for staff and administrators.

## Project Overview

The Gram Panchayat website is a comprehensive web application designed to provide various government services online. It allows users to apply for services, track their application status, and file complaints. The website also enables staff to manage and update application statuses and allows administrators to create, update, and delete services.

## Features

### User Features
- **Signup/Login**: Users can create an account and log in to access services.
- **Apply for Services**: Users can apply for different services such as electricity connections, water supply, health services, and education services.
- **Track Application Status**: Users can track the status of their applications.
- **Register Complaints**: Users can view and register complaints regarding services.

### Staff Features
- **Login**: Staff members can log in to their accounts.
- **View Services**: Staff can view the list of available services.
- **Update Application Status**: Staff can update the status of applications submitted by users.

### Admin Features
- **Login**: Administrators can log in to their accounts.
- **Create Services**: Admins can create new services that users can apply for.
- **Update/Delete Services**: Admins can update existing services or delete them if necessary.
- **Update Application Status**: Admins can update the status of user applications.
- **Logout**: Admins can log out of their accounts.

## Pages and Scripts

### User Pages
- **`user_index.html`**: The main landing page for users.
- **`user_signup.html`**: The signup page for new users.
- **`user_login.html`**: The login page for existing users.
- **`user_loggedin.html`**: The dashboard page for logged-in users.
- **`user_service.html`**: The services page where users can apply for services.

### Admin Pages and Scripts
- **`admin_create_service.html`**: Page for creating new services.
- **`admin_update_services.html`**: Page for updating or deleting existing services.
- **`admin_update_status.html`**: Page for updating the status of applications.
- **`admin_create_service.js`**: Script for creating new services.
- **`admin_update_services.js`**: Script for updating or deleting services.
- **`admin_update_status.js`**: Script for updating application statuses.

### Staff Pages and Scripts
- **`staff_services.html`**: Page for staff to view services.
- **`staff_update_status.html`**: Page for staff to update application statuses.
- **`staff_services.js`**: Script for viewing services.
- **`staff_update_status.js`**: Script for updating application statuses.

### Common Files
- **`user_service.css`**: Common stylesheet for the website.
- **`user_profile.js`**: Script for user profile management.
- Firebase configuration scripts.

## Firebase Integration

The project uses Firebase for backend services, including authentication and Firestore for database management. The Firebase configuration includes:

- **Authentication**: To manage user, staff, and admin logins.
- **Firestore**: To store and manage application data, service details, and user profiles.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/johnwesley755/gram-panchayat.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd gram-panchayat
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to the project.
   - Copy the Firebase configuration and replace it in the provided Firebase initialization scripts.

4. **Install dependencies** (if any):
   - Ensure you have Node.js and npm installed.
   - Run the following command to install dependencies:
     ```bash
     npm install
     ```

5. **Run the project**:
   - Use a live server extension in your code editor or a simple HTTP server to serve the HTML files.

## Repository Information

- **Repository Name**: `gram-panchayat`
- **GitHub Username**: `johnwesley755`

## Contact Information

- **Email**: johnwesley8113@gmail.com

## License

This project is not licensed.

---

Thank you for checking out the Gram Panchayat website project. If you have any questions or need further assistance, please feel free to reach out via email.

