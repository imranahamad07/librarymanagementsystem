import axios from 'axios'

export async function backendApi(){

	try{
		const res = await axios.get('https://librarymanagementsystem-bq08.onrender.com');
		return res.data;
	} catch (error) {
		console.error('erro fetching to backend',error);
		throw error;
	}
}