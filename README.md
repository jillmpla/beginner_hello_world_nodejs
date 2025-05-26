# 🌐 Beginner Hello World for Node.js 

This project contains three simple examples that demonstrate different ways to use Node.js: running a basic script, creating a low-level web server, and building a server with the Express framework.

---

## 📁 Files Overview

### 1. `helloworld.js`
- Prints `"Hello, World!"` to the terminal using `console.log()`.
- **Purpose**: Run a basic Node.js script.
    - Learn how Node.js runs standalone code in the terminal (no server involved).

---

### 2. `nodejsserver.js`
- A simple web server built using Node’s built-in `http` module.
- **Purpose**: Understand how to create a server from scratch using only core Node.js tools.
    - Learn how `http.createServer()` works
    - Practice writing response headers and content manually
- 📍 Visit: [http://localhost:3001](http://localhost:3001)

---

### 3. `expressserver.js`
- A web server built using **Express.js**, a Node.js framework.
- **Purpose**: See how Express makes server code cleaner and more powerful.
    - Use Express’s routing system (like `app.get()`)
    - Learn how frameworks simplify request handling
    - Write more scalable, organized code
- 📍 Visit: [http://localhost:3002](http://localhost:3002)

---

## 📚 Learn the Ways of Node.js

1. `helloworld.js` — Run a basic script.
2. `nodejsserver.js` — Build a server from scratch.
3. `expressserver.js` — Use modern tools to simplify development.

---

## 🏃‍♀️ How to Run

```bash
node helloworld.js     #logs to terminal

node nodejsserver.js   #visit http://localhost:3001

node expressserver.js  #visit http://localhost:3002
```
---

## 💡 Use Cases

| File              | Common Use Cases                                                                 |
|-------------------|----------------------------------------------------------------------------------|
| `helloworld.js`   | Script automation, quick testing, CLI tools                                      |
| `nodejsserver.js` | Building a custom server without external libraries; learning networking basics  |
| `expressserver.js`| APIs, full-stack web apps, microservices, REST endpoints  

---

## 🚀 What to Do Next

- Build RESTful APIs with Express (`GET`, `POST`, `PUT`, `DELETE`)
- Add routing and middleware (e.g. `express.json()`, logging)
- Connect to a database (like MongoDB or PostgreSQL)
- Serve static files or templates (`HTML`, `CSS`, `JS`)
- Create full-stack apps using React (frontend) + Express (backend)

---

## 📄 License

This project is open source and available under the terms of the [MIT License](LICENSE.txt).
