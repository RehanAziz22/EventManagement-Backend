const express = require("express")
const feedbackController = require("../Controllers/feedbackControlle")

const router = express.Router()

router.get('/',feedbackController.getAllFeedbacks)
router.post('/create',feedbackController.createFeedback)


module.exports = router
