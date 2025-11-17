import bcrypt from 'bcryptjs';
import {HASH_COMPLEXITY} from '../../config.js';

export const generateHash = async (plainText) => {
    const passwordOriginal = password;
    const saltRounds = HASH_COMPLEXITY;

    const hash = await bcrypt.hash(passwordOriginal, saltRounds);
    return hash;
};