import userIndex from '../component/user/index'
import userEdit from '../component/user/edit'
import userAdd from '../component/user/add'


let userRouter = [
  {
    path: '/user/index',
    component: userIndex
  },
  {
    path: '/user/edit/:id',
    component: userEdit
  },
  {
    path: '/user/add',
    component: userAdd
  }
];

export default userRouter;
