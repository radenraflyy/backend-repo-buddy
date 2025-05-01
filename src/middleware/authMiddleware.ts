// import { Request, Response, NextFunction } from 'express';

// const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.replace('Bearer ', ''); // Get the token from the header

//   if (!token) {
//     return res.status(401).json({ error: 'No token provided' });
//   }

//   try {
//     // Verify the token using the Firebase Admin SDK
//     const decodedToken = await admin.auth().verifyIdToken(token);

//     // Attach the user info to the request object
//     req.user = decodedToken;

//     next();
//   } catch (error) {
//     console.error('Error verifying token:', error);
//     return res.status(401).json({ error: 'Invalid or expired token' });
//   }
// };

// export default authMiddleware;
