interface IURL {
  REDIRECT_URL: string;
  API_BASE_URL: string;
  MEETING_BASE_URL: string;
}

const dev = {
  REDIRECT_URL: "http://localhost:3000/",
  API_BASE_URL: "http://localhost:8000/api",
  MEETING_BASE_URL: "https://localhost:4443"
};

const prod = {
  REDIRECT_URL: "https://zumaridi.vercel.app/",
  API_BASE_URL: "https://zumaridi-identity-management.herokuapp.com/api",
  MEETING_BASE_URL: ""
};

const getEnv = (): IURL => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      return dev;
  }
};

export const env = getEnv();
