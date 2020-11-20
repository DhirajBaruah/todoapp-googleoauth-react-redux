exports.authenticate = (req, res, next) => {
    if(!req.user){
        return res.status(403).json({
            error : "ACEESS DENIED"
        })
    } else {
        next();
    }
};