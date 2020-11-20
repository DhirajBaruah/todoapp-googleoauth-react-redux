
exports.authToProfile = (req, res) => {
    res.redirect("http://localhost:4200/")
};

exports.sendUser = (req, res) => {
    res.send(req.user)
};

