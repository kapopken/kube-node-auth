function challenge (req, res, next) {

  }
  function configure(options) {
    console.log(options);
    return function authMiddleware(req, res, next) {


            console.log('Request URL:', req.originalUrl)
            const route = options.find((path)=> {

                return req.path.indexOf(path.path) == 0;
            });

            if(route) {
                console.log('trying to athenticate');
                // parse login and password from headers
                const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
                const [username, password] = new Buffer(b64auth, 'base64').toString().split(':')
                const login = new Buffer(route.credential,'base64').toString();
                console.log('supplied creds:', username);
                console.log('required creds:', login);
                if(login === username) {
                    return next();
                }
                console.log('Failed Challenge');
                console.log('Sending Challenge');
                // Access denied...
                res.set('WWW-Authenticate', `Basic realm="${route.path}"`) // change this
                res.status(401).send('Authentication required.') // custom message
      

            } else {
                return next();
            }
           
         
    }
   }

  exports.challenge = configure;