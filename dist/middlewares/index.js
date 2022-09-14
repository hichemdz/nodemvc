"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestMiddelware = exports.authMiddelware = void 0;
const guestMiddelware = (req, res, next) => {
    if (req.session.auth)
        return res.redirect('/');
    next();
};
exports.guestMiddelware = guestMiddelware;
const authMiddelware = (req, res, next) => {
    if (!req.session.auth)
        return res.redirect('/login');
    next();
};
exports.authMiddelware = authMiddelware;
