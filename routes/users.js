// If you have a route that is static, make sure you place it above the dynamic route or it will have the values pulled in.
// Express goes top to bottom

const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  // res.send("Create User");
  // console.log(req.body.firstName);
  // res.send("Hi");
});

// Chained method
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  });

// router.get("/:id", (req, res) => {
//   console.group(req.user);
//   res.send(`Get User with ID ${req.params.id}`);
// });
// router.put("/:id", (req, res) => {
//   res.send(`Get User with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Get User with ID ${req.params.id}`);
// });

const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
