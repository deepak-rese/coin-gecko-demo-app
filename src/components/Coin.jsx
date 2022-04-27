import React,{useState,useEffect} from 'react';
import ReactLoading from 'react-loading';

import { CoinAvatar } from './CoinAvatar';
import { MarketValueDisplay } from './CurrencyDisplay';
import { Description, DescriptionUnSafe } from './Description';
import { DetailList } from './Detail';
import { ErrorMessage } from './Error';

export const Coin = (props)=>{
    const [coinData,setCoinData] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState();
    // get coin data using id
    useEffect(()=>{
        const url = "https://api.coingecko.com/api/v3/coins/" + props.id;
        setIsLoading(true);
        setError(false);

        fetch(url)
        .then((res) => res.json())
        .then(
            result=>{
                setCoinData(result);
            },
            err=>{
                setError(true);
            })
        .finally(()=>setIsLoading(false));
    },[props.id]);

    let display = "";

    if(isLoading){
        display = <ReactLoading color="#1a66b8" />
    }else if(error){
        display = <ErrorMessage message="Unable to Load Data"/>
    }else if(coinData!=null){
        const coinDetails = [
            {
                label:'Symbol',
                value: coinData.symbol
            },
            {
                label:'Hashing Algorithm',
                value:coinData.hashing_algorithm
            },
            {
                label:'HomePage',
                value:coinData.links.homepage
            },
            {
                label:'Geneis Date',
                value:coinData.genesis_date
            }
    ];
        display = (
            <div className='coin-display'>
            <CoinAvatar classNameAttr="coin-avatar" imageURL={coinData.image.small} name={coinData.name} width="48px" height="48px"/>
            <MarketValueDisplay label="Market cap" prefix="€" value={coinData.market_data.market_cap['eur']}/>
            <Description heading="Profile">
                <DetailList details={coinDetails}/>
            </Description>
            <DescriptionUnSafe content={coinData.description['en']}/>
        </div>
        ) ;
    }

    return display;
}