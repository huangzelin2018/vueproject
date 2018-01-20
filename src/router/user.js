import userList from '../component/user/list'
import userEdit from '../component/user/edit'
import userAdd from '../component/user/add'


let userRouter = [
  {
    path: '/user/list',
    component: userList
  },
  {
    path: '/user/edit',
    component: userEdit
  },
  {
    path: '/user/add',
    component: userAdd
  }
];

export default userRouter;
