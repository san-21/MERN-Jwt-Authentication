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
    title: "Forgot Password Feature::",
    description:
      "In my MERN stack authentication system, I've seamlessly integrated a robust  Forgot Password feature to enhance user convenience and security. This functionality empowers users to reset their passwords in case they forget them, ensuring a smooth and secure experience. When a user initiates the Forgot Password process, an email is sent to their registered email address containing a unique reset link. This link, coupled with a secure token, allows users to reset their passwords and regain access to their accounts. The entire process is designed with security in mind, utilizing industry-standard practices to protect user credentials and sensitive information.This feature not only adds a layer of user-friendly functionality but also reinforces the overall security of the authentication system by providing a straightforward and secure method for users to regain control of their accounts.",
  },
  {
    title: "Remember Me Feature:",
    description:
      "To enhance user experience without compromising security, I've implemented a Remember Me feature in the authentication system. When a user selects the Remember Me option during login, the refresh token is extended for a prolonged period—specifically, 30 days. This extension allows users to enjoy a persistent login session, reducing the need for frequent logins and streamlining their interaction with the platform.Conversely, for users who do not opt for the Remember Me functionality, the refresh token defaults to a shorter duration, lasting for 1 day. This design choice strikes a balance between convenience and security. Users who prefer an extended login duration can choose the Remember Me option, while others can rely on the default, ensuring that security is not compromised for those who prioritize it.This Remember Me feature not only caters to user preferences but also showcases a thoughtful approach to security, providing a tailored experience for users based on their individual needs and priorities.",
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
