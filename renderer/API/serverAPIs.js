

const { net } = require('electron')
 function login(email , password) {

    const request  = net.request({
        method: 'POST',
        protocol: 'https:',
        hostname: 'api.pybots.ai',
        path: '/auth/login',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    request.on('response', (response) => {
       console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        })
        response.on('end', () => {
            console.log('No more data in response.')
        })
    })
}; 

export default login ;