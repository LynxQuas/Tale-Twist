import bcrypt from "bcryptjs";

export async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
}

export async function comparePasswords(enteredPassword, storedHashedPassword) {
    try {
        const isMatch = await bcrypt.compare(
            enteredPassword,
            storedHashedPassword
        );
        return isMatch;
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw error;
    }
}
