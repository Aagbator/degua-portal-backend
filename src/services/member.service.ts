import Member from "../database/models/Member";

const getAllMembers = async () => {
  try {
    const members = await Member.findAll();
    return members;
  } catch (err) {
    console.log(err);
  }
};

export default { getAllMembers };
