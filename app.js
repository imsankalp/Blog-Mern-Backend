const express = require("express");
const app = express();
const blogRoutes = require("./routes/blog");
const mongoose = require("mongoose");
// const seedDb = require("./seed");
mongoose
	.connect("mongodb://localhost:27017/blog-mern", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("DB connected!");
	})
	.catch((err) => {
		console.log("Connection failed!");
		console.log(err);
	});
// seedDb();
app.use(express.json());
app.use(blogRoutes);

app.listen(8080, () => {
	console.log("Server running at port 8080");
});
