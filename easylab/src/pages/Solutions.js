import { useState } from 'react';
import Filter from "../components/Filter";
import Header from "../components/Header";
import Description from "../components/Description";
import { FormProgram } from '../components/Form';

function Soulutions() {
    const [filter, setFilter] = useState('buffer');
    return (
        <>
            <Header
                navList={["conversor","solutions","ata"]}
            />
            <main>
                <Filter
                    init='buffer'
                    type='solutions'
                    filter={filter}
                    setFilter={setFilter}
                />
                <Description
                    type='solutions'
                    filter={filter}
                />
                {/* <FormProgram
                    filter={filter}
                    button='Calculate'
                /> */}
            </main>
        </>
    );
}
  
export default Soulutions;