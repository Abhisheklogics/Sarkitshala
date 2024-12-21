import mongoose from 'mongoose';


let isConnected = false;

export default async function dbConnect() {
  
  if (isConnected) {
    console.log('Database is already connected');
    return;
  }

  try {
    
    const db = await mongoose.connect(process.env.MONGO_URI);
    
    
    const databaseIsReady = db.connections[0].readyState;
    
    if (databaseIsReady === 1) {
      isConnected = true;
      console.log('Database connected');
    }
  } catch (error) {
    console.error('Database connection error:', error);
  }
}
