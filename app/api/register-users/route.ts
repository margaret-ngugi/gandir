
import axios from 'axios';
import { BASE_URL } from "@/config";


export async function POST(request: Request) {
try {
if (!BASE_URL) {
return new Response("Base URL not found", {
status: 404,
statusText: "Failed",
});
}


const body = await request.json().then(response => response);


const response = await axios.post(`${BASE_URL}/api/registerusers/`, body, {
headers: {
'Content-Type': 'application/json',
},
});


console.log('users', response.data);


return new Response(JSON.stringify(response.data), {
status: 201,
statusText: "Success",
});
} catch (error: any) {
return new Response(error.message, {
status: 500,
statusText: "Failed",
});
}
}
