import { PrismaClient } from '@prisma/client'
import { hash, compare } from '../halper';

const response = (state: Boolean, message: String, data: any) => ({ state, message, data })

const prisma = new PrismaClient()

class User {

    async all() {

        try {
            const user = await prisma.user.findMany()
            console.log(user);
        } catch (err) {
            console.error(err)
            prisma.$disconnect()
            process.exit(1)
        }

    }

    async auth(email: any, password: any) {
        
        
        try {
            let errorMessage = 'Incorrect entries ';
            let successMessage = 'the login is successful';

            const user = await prisma.user.findUnique({where: {email}})
            if (user) {
                const result = await compare(password, user.password);
                let message = result ?  successMessage :errorMessage;
                return response(result, message, { name: user.name, email: user.email });
            } else {
                return response(false, errorMessage, null);
            }

        } catch (err) {
            console.error(err)
            prisma.$disconnect()
            process.exit(1)
        }
    }


    async create(data: any) {
        try {
            const user = await prisma.user.create({
                data
            })
            return user;
        } catch (err) {
            console.error(err)
            prisma.$disconnect()
            process.exit(1)
        }
    }



}

export default new User()