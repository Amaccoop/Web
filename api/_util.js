// Native
import crypto from "crypto"

// Vendor
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

const algorithm = 'aes-256-cfb';

// get config vars
dotenv.config();

const encrypt = (text) => {
	const hash = crypto.createHash('sha256');
	hash.update(process.env.SIGN_KEY);
	const keyBytes = hash.digest();

	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(algorithm, keyBytes, iv);
	let enc = [iv, cipher.update(text, 'utf8')];
	enc.push(cipher.final());
	return Buffer.concat(enc).toString('base64');
}

const decrypt = (text) => {
	const hash = crypto.createHash('sha256');
	hash.update(process.env.SIGN_KEY);
	const keyBytes = hash.digest();

	const contents = Buffer.from(text, 'base64');
	const iv = contents.slice(0, 16);
	const textBytes = contents.slice(16);
	const decipher = crypto.createDecipheriv(algorithm, keyBytes, iv);
	let res = decipher.update(textBytes, '', 'utf8');
	res += decipher.final('utf8');
	return res;
}

const newAuthToken = () => {
	return encrypt(new Date().toUTCString())
}

const generateAccessToken = async (data) => {
	// Encrypt & Sign
	data = encrypt(data)
	return jwt.sign({ data }, process.env.KEY_TOKEN, { expiresIn: '1d' });
}

const readAccessToken = async (token) => {
	let result
	jwt.verify(token, process.env.KEY_TOKEN, async (err, data) => {
		if (err) { throw err }
		result = decrypt(data.data)
	})

	return result
}

export { encrypt, decrypt, newAuthToken, generateAccessToken, readAccessToken }
