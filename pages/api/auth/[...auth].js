import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

if (!getApps().length) {
  initializeApp(firebaseAdminConfig);
}

export default async function handler(req, res) {
  const { method } = req;
  const auth = getAuth();

  switch (method) {
    case "POST":
      try {
        const { token } = req.body;
        const decodedToken = await auth.verifyIdToken(token);
        res.status(200).json({ uid: decodedToken.uid });
      } catch (error) {
        res.status(401).json({ error: "Invalid token" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
