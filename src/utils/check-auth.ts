const USERNAME = 'admin@gmail.com'
const PASSWORD = 'test123'

const checkUser = (username: string, password: string) => {
    if (!username || !password){
        return {status: 'error', message: 'Username or Password is missing'}
    }

    if (username != USERNAME){
        return {status: 'error', message: 'Incorrect Username'}
    }

    if (password != PASSWORD){
        return {status: 'error', message: 'Incorrect Username'}
    }

    if (password == PASSWORD && username == USERNAME){
        return {status: 'success', message: 'Welcome', user: {username, password}}
    }
}

export default checkUser