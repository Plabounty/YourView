const Video = require("../models/video");
const User = require("../models/user");
const shortid = require("shortid");
const formidable = require("formidable");

const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

