"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = bcrypt_1.default.genSaltSync(10);
;
const hash = (myPlaintextPassword) => bcrypt_1.default.hash(myPlaintextPassword, saltRounds);
exports.hash = hash;
const compare = (myPlaintextPassword, hash) => bcrypt_1.default.compare(myPlaintextPassword, hash);
exports.compare = compare;
