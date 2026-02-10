Expense Tracker Web Application

Built with React.js

📌 Project Overview

The Expense Tracker Web Application is a responsive, user-friendly web app designed to help users track income and expenses, monitor available balance, and analyze spending behavior in real time.
The application allows users to add, view, search, and delete transactions, providing a clear financial overview.

This project was developed as part of the Antigravity Build Program to demonstrate practical skills in modern front-end development using React.

🎯 Objectives

To build a real-world React application using component-based architecture

To manage application state efficiently

To help users track daily financial transactions

To display real-time balance, income, and expense summaries

To improve hands-on experience with React and UI design

🛠️ Technology Stack
Layer	Technologies
Front-end	React.js, JavaScript (ES6)
Styling	CSS, Styled-Components
State Management	React Hooks (useState, useEffect)
Tooling	Node.js, npm
IDE	VS Code
Version Control	Git & GitHub
🏗️ Project Architecture

The project follows a modular React architecture:

Each feature is divided into reusable components

Central state management handled in the main container

Unidirectional data flow using props

📁 Folder Structure
expense/
 ├─ node_modules/
 ├─ public/
 ├─ src/
 │  ├─ components/
 │  │  ├─ AddTransaction.js
 │  │  ├─ OverviewComponent.js
 │  │  ├─ Tracker.js
 │  │  ├─ TransactionItem.js
 │  │  ├─ TransactionsContainer.js
 │  ├─ App.js
 │  ├─ App.css
 │  ├─ globalStyles.js
 │  ├─ index.js
 │  ├─ index.css
 ├─ package.json
 ├─ README.md

🔍 Functional Description
1️⃣ Add Transaction

Users can add income or expense with description and amount

Positive amounts → Income

Negative amounts → Expense

2️⃣ Transaction List

Displays all transactions

Supports searching/filtering

Each transaction has a delete option

3️⃣ Balance Overview

Shows:

Total Balance

Total Income

Total Expenses

4️⃣ Delete Transaction

Users can remove unwanted entries

Balance updates instantly

🔄 Application Workflow

User enters transaction details

Data is stored in React state

Components re-render automatically

Summary values update in real time

User can search or delete transactions

🧠 Key Concepts Used

React Functional Components

Props & State

React Hooks

Component Reusability

Conditional Rendering

Event Handling

Styled-Components for clean UI

🌟 Features

Clean and responsive UI

Real-time balance calculation

Easy transaction management

Search and filter functionality

Beginner-friendly and scalable design

🚧 Future Enhancements

LocalStorage / Database integration

Category-wise expense tracking

Monthly & yearly analytics

Charts and graphs (visual analysis)

User authentication

Export data to PDF/Excel

✅ Conclusion

The Expense Tracker Web Application successfully demonstrates the practical use of React.js to build an interactive, real-world financial management tool.
This project helped strengthen understanding of component-based design, state management, and dynamic UI updates, making it an ideal project for learning and showcasing front-end development skills.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
