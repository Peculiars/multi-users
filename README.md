# Multi-User Type Login System

This project is a simple frontend application that demonstrates a login system for three different user types: Admin, Editor, and Viewer. Upon successful login, users are redirected to their respective dashboards based on their user roles.

## Features

- **Login Form**: A simple form where users can input their username and password.
- **Role-Based Redirection**: Based on user credentials, users are redirected to:
  - `/admin-dashboard` for Admin users
  - `/editor-dashboard` for Editor users
  - `/viewer-dashboard` for Viewer users
- **Mock Data**: The login system uses hardcoded credentials for testing purposes.
- **Routing Protection**: Users are redirected back to the login page if they attempt to access an unauthorized dashboard.
- **Form Validation**: Basic form validation ensures that all fields are filled before attempting login.
- **Session Handling**: The user session is persisted using `localStorage` to prevent unauthorized access after a page refresh.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered (SSR) and static web applications.
- **TypeScript**: Strongly typed JavaScript, providing type safety and better code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Hooks**: `useState` and `useEffect` hooks for managing component state and side effects.
- **Next.js Router**: Used for programmatically navigating users between routes.

## User Credentials

The following credentials can be used to test the login system:

| Role   | Username | Password   |
|--------|----------|------------|
| Admin  | admin    | admin123   |
| Editor | editor   | editor123  |
| Viewer | viewer   | viewer123  |

## How to Run the Project

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Peculiars/multi-user-login.git
    cd multi-user-login
    ```

2. **Install Dependencies**:

    Install the project dependencies using npm or yarn:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the Development Server**:

    Start the Next.js development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Navigate to the Application**:

    - Use the login form to input any of the test credentials provided above.
    - Upon successful login, you will be redirected to the corresponding dashboard based on the role.
