export const keyFeatures = [
  {
    title: "JWT-based Authentication:",
    description:
      "Implemented JWTs to securely manage user sessions, providing access tokens for client-side authentication and refresh tokens stored as HTTP-only cookies for enhanced security.",
  },
  {
    title: "Access and Refresh Token Mechanism:",
    description:
      "Established a two-token system with short-lived access tokens and long-lived refresh tokens. Access tokens are stored in client memory, while refresh tokens are securely stored in HTTP-only cookies, mitigating certain types of cross-site scripting (XSS) attacks.",
  },
  {
    title: "Session Persistence:",
    description:
      "Ensured persistent user sessions through refresh tokens, allowing users to stay authenticated across multiple visits without compromising security.",
  },
  {
    title: "Secure Communication:",
    description:
      "Implemented HTTPS to encrypt data in transit, securing communication between the client and server.",
  },
  {
    title: "MongoDB for Data Storage:",
    description:
      "Utilized MongoDB as the database to store user credentials securely, employing best practices for hashing and salting passwords.",
  },
  {
    title: "React.js for Frontend:",
    description:
      "Developed a dynamic and responsive user interface using React.js, enhancing the user experience and facilitating seamless interactions during authentication using Dialog.",
  },
  {
    title: "Node.js and Express.js for Backend:",
    description:
      "Employed Node.js and Express.js to build a scalable and performant backend, handling authentication requests, token generation, and user management.",
  },

  {
    title: "Middleware for Authorization:",
    description:
      "Implemented middleware to verify JWTs, ensuring that only authenticated users can access protected routes.",
  },
];
