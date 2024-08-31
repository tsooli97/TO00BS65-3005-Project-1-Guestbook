const fs = require("fs");

exports.indexGet = (req, res) => {
  res.render("index");
};

exports.guestbookGet = (req, res) => {
  try {
    const guestbookMessages = fs.readFileSync("./data/guestbook.json");
    res.render("guestbook", {
      messages: JSON.parse(guestbookMessages),
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

exports.newmessageGet = (req, res) => {
  res.render("new_message");
};

exports.newMessagePost = (req, res) => {
  const newEntry = {
    name: req.body.name,
    country: req.body.country,
    message: req.body.message,
    timestamp: new Date(),
  };

  let guestbookMessages;
  try {
    guestbookMessages = fs.readFileSync("./data/guestbook.json");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }

  const guestbookJSON = JSON.parse(guestbookMessages);

  guestbookJSON.push(newEntry);

  try {
    fs.writeFileSync("./data/guestbook.json", JSON.stringify(guestbookJSON));
    res.redirect("/guestbook");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

exports.ajaxmessageGet = (req, res) => {
  res.render("ajaxmessage");
};

exports.ajaxmessagePost = (req, res) => {
  console.log(req.body);
  const newEntry = {
    name: req.body.name,
    country: req.body.country,
    message: req.body.message,
    timestamp: new Date(),
  };

  let guestbookMessages;
  try {
    guestbookMessages = fs.readFileSync("./data/guestbook.json");

    const guestbookJSON = JSON.parse(guestbookMessages);

    guestbookJSON.push(newEntry);

    fs.writeFileSync("./data/guestbook.json", JSON.stringify(guestbookJSON));
    res.json({ success: true, messages: guestbookJSON });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
};
