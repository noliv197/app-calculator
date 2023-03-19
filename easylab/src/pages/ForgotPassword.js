import Header from '../components/Header'
import Form from '../components/Form'

function ForgotPassword() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='forgot' 
                    button='Send Request' 
                    h1='Reset Password'
                    links={false}
                />
            </main>
        </>
    );
}
  
export default ForgotPassword;