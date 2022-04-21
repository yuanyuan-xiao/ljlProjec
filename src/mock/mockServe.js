import Mock from "mockjs";
import user from './user.json'

Mock.mock('/mock/user', { code: 200, data: user})