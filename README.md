🏥 Doctor Appointment Booking System

A full-stack MERN application that allows patients to book appointments with doctors, manage profiles, make online payments, and more.

🚀 Features

👩‍⚕️ Patient Features

Browse doctors by speciality
View doctor details, available slots, and ratings
Book appointments
Online payment integration (Razorpay)
Manage user profile
View appointment history

🩺 Doctor Features

Manage availability slots
View booked appointments
Update profile details
Approve / Cancel appointments

🔧 Admin Features

Manage doctors
Approve doctor registrations
See overall appointments and platform stats

🛠️ Tech Stack

Frontend:-
React.js
Context API for state management
React Router
Tailwind CSS

Backend:-
Node.js
Express.js
MongoDB (Mongoose ORM)
JWT Authentication
Razorpay Payment Gateway


Create a .env file:

MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

🔐 Authentication Flow (JWT)

Login/Register returns a JWT token
Token stored in frontend (localStorage)
Protected API routes validated using middleware:

💳 Payment Flow (Razorpay)

User clicks on Pay
Frontend requests an order from backend
Backend creates Razorpay order
Razorpay popup opens
Payment success → Backend verifies signature
Appointment marked as paid

🧑‍💻 Author

Muhammed Shafeeque K
MERN Stack + Golang Developer

⭐ Support

If you like this project, don't forget to ⭐ the repo!
