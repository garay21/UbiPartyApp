import bcrypt from 'bcrypt'

export const hashPassword = async (password) => {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password,saltRounds)
    return hashedPassword
}

export async function verifyPassword(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match; 
}