import mongoose from 'mongoose'
import 'colors'

const connectDb = async () => {

	try{
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(`connected to mongodb ${connection.connection.host}`.yellow.bold);
	} catch (error) {
		console.log(error.message.cyan.bold);
		process.exit(1);
	}
}

export default connectDb;