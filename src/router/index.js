const router=require('express').Router();
const controlador=require('../controllers/controller');



router.get('/',controlador.loginGet);
router.post('/login',controlador.loginPost)
router.get('/init',controlador.init);
router.get('/registrar',controlador.regGet);
router.get('/logout',controlador.logout)
router.get('/dashboard',controlador.dashboard)

module.exports = router;