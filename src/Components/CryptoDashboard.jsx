import React, { useEffect, useState } from 'react';
import CryptoCard from './CryptoCard';
import FetchCryptos from './FetchCryptos';

function CryptoDashboard(props) {
    const [cryptos, setCryptos] = useState([])
    useEffect(()=>{
        const loadCryptos = async()=>{
            const coins = await FetchCryptos();
            setCryptos(coins)
        };
        loadCryptos()
    }, []);
    return (
        <div style={styles.dashboard}>
            {cryptos.map((crypto)=> (
                <CryptoCard
                    key={crypto.id}
                    name={crypto.name}
                    symbol={crypto.symbol}
                    price={crypto.price}
                    marketCap={crypto.marketCap}
                    imageUrl={crypto.iconUrl}
                />
            ))}
        </div>
    );
}
const styles = {
    dashboard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    }
}
export default CryptoDashboard;