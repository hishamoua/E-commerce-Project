
const checkRoles = (req, res, next) => {
 const user = req.user;
 if (user && (user.role === 'admin' || user.role === 'manager')) {
   next();
 } else {
   res.status(403).json({
    "status": 403,
    "message": "you don't have enough privilege"
  });
 }
};


export default checkRoles