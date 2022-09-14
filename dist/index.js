"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const csurf_1 = __importDefault(require("csurf"));
const routes_1 = require("./routes");
const configs_1 = require("./configs");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.port || 8000;
// statcis 
app.use(express_1.default.static(path_1.default.join(__dirname, 'public', 'assets')));
// views 
app.set('views', path_1.default.join(__dirname, 'public', 'views'));
app.set('view engine', 'hbs');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.raw());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, express_session_1.default)(configs_1.sessionOption));
app.use((0, cookie_parser_1.default)());
app.use((0, connect_flash_1.default)());
app.use((0, csurf_1.default)({ cookie: true }));
app.use((0, morgan_1.default)(':method :url :http-version :referrer :remote-addr :remote-user :req[header] :res[header] :response-time[digits] :status :total-time[digits]'));
app.use((req, res, next) => {
    req.app.locals.csrf = req.csrfToken;
    next();
});
app.use(routes_1.web);
app.listen(port, () => {
    console.log(`start server on http://localhost:${port}`);
});
