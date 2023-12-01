import 'dotenv/config';

export const config = {
  port: process.env.PORT || 5000,
  mongo: process.env.MONGO_URI || 'mongodb://localhost:27017/Blog-Viaje',
  jwt_secret: process.env.JWT_SECRET || 'secret',
};
