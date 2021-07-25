const mongoose = require("mongoose");
const Blog = require("./models/blog");

const blogs = [
	{
		author: "Sankalp",
		img: "https://cdn.pixabay.com/photo/2021/07/13/20/00/lion-6464429__340.jpg",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		title: "This is the first test blog",
	},
	{
		author: "Tanvi",
		img: "https://cdn.pixabay.com/photo/2021/07/18/17/11/rufous-6476117__340.jpg",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		title: "This is the second test blog",
	},
	{
		author: "Khushi",
		img: "https://cdn.pixabay.com/photo/2021/07/17/16/42/western-striped-albatros-6473509__340.jpg",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		title: "This is the third test blog",
	},
];

const seedDB = async () => {
	await Blog.insertMany(blogs);
	console.log("DB Seeded!");
};
module.exports = seedDB;
