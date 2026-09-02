const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const db = process.env.MONGODB_URI || "";

connectToDatabase = async () => {
    try {
        await mongoose.connect(db, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
        throw error; // Rethrow the error to indicate failure to connect
    }
};


connectToDatabase().then(() => {
    console.log("Server listening on port");
}).catch(err => {
    console.error('Error connecting to database:', err.message);
});


const UrlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String
})

const Url = mongoose.model('Url',UrlSchema);

app.post("/shorten", async(req,res)=>{

    try{
        const { originalUrl } = req.body;
        const shortUrl = shortUrlGenerator();
        const newData = new Url({
            originalUrl,
            shortUrl
        });
        await newData.save();
        res.status(200).json({ originalUrl, shortUrl });
    }
    catch(error){
        console.log(error);
        res.status(500).json({status:"fail", message: error });
    }

});
app.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  });
  

const shortUrlGenerator = (urlstringlength = 6) =>{
    const characters = "ABCBEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    var finalurlstring = '';

    for(i=0; i <urlstringlength; i++){
        finalurlstring += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return finalurlstring;
}


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;