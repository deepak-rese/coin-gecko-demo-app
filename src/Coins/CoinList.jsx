import React, { useState, useEffect } from "react";
import { CoinTableDisplay  } from "./CoinTableDisplay";
import { Coin } from "../components/Coin";
import {TablePaginationDisplay} from "./TablePaginationDisplay"; 

const CoinList = (props) => {
  const [coinList, setCoinList] = useState();
  const [selectedCoin,setSelectedCoin] = useState(0);
  const [pageNumber,setPageNumber] = useState(0);
  const [pageSize,setPageSize] = useState(10);

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
            setCoinList(result);
        },
        (err) => {
          console.log(err);
        }
      );
  },[]);

  useEffect(()=>{
        setSelectedCoin(0);
  },[pageNumber,pageSize]);

  if (coinList == null) {
    return "";
  }

  const currentPageList = coinList.slice((pageNumber)*pageSize,(pageNumber+1)*pageSize);
  const coinDataList = currentPageList.map(coin=>({
      id:coin.id,
      image:coin.image,
      name:coin.name,
      symbol:coin.symbol,
      currentPrice:coin.current_price,
      high24:coin.high_24h,
      low24:coin.low_24h
  }));

  const totalSize = coinList.length;
  const CoinDisplay = selectedCoin === 0 ? null : <Coin id={selectedCoin} />;
  return (
    <div>
        <h1>Coins</h1>
        <CoinTableDisplay rows = {coinDataList} onSelectChange={(id)=>{setSelectedCoin(id)}} selectedCoinID = {selectedCoin} />
        <TablePaginationDisplay pageNumber = {pageNumber} pageSize={pageSize} totalSize={totalSize}
            onPageChange = {(pageNumber)=>{setPageNumber(pageNumber)}}
            onPageSizeChange = {(pageSize)=>setPageSize(pageSize)}/>
        {CoinDisplay}
    </div>
  );
};

export default CoinList;
