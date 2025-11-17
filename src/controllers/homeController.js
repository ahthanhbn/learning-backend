
const getHomepage = (req, res) =>{
    //process data
    //call model
    res.send("Hello World! Nodemon");
}

const getABC = (req,res) =>{
    res.send("Hello Thành")
}

const getBackend = (req, res) => { 
    res.render("sample.ejs");
 }

module.exports = {
    getHomepage, getABC, getBackend
}