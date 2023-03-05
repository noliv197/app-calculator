let text = {
    conversor: {
        volume : {
            title: 'Unit Conversor',
            description: ` 
            [Add description]
            `,
            name: 'Volume',
            equation: '[Add equation]',
            units: [
                {
                    value: 'ul',
                    label: 'Microlitro (μL)',
                    selected: ''
                },
                {
                    value: 'ml',
                    label: 'Mililitro (mL)',
                    selected: ''
                },
                {
                    value: 'l',
                    label: 'Litro (L)',
                    selected: ''
                }
            ]
        },
        mass :{
            title: 'Unit Conversor',
            description: `
            [Add description]
            `,
            equation: '[Add equation]',
            name: 'Mass',
            units: [
                {
                    value: 'ug',
                    label: 'Micrograma (μg)',
                    selected: ''
                },
                {
                    value: 'mg',
                    label: 'Miligrama (mg)',
                    selected: ''
                },
                {
                    value: 'g',
                    label: 'Grama (g)',
                    selected: ''
                },
                {
                    value: 'kg',
                    label: 'Kilograma (kg)',
                    selected: ''
                }
            ]
        },
        molarity: {
            title: 'Unit Conversor',
            description: `
            [Add description]
            `,
            equation: '[Add equation]',
            name: 'Molarity',
            units: [
                {
                    value: 'umol',
                    label: 'Micromol (μmol)',
                    selected: ''
                },
                {
                    value: 'mmol',
                    label: 'Milimol (mmol)',
                    selected: ''
                },
                {
                    value: 'mol',
                    label: 'Mol (mol)',
                    selected: ''
                }
            ]
        },
        temperature: {
            title: 'Unit Conversor',
            description: `
            [Add description]
            `,
            equation: '[Add equation]',
            name: 'Temperature',
            units: [
                {
                    value: 'c',
                    label: 'Celsius (°C)',
                    selected: ''
                },
                {
                    value: 'f',
                    label: 'Fahrenheit (°F)',
                    selected: ''
                },
                {
                    value: 'k',
                    label: 'Kelvin (K)',
                    selected: ''
                }
            ]
        },
        time: {
            title: 'Unit Conversor',
            description: `
            [Add description]
            `,
            equation: '\(F = 1.8 C + 32\) e \(K = C + 273.15\)',
            name: 'Time',
            units: [
                {
                    value: 'us',
                    label: 'Microseconds (μs)',
                    selected: ''
                },
                {
                    value: 'ms',
                    label: 'Miliseconds (ms)',
                    selected: ''
                },
                {
                    value: 's',
                    label: 'Seconds (s)',
                    selected: ''
                },
                {
                    value: 'm',
                    label: 'Minutes (m)',
                    selected: ''
                }
            ]
        }
    },
    solutions: {
        buffer: {
            title: 'Buffer',
            description: `
            [Add description]
            `,
            equation: 'pH = pKa + log [sal]/[ácido]',
            inputs: [
                {
                    value: "pH",
                    title: "Buffer's pH: ",
                    placeholder: "",
                    required: "required"
                },
                {
                    value: "pKa",
                    title: "Acid's pKa: ",
                    placeholder: "",
                    required: "required"
                },
                {
                    value: "vol",
                    title: "Final Volume: ",
                    placeholder: "in Lites (L)",
                    required: "required"
                }
            ]
        },
        dilution: {
            title: 'Dilutions',
            description: `
            [Add description]
            `,
            equation: 'C1 x V1 = C2 x V2',
            inputs: [
                {
                    value: "C1",
                    title: "Initial Concentration: ",
                    placeholder: "C1",
                    required: ""
                },
                {
                    value: "C2",
                    title: "Final Concentration: ",
                    placeholder: "C2",
                    required: ""
                },
                {
                    value: "V1",
                    title: "Initial Volume: ",
                    placeholder: "V1",
                    required: ""
                },
                {
                    value: "V2",
                    title: "Final Volume: ",
                    placeholder: "V2",
                    required: ""
                }
            ]
        }
    },
    others: {

    }
}

export default text