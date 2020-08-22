const express = require("express");
const router = express.Router();
// Load post model
const Posts = require("../../models/Posts");


//adding post
router.post("/newPost", async (req, res, next) => {
	if (req.files === null) {
		return res.status(400).json({ msg: 'No file uploaded' });
	}
	const file = req.files.file;
	const data = await JSON.parse(file.data);
	await Posts.insertMany(data);
	try {
		const dbResponse = await Posts.find();
		res.status(200).json(dbResponse);
	} catch (err) {
		res.status(404).json({ err: "Something went wrong" });
	}
});

//Show all posts
router.get("/post",(req,res)=>{
    Posts.find({}).then((data,err) =>{
        if(err){
            console.log(err);
			res.status(404).json({ err: "Something went wrong" });
		} else{
			res.status(200).json(data);
		}
    })
});

module.exports = router;