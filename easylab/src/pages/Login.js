import Header from '../components/Header'
import Form from '../components/Form'

function Login() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form 
                    type='login' 
                    button='Login' 
                    h1='Login'
                    links={true}
                />
            </main>
        </>
    );
}
  
export default Login;