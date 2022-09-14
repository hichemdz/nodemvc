"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    index(req, res) {
        const success = req.flash('success');
        res.render('index', { success });
    }
}
exports.default = new HomeController();
