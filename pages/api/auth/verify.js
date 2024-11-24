import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

if (!globalThis.firebaseAdmin) {
  globalThis.firebaseAdmin = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { token } = req.body;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const auth = getAuth();
    const decodedToken = await auth.verifyIdToken(token);

    return res.status(200).json({ uid: decodedToken.uid });
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
}
