const express = require("express");
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
// Load post model
const Posts = require("../../models/Posts");

const upload = multer();


//adding post
router.post("/newPost", upload.array(), (req, res, next) => {
	console.log(req.body, "========================", req.files)
	// fs.readFile(req.files.jsonFile, (err, data) => {
	// 	if(err) throw new Error();

		const userPost = JSON.parse(req.files);
		Posts.create(userPost, (err, data) => {
			if(err){
				return res.status(404).json({ err: "Error adding post" });
			} 
			Posts.find({}).then((data, err) =>{
				if(err){
					res.status(404).json({ err: "Something went wrong" });
				} else{
					res.status(200).json(data);
				}
			});
		});
	// })
	
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
})

module.exports = router;