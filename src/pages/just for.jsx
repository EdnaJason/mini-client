// {import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the backend API
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/api/user/profile'); // Replace with your API endpoint
//         setUserData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Welcome, {userData.name}!</h2>
//       <p>Email: {userData.email}</p>
//       <p>Progress: {userData.progress}%</p>
//       {/* Render any other user data or components as needed */}
//     </div>
//   );
// };

// export default ProfilePage;

// /* const mongoose = require('mongoose');

// // Establish the database connection
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a schema for the collection
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// // Create a model based on the schema
// const User = mongoose.model('User', userSchema);

// // Query the collection to retrieve data
// User.find({}, (err, users) => {
//   if (err) {
//     console.error(err);
//     // Handle the error
//   } else {
//     console.log(users);
//     // Process the retrieved data
//   }
// });
// */ }