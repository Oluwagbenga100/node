const express = require('express');
const router = express.Router();
const Post = require('../models/post');


// GET 
// HOME
router.get('', async (req, res) => {
    try {
        const locals = {
            title: "Nodejs Blog",
            description: "Simple Blog created with NodeJs, Express & MongoDb"
        };
        let perPage = 10;
        let page = parseInt(req.query.page) || 1;

        // Fetch data with pagination and sorting
        const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
            .skip((perPage * (page - 1)))  // Adjusted skip logic
            .limit(perPage);

        const count = await Post.countDocuments();  // Updated to use `countDocuments`
        const nextPage = page + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);

        // Render index page with pagination data
        res.render('index', {
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null  // Fix typo 'nexPage'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});

// GET
// POST:ID

router.get('/post/:id', async (req, res) => {
    try {
        let slug = req.params.id;

        // Fetch the post using `findById`
        const data = await Post.findById(slug);

        const locals = {
            title: "NodeJs Blog",
            description: "Simple Blog created with NodeJs, Express & MongoDb."
        };

        // Render the post view with the fetched data
        res.render('post', { locals, data });
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while fetching the post.");
    }
});

// POST
// POST:SearchTerm

router.post('/search', async (req, res) => {
    try {
    const locals = {
        title: "Seach",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

    const data = await Post.find({
        $or : [
            {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
            {body: {$regex: new RegExp(searchNoSpecialChar, 'i')}}
        ]
    });

    res.render("search", {
        data,
        locals
    });


} catch (error) {
    console.log(error);
    
}
});




router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
