/* 
Filename: sophisticated_code.js
Description: This code demonstrates a sophisticated and elaborate implementation of a web-based chat application.
*/

// ChatMessage class for representing a single chat message
class ChatMessage {
  constructor(sender, content, timestamp) {
    this.sender = sender;
    this.content = content;
    this.timestamp = timestamp;
  }
}

// ChatRoom class for managing the chat room and messages
class ChatRoom {
  constructor(roomId) {
    this.roomId = roomId;
    this.messages = [];
  }

  // Method to add a new message to the chat room
  addMessage(sender, content) {
    const timestamp = new Date().toLocaleString();
    const newMessage = new ChatMessage(sender, content, timestamp);
    this.messages.push(newMessage);
  }

  // Method to print all messages in the chat room
  printMessages() {
    console.log(`Chat Room ${this.roomId} Messages:`);
    this.messages.forEach((message, index) => {
      console.log(`${index+1}. [${message.timestamp}] ${message.sender}: ${message.content}`);
    });
  }
}

// ChatUser class for representing a chat user
class ChatUser {
  constructor(userId, username) {
    this.userId = userId;
    this.username = username;
    this.rooms = [];
  }

  // Method to join a chat room
  joinRoom(roomId) {
    const roomExists = this.rooms.find(room => room.roomId === roomId);
    if (!roomExists) {
      const newRoom = new ChatRoom(roomId);
      this.rooms.push(newRoom);
      console.log(`User '${this.username}' joined Chat Room ${roomId}`);
    } else {
      console.log(`User '${this.username}' is already in Chat Room ${roomId}`);
    }
  }

  // Method to leave a chat room
  leaveRoom(roomId) {
    const roomIndex = this.rooms.findIndex(room => room.roomId === roomId);
    if (roomIndex >= 0) {
      this.rooms.splice(roomIndex, 1);
      console.log(`User '${this.username}' left Chat Room ${roomId}`);
    } else {
      console.log(`User '${this.username}' is not in Chat Room ${roomId}`);
    }
  }

  // Method to send a message to a specific chat room
  sendMessage(roomId, content) {
    const room = this.rooms.find(room => room.roomId === roomId);
    if (room) {
      room.addMessage(this.username, content);
      console.log(`User '${this.username}' sent a message to Chat Room ${roomId}`);
    } else {
      console.log(`User '${this.username}' is not in Chat Room ${roomId}. Cannot send message.`);
    }
  }

  // Method to print messages of all joined chat rooms
  printAllMessages() {
    console.log(`All messages for User '${this.username}':`);
    this.rooms.forEach(room => {
      room.printMessages();
    });
  }
}

// Main code execution
const user1 = new ChatUser(1, "Alice");
const user2 = new ChatUser(2, "Bob");

user1.joinRoom(1);
user1.joinRoom(2);
user2.joinRoom(2);

user1.sendMessage(1, "Hello everyone!");
user2.sendMessage(2, "Hi Alice and Bob!");

user1.printAllMessages();
user2.printAllMessages();

user1.leaveRoom(1);
user1.sendMessage(1, "This message will not be sent.");

user1.printAllMessages();

user2.leaveRoom(2);
user2.sendMessage(2, "This message will also not be sent.");

user2.printAllMessages();