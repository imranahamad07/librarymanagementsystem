import express from 'express'
const app = express();
import env from 'dotenv'
import chalk from 'chalk'
import cors from 'cors'

env.config();

app.use(cors());

import connectDb from './config/db.js'
connectDb();

app.get('/', (req,res) =>{

	res.json({
		msg:"server is running",
		success: true
	})

})

app.get('/api/health', (req,res) => {

	res.json({
		msg:"server is running okk",
		success:true,
	})
})

app.listen(process.env.PORT || 5000 , ()=>{
	console.log(chalk.blue`Server is running on port ${process.env.PORT}`);
})
