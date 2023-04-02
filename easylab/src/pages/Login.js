import Header from '../components/Header'
import LoginForm from '../components/Form/login';

function Login() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <LoginForm/>
            </main>
        </>
    );
}
  
export default Login;