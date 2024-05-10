const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' })

module.exports = async (req, res) => {
    parser.single('uploads')(req, res, err => {
        if (err)
            res.status(500).json({ error: 1, payload: err });
        else {
            const image = {};
            image.id = req.file.filename;
            image.url = `/uploads/${image.id}`;
            console.log(image)
            res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
        }
    });
}