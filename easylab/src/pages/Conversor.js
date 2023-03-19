import { useState } from 'react';
import Filter from "../components/Filter";
import Header from "../components/Header";
import Description from "../components/Description";
import ConversorForm from '../components/Conversor';

function Conversor() {
    const [filter, setFilter] = useState('volume');
    return (
        <>
            <Header
                navList={["conversor","solutions","ata"]}
            />
            <main>
                <Filter
                    init='volume'
                    type='conversor'
                    filter={filter}
                    setFilter={setFilter}
                />
                <Description
                    type='conversor'
                    filter={filter}
                />
                <ConversorForm
                    filter={filter}
                />
            </main>
        </>
    );
}
  
export default Conversor;