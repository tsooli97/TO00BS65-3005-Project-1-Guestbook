const express = require("express");
const router = express.Router();
const guestbookController = require("../controllers/guestbookController");

router.get("/", guestbookController.indexGet);
router.get("/guestbook", guestbookController.guestbookGet);
router.get("/newmessage", guestbookController.newmessageGet);
router.post("/newmessage", guestbookController.newMessagePost);
router.get("/ajaxmessage", guestbookController.ajaxmessageGet);
router.post("/ajaxmessage", guestbookController.ajaxmessagePost);

module.exports = router;
