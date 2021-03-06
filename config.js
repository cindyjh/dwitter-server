import dotenv from 'dotenv'
dotenv.config()

/**
 * 개발 단계에서 서버가 시작하자 마자 환경변수가 제대로 설정 돼있는지 아닌지를 확인 할 수 있다.
 */
function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue
    if (value == null) {
        throw new Error(`Key ${key} is undefined`)
    }
    return value
}

export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInSec: parseInt(required('JWT_EXPIRES_SEC', 86400)),
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12)),
    },
    db: {
        dialect: required('DB_DIALECT', 'mysql'),
        host: required('DB_HOST'),
        port: parseInt(required('DB_PORT', 3306)),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD', ''),
    },
    port: parseInt(required('PORT', 8080)),
    cors: {
        allowedOrigin: required('CORS_ALLOW_ORIGIN'),
    },
}