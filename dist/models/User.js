"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const halper_1 = require("../halper");
const response = (state, message, data) => ({ state, message, data });
const prisma = new client_1.PrismaClient();
class User {
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.findMany();
                console.log(user);
            }
            catch (err) {
                console.error(err);
                prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    auth(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let errorMessage = 'Incorrect entries ';
                let successMessage = 'the login is successful';
                const user = yield prisma.user.findUnique({ where: { email } });
                if (user) {
                    const result = yield (0, halper_1.compare)(password, user.password);
                    let message = result ? successMessage : errorMessage;
                    return response(result, message, { name: user.name, email: user.email });
                }
                else {
                    return response(false, errorMessage, null);
                }
            }
            catch (err) {
                console.error(err);
                prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.create({
                    data
                });
                return user;
            }
            catch (err) {
                console.error(err);
                prisma.$disconnect();
                process.exit(1);
            }
        });
    }
}
exports.default = new User();
