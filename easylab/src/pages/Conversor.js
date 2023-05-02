import Filter from "../components/Filter";
import Header from "../components/Header";
import Description from "../components/Description";
import ConversorForm from '../components/Conversor';
import { ConversorProvider } from '../context/ConversorProvider';

function Conversor() {
    return (
        <>
            <Header
                navList={["conversor","solutions","ata"]}
            />
            <main>
                <ConversorProvider>
                    <Filter
                        init='volume'
                        type='conversor'
                    />
                    <Description
                        type='conversor'
                    />
                    <ConversorForm/>
                </ConversorProvider>
            </main>
        </>
    );
}
  
export default Conversor;