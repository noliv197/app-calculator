import Header from '../components/Header'
import Form from '../components/Form'

function ResetPassword() {
    return (
        <>
            <Header
                navList={["calculator"]}
            />
            <main>
                <Form
                    type='reset' 
                    button='Confirm' 
                    h1='Reset Password'
                    links={false}
                />
            </main>
        </>
    );
}
  
export default ResetPassword;