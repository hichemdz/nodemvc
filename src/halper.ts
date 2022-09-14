import bcrypt from 'bcrypt'

const saltRounds = bcrypt.genSaltSync(10);;

export const hash =  (myPlaintextPassword: any) =>  bcrypt.hash(myPlaintextPassword, saltRounds)

export const compare =  (myPlaintextPassword: any, hash: any) =>  bcrypt.compare(myPlaintextPassword, hash)