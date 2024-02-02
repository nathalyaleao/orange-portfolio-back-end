const multer = require('multer');

module.exports = (multer ({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
        filename: (req, file, cb) => {
            const nomeImagem = Date.now().toString() + "_" + file.originalname;
            req.body.arquivo = "/" + nomeImagem;
            cb(null, nomeImagem)
        }
    }),
    fileFilter: (req, file, cb) => {

        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg) {
            return cb(null, true);
        }

        return cb(null, false);
    }
}))