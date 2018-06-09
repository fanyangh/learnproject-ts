import UserBLL from '../../../BLL/UserBLL';
import * as _ from 'lodash';
import * as Debug from 'debug';

const debug = Debug('APP:user-self');
const userBLL = new UserBLL();

module.exports = {
  'USE /v1/user/*': async (req, res, next) => {
    debug(`enter  ${req.method} ${req.originalUrl} use`);
    try {
      const user = await userBLL.sign(req);
      res.locals.userAuth = user;
      next();
    } catch (err) {
      next(err);
    }
  },
  /**
   * @api {PUT} /v1/user/self 修改个人资料
   * @apiGroup UserSelf
   * 
   * @apiParam {string} name 姓名
   * @apiParam {file='jpg','png','jpeg','gif'} avatar 头像
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   status: 'success',
   *   result: {
   *     id: 3,
   *     name: '汽车美容',
   *     phone: '18888888888',
   *     avatar: '/image/avatar/A11E2B9E-4F4C-4CA4-8AA4-195555BFE5F3.png'
   *   }
   * }
   */
  'PUT /v1/user/self': async (req, res, next) => {
    debug(`enter ${req.method} ${req.originalUrl} route`);
    try {
      req.body.id = res.locals.userAuth.id;
      const user = await userBLL.update(req);
      res.return(_.omit(user, ['password', 'salt', 'token', 'refresh_token', 'openid', 'createdAt', 'updatedAt']));
    } catch (err) {
      next(err);
    }
  },
  /**
   * @api {GET} /v1/user/self 获取个人资料
   * @apiGroup UserSelf
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   status: 'success',
   *   result: {
   *     id: 3,
   *     name: '汽车美容',
   *     phone: '18888888888',
   *     avatar: '/image/avatar/A11E2B9E-4F4C-4CA4-8AA4-195555BFE5F3.png'
   *   }
   * }
   */
  'GET /v1/user/self': async (req, res, next) => {
    debug(`enter ${req.method} ${req.originalUrl} route`);
    try {
      const user = res.locals.userAuth.get({ plain: true });
      res.return(_.omit(user, ['password', 'salt', 'token', 'refresh_token', 'openid', 'createdAt', 'updatedAt']));
    } catch (err) {
      next(err);
    }
  },
}