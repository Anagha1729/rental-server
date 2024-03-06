const express=require('express')

const userController=require('../Controller/userController')
const adminController=require('../Controller/adminController')
const bookController=require('../Controller/bookController')

//multer import
const multerConfig=require('../Middleware/bookMiddleware')
const jwtMiddleware=require('../Middleware/jwtMiddleware')
// const multer = require('multer')


const router=new express.Router()
// router.post('/register')
router.post('/user/register',userController.register)
router.post('/admin/register',adminController.adminregister)
// router.post('/admin/login',adminController.login)
router.post('/user/login',userController.login)
router.post('/admin/addbooks',jwtMiddleware,multerConfig.single('book_image'),bookController.addBooks)
router.get('/admin/getadminview',jwtMiddleware,bookController.getAdminView)
router.get('/admin/category/novel',jwtMiddleware,bookController.getCatagoryNovel)
router.get('/admin/category/autobio',jwtMiddleware,bookController.getCatagoryAutobiography)
router.get('/admin/category/worldclass',jwtMiddleware,bookController.getCatagoryWorldClassics)
router.get('/admin/category/fiction',jwtMiddleware,bookController.getCatagoryFiction)
router.delete('/admin/deletebook/:id',jwtMiddleware,bookController.deleteBookList)
router.put('/admin/updatebook/:id',jwtMiddleware,bookController.bookUpdate)
module.exports=router