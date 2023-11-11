const urls = ["https://mernjwt-ui.onrender.com"];

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
