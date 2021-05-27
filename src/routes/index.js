const { Router } = require('express');
const router = Router();

//Peticion GET: Cuando se accede a la APP se renderiza la página index.hbs
router.get('/', (req, res) => {

    res.render('index.hbs');
});

module.exports = router;