import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { keyFeatures } from "../assets//data/index";
import zIndex from "@mui/material/styles/zIndex";
const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",

        backgroundColor: `${theme.palette.background[500]}`,
        textAlign: "center",
        p: { xs: "auto", sm: 1, md: 2 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          pt: 3,
        }}
      >
        Mern Stack Authentication with JWT.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
        }}
      >
        Industry Standard Best PRACTICE
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: `${theme.palette.text[800]}`,
        }}
      >
        Highly Secured Authentication Project!!!
      </Typography>
      <Box
        sx={{
          textAlign: "start",
          height: "auto",
          backgroundColor: `${theme.palette.white[500]}`,
          color: `${theme.palette.text[800]}`,
          padding: { xs: 1, sm: 2, md: 2, lg: 10 },
          m: { xs: "auto", sm: 3, md: 5, lg: 8 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Project: MERN Stack Authentication with JWT
        </Typography>
        <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "18px" }}>
          Overview:
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
            color: `${theme.palette.text[300]}`,
            mb: 2,
          }}
        >
          I developed a robust authentication system utilizing the MERN
          (MongoDB, Express.js, React.js, Node.js) stack, implementing
          industry-standard practices for secure user authentication and session
          management. The project leverages JSON Web Tokens (JWT) for access
          control, ensuring a seamless and secure user experience.
        </Typography>
        <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "18px" }}>
          Key Features:
        </Typography>
        <ol>
          {keyFeatures.map((item) => (
            <li key={item.title}>
              <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "18px" }}>
                {item.title}
              </Typography>
              <ul>
                <li key={item.title}>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      color: `${theme.palette.text[300]}`,
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                </li>
              </ul>
            </li>
          ))}
        </ol>
        <Typography sx={{ fontWeight: "bold", mb: 2, mt: 5, fontSize: "18px" }}>
          Security Measures:
        </Typography>
        <ul>
          <li>
            <Typography
              sx={{
                fontSize: "17px",
                color: `${theme.palette.text[300]}`,
                mb: 2,
              }}
            >
              Employed various security measures, including CORS configuration,
              input validation, and joi, to enhance the overall security posture
              of the application.
            </Typography>
          </li>
        </ul>
        <Typography sx={{ fontWeight: "bold", mb: 2, fontSize: "18px" }}>
          Future Enhancements:
        </Typography>
        <ul>
          <li>
            <Typography
              sx={{
                fontSize: "17px",
                color: `${theme.palette.text[300]}`,
                mb: 2,
              }}
            >
              The project is designed with scalability in mind, and future
              enhancements may include features like Activate account after
              registration(Email Verification), multi-factor
              authentication,Google OAuth2 Authorization, user roles,password
              recovery using OTP and additional security measures as needed.
            </Typography>
          </li>
        </ul>
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: "22px",
            color: `${theme.palette.primary[500]}`,
          }}
        >
          Conclusion:
        </Typography>
        <ul>
          <li>
            <Typography
              sx={{
                fontSize: "17px",
                color: `${theme.palette.text[300]}`,
                mb: 2,
              }}
            >
              This MERN stack authentication project showcases my proficiency in
              developing secure and efficient web applications. The use of
              industry-standard practices and technologies ensures a reliable
              authentication system with an emphasis on user data security.
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Home;
