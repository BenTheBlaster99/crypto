import React from 'react';

function CryptoCard({name, symbol,price,marketCap, imageUrl}) {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image} />
            <h3>{name} ({symbol})</h3>
            <p>price :${price} </p>
            <p>Market Cap: ${marketCap}</p>
        </div>
    );
}
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        width: '200px',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
    }
};
export default CryptoCard;