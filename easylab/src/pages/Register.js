import Header from '../components/Header'
import Form from '../components/Form'

function Register() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='register' 
                    button='Register' 
                    h1='Register'
                    links={true}
                />
            </main>
        </>
    );
}
  
export default Register;