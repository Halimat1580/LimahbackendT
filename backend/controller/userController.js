const USER_ROLE = require("../model/userRoleModel");

// post users, c -- for create

const create_user = async (req, res) => {
  try {
    const user = await USER_ROLE.create(req.body);
    res.status(201).json({ msg:"user created successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

// get users, r -- for read
const getAll_users = async (req, res) => {
  try {
    const user = await USER_ROLE.find({});
    if(user.length< 1)return res.json({msg:'No users found'})
    res.status(200).json({ user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

// update users, u -- for update
const update_user = async (req, res) => {
  try {
    const {id: userid } = req.params;
    const user = await USER_ROLE.findOneAndUpdate({ _id: userid }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ msg:'user updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

//update user, D-- for dlete
const delete_user = async(req,res)=>{
    try {
        const { id:userid } = req.params;
        const user = await USER_ROLE.findOneAndDelete({ _id: userid });
    
        res.status(200).json({ msg:'user deleted successfully' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
      }
}

//params for single user

const single_user = async(req,res)=>{
    try{
        const { id:userid } = req.params;
        const user = await USER_ROLE.findOne({ _id: userid });
    
        res.status(200).json({ user });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
}

module.exports = {
  create_user,
  getAll_users,
  update_user,
  delete_user,
  single_user
};
