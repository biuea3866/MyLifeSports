import * as bcrypt from 'bcrypt';

export const hash = async(password: string): Promise<string> => {
    const saltOrRound = 10;

    return await bcrypt.hash(password, saltOrRound);
};

export const isHashValid = async(password, encryptedPwd): Promise<boolean> => {
    return await bcrypt.compare(password, encryptedPwd);
};