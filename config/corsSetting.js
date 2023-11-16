const urls = ["https://mernjwt-ui.onrender.com", "http://localhost:3000"];

export const allowedUrl = {
  origin: (origin, callback) => {
    if (urls.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};
