const Theme = {
    typography:{
        font: "Roboto",
        weight:{
            extraBold: 700,
            bold: 500,
            normal: 400
        },
        size:{
            lg: "2em",
            md: "1.5em",
            rg: "1em",
            sm: "0.75em"
        }
    },
    spacing:{
        xg: "3.5rem",
        lg: "2rem",
        xm: "1.5rem",
        md: "1rem",
        rg: "0.75rem",
        sm: "0.5rem",
        xs: "0.25rem "
    },
    color:{
        background:{
            primary: "#E1D0D0",
            light: "#f9f9f9",
        },
        text:{
            primary: "#000000", 
            secondary: "#616266",
        },
        shadow:{
            primary: "1px 1px 10px 1px rgba(97,98,102,0.52)",
            secondary: "-1px 1px 10px 4px  rgba(225,208,208,0.59)"
        },
        border:{
            primary: "#5f9ea0", 
            secondary: "#9799A6",
            error: "#c32b2b",
            valid: "#2fdd83"
        },
        filter:{
            primary: "invert(38%) sepia(8%) saturate(197%) hue-rotate(191deg) brightness(97%) contrast(94%)"
        }
    },
}

export default Theme