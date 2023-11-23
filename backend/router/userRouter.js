const express = require("express");
const router = express.Router();
const {
  create_user,
  getAll_users,
  update_user,
  delete_user, 
  single_user
} = require("../controller/userController");

// post users, c -- for create
router.post("/api/user", create_user);

//get users, R -- for read
router.get("/api/user", getAll_users);

//update user,U --for update
router.patch("/api/user/:id", update_user);

//delete user,D --for delete
router.delete("/api/user/:id", delete_user);

//params single user,D --for  singleuser
router.get("/api/user/:id", single_user);

module.exports = router;
