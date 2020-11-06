import styled from 'styled-components';

export default function Product({image, label, shortDescription, sale}) {
    return (
        <ProductWrapper>
            {sale ? <section><div>Sale</div><img src={image} alt="LOLOLOL"/></section> : <img src={image} alt="LOLOLOL"/>}
        <h2>{label.toUpperCase()}</h2>
        <h3>{shortDescription}</h3>
        </ProductWrapper>

    );
};


const ProductWrapper = styled.section`
display: flex;
flex-direction: column;
justify-items: flex-end;
text-align: center;
max-width: 360px;
gap: 0.5rem;
font-family: sans-serif;

section {
    overflow: hidden;
    position: relative;
}

div {
    background-color: red;
    width: 50%;
    height: 5vh;
    position: absolute;
    z-index: 100;
    transform: rotate(-45deg);
    left: -12%;
    top: 5%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-right: 2%;
}

img {
    width: 360px;
    height: auto;
}

 h2 {
    font-size: 1.5rem;
    padding: 1%;
    font-weight: 700;
 }

 h3 {
     font-size: 1.3rem;
     padding: 1%;
     font-weight: 300;
 }
`;