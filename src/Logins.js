import {useState, useEffect} from ' react '

export default function login(){
    const [ isLoggedIn, setIsLoggedIn ] = useState (false)
    const [error, setError] = useState()

    useEffect(() => {
    if(isLoggedIn) {
        document.title = "Watch your back! "
    } else{
        document.title = " Enter if you dare "
    }
    }, [isLoggedIn])

    const handleLoginForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(email === 'yourmama@gmail.com' && password === '123456'){
            setIsloggedIn(true)
            setErro()
        } else {
            seError('Invalid email or password')
        }
    }

    if (isLoggedIn) {
        return (
            <main>
                <h2>You're Logged In!</h2>
                <button onClick = {() => setIsLoggedIn ( false )}> 
                Logout
                </button>
            </main>
        )
    }

    return (
        <main>
            <h2>Login</h2>
            <section className="login-form">
                <form onSubmit={handleLoginForm}>
                    <label htmlFor= "email">
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label htmlFor="password" >
                        Password:
                        <input type="password" name="password"/>
                    </label>
                    { error &&
                    <p style={{color: 'red'}}>{error}</p>
                    }
                    
                    < input type = "submit" value = "Login " />
                </form>
          <section/>
        </main>

    )

    }
    
