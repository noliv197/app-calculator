import Header from '../components/Header'
import RegisterForm from '../components/Form/register'

function Register() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <RegisterForm/>
            </main>
        </>
    );
}
  
export default Register;