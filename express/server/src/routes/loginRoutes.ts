import { Router, Request, Response, NextFunction } from "express"

type HttpBody = { [key: string]: string | undefined };

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next()
		return
	} else {
		res.status(403)
		res.send('Not permitted')
	}
}

const router = Router()

router.get('/', (req: Request, res: Response) => {

	if (req.session && req.session.loggedIn) {
		res.send(`
			<div>
				<div>You are logged in</div>
				<a href="/logout">Logout</div>
			</div>
		`)
	} else {
		res.send(`
			<div>
				<div>You are logged out</div>
				<a href="/login">Login</div>
			</div>
		`)
	}

})

router.get('/login', (req: Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
			<label>Password</label>
			<input name="password" />
			</div>
			<button>Submit</button>
		</form>
	`)
})


router.post('/login', (req: Request<{}, {}, HttpBody>, res: Response) => {
	const { email, password } = req.body

	if (email && password && email === 'hi@hi.com' && password === 'password') {
		req.session = { loggedIn: true }

		res.redirect('/')
	} else {
		res.send('Invalid email or password')
	}

})


router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined
	res.redirect('/')
})


router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send(`
		<div>Welcome to protected route, logged in user</div>
	`)
})

export { router }

