	
# "ToyPark - A Local Kids Toy Store"

## Project Overview:

**ToyPark** is a vibrant and playful online marketplace for kids' toys, designed to help families discover and support local toy sellers. The platform allows users to browse through toys, view detailed information, and leave feedback or ratings for toys they are interested in purchasing for their children.

## Purpose:

The purpose of **ToyPark** is to create a fun, engaging, and secure environment for families to explore a wide range of toys. It supports local toy sellers and offers a platform for users to interact with the products through ratings, reviews, and personal toy trial requests.

## Live URL: https://toytopia-rabbi.netlify.app/

## Github Repo link: https://github.com/rabbi007/Kids-Toy-Store-Platform.git

## Key Features:

- **Authentication**: Users can log in using email/password or Google authentication.
- **Toys Browse & Search**: View toys by categories with ratings, prices, and descriptions.
- **Protected Routes**: Certain pages (like User Profile, Toys-Store, Toy-Details) are protected for logged-in users only.
- **Customer Feedback**: Leave ratings and reviews for toys.
- **Try Now Feature**: Request a toy for a trial by submitting a simple form.
- **Responsive Design**: Fully responsive and optimized for mobile, tablet, and desktop.
- **Firebase**: Integrated Firebase for user authentication and data management.
- **Dynamic Page Titles**: Each page has a dynamic title using a custom hook `useDocumentTitle` under 'Hook' Folder.

## NPM Packages Used:

1. **react-router**: For handling routing and navigation between different pages of the app.
2. **firebase**: For implementing authentication (login, register, password reset) and managing user data.
3. **tailwindcss**: A utility-first CSS framework for creating responsive and modern layouts.
4. **daisyui**: A Tailwind CSS plugin that provides pre-built UI components for a better design system.
5. **react-toastify**: For displaying success, error, and informational toast messages to users.
6. **axios**: For making HTTP requests, used for fetching data from external resources.
7. **react-icons**: Provides scalable and customizable icons that can be easily integrated into the UI.
8. **swiper**: A powerful slider component used for implementing the carousel/slider on the homepage.
9. **react-spinners**: To show loading spinners during data fetching or during processing of requests.

Run the Project Locally

To run this project on your local machine, follow these steps:

1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/rabbi007/Kids-Toy-Store-Platform.git

2. Install Dependencies

Navigate to the project folder and install the required dependencies:

cd Kids-Toy-Store-Platform
npm install

3. Set Up Firebase

Create a project on Firebase
.

Set up Authentication with email/password and Google sign-in.

Obtain your Firebase configuration keys and add them to the firebaseConfig.js file in your project.

4. Run the Project

After setting up Firebase, you can start the development server:

npm start


This will start the project locally, and you can access it by visiting http://localhost:5173/.

Notes:

Ensure you have Node.js and npm installed on your machine.

Make sure to configure Firebase correctly for both authentication and data management.

If you run into any issues, feel free to open an issue on the GitHub repository.

### Writer:- 
Name:   Khandaker Reza-e-Rabbi;
Email:  rabbi@live.com;
Github: https://github.com/rabbi007;
