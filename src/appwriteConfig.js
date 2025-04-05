import { Client, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.envVITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
export { client, databases };
