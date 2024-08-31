import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
console.log(process.env.CLIENT_ID);
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Function to get the access token
async function getAccessToken() {
    const credentials = Buffer.from(`${clientID}:${clientSecret}`).toString("base64");
    try {
            const response = await axios.post("https://us.battle.net/oauth/token", "grant_type=client_credentials", {
                    headers: {
                            Authorization: `Basic ${credentials}`,
                            "Content-Type": "application/x-www-form-urlencoded",
                    },
            });
            console.log("we're so in");
            return response.data.access_token;
    } catch (error) {
            console.error("Error getting access token:", error);
            return null;
    }
}

getAccessToken();