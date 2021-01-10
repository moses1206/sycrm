import bcrypt from "bcryptjs"

const users = [
  {
    branchname: "대구지점",
    storename: "지점",
    username: "장부호",
    phonenumber: "1111111111",
    userid: "user0",
    password: bcrypt.hashSync("!!123456", 10),
  },
  {
    branchname: "대구지점",
    storename: "천일상사",
    username: "백성기",
    phonenumber: "1111111111",
    userid: "user1",
    password: bcrypt.hashSync("!!123456", 10),
  },
  {
    branchname: "대구지점",
    storename: "맛나",
    username: "신현희",
    phonenumber: "2222222222",
    userid: "user2",
    password: bcrypt.hashSync("!!123456", 10),
  },
  {
    branchname: "대구지점",
    storename: "비산상회",
    username: "이운영",
    phonenumber: "3333333333",
    userid: "user3",
    password: bcrypt.hashSync("!!123456", 10),
  },
  {
    branchname: "대구지점",
    storename: "제이유통",
    username: "박성흠",
    phonenumber: "4444444444",
    userid: "user4",
    password: bcrypt.hashSync("!!123456", 10),
  },
]

export default users
