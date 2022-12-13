const express = require("express");
const connection = require("./Config/db");
const UserModel = require("./Models/UserModel");
require("dotenv").config()
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("welcome to homepage")
})

app.post("/signup", async (req, res) => {
	try {

		const newUser = new UserModel(req.body);
		await newUser.save();
		res.send("User added succesfully")
	}
	catch (err) {
		res.send("signup failed")
	}
});

app.post("/login", async (req, res) => {

	const user = await UserModel.findOne(req.body);
	if (user) {
		res.send("logged in succesfully")
	}
	else {
		res.send("login failed")
	}
})

app.post("/emi", async (req, res) => {
	res.send("hi")
})


app.listen(process.env.PORT, async () => {
	try {
		await connection;
		console.log("succesfully connected to database ")
	}
	catch (err) {
		console.log(err);
		console.log("connection failed")
	}
	console.log(`Listening to port ${process.env.PORT}`)
})