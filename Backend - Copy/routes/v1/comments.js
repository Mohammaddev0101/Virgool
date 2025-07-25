const express = require('express');
const { createComment, updateComment, deleteComment, approveComment, getAllComments } = require('../../controllers/v1/comments');
const authenticatedMiddleware = require('../../middlewares/authenticated');
const adminMiddleware = require('../../middlewares/isAdmin');

const router = express.Router();

router.post('/', authenticatedMiddleware, createComment);
router.put('/:id', authenticatedMiddleware, updateComment);
router.delete('/:id', authenticatedMiddleware, deleteComment);
router.put('/:id/approve', authenticatedMiddleware, adminMiddleware, approveComment);
router.get('/', authenticatedMiddleware,adminMiddleware, getAllComments);

module.exports = router;