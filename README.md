# Chat Application (Using Sockets & Multithreading)

## Description

A real-time chat application that allows multiple users to communicate over a network using WebSockets. This project implements **multithreading** to efficiently handle multiple users while maintaining smooth communication.

## Key Features

- **Send and receive messages** between multiple users.
- **Real-time communication** using WebSockets.
- **Implements multithreading** to efficiently handle multiple users.
- **Non-blocking architecture** using Node.js and Worker Threads.

## Concepts Used

- **Networking**: WebSockets for real-time data transmission.
- **Multithreading**: Worker threads to manage multiple users concurrently.
- **Event-driven Architecture**: Asynchronous handling of connections.

---

## Installation & Setup

### **1. Clone the Repository**

Run the following command:

```sh
git clone https://github.com/pkpotter03/chat-app.git
cd chat-app
```

### **2. Install Dependencies**

Run the necessary command to install project dependencies:

```sh
npm install
```

### **3. Start the Server**

Execute the command to start the server:

```sh
node server.js
```

### **4. Open in Browser**

Visit the following URL in multiple tabs to simulate multiple users:

```
http://localhost:3000
```

---

## Implementation

### **1. Server-Side Implementation**

The server initializes WebSockets and creates a worker thread for each connected user. It listens for messages, processes them, and broadcasts them to other users while maintaining efficient performance through multithreading.

### **2. Worker Thread Implementation**

Each worker thread handles individual users to ensure efficient message processing. It manages user connections, processes messages, and ensures smooth real-time communication.

---

## How It Works

### **1. Sending and Receiving Messages**

- Users connect to the server via WebSockets.
- The server listens for messages and assigns worker threads for handling them.
- Messages are processed and broadcasted to other connected users.

### **2. Multithreading for Multiple Users**

- Each user is assigned a **worker thread**, ensuring smooth handling of multiple connections.
- The main server only manages connections, while worker threads process messages.

### **3. Event-Driven Architecture**

- The application listens for events such as user messages and disconnections.
- Each event is processed asynchronously, preventing blocking operations.

---

## Future Improvements

- Implement **private messaging** between users.
- Add **user authentication** (Login & Register pages using React Router).
- Store chat history using a **database (MongoDB, MySQL, etc.)**.
- Improve UI using **React.js & Tailwind CSS**.

---

## License

This project is open-source and available under the **MIT License**.



