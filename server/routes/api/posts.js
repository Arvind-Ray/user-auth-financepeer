const express = require("express");
const router = express.Router();
// Load post model
const Posts = require("../../models/Posts");


//adding post
router.post("/newPost", (req, res) => {
    Posts.create(req.body, (err, data)=>{
		if(err){
			res.status(404).json({ err: "Error adding post" });
		} else{
			Posts.find({}).then((data,err) =>{
				if(err){
					res.status(404).json({ err: "Something went wrong" });
				} else{
					res.status(200).json(data);
				}
			})
		}
	});
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