const { Router } = require('express')
const InfoController = require('../../controllers/info.controller')


const router = Router();

const infoController = new InfoController();

router.get('/', infoController.getInfoServer)

module.exports = router