import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CryptoState, CoinGeckoResponse } from '../../types';
import { RootState } from '../../app/store';

const initialState: CryptoState = {
  cryptos: [],
  status: 'idle',
  error: null
};

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async () => {
    const response = await axios.get<CoinGeckoResponse[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h,24h,7d'
    );
    
    return response.data.map(coin => ({
      id: coin.id,
      rank: coin.market_cap_rank,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      image: coin.image,
      price: coin.current_price,
      priceChange1h: coin.price_change_percentage_1h_in_currency,
      priceChange24h: coin.price_change_percentage_24h,
      priceChange7d: coin.price_change_percentage_7d_in_currency,
      marketCap: coin.market_cap,
      volume24h: coin.total_volume,
      circulatingSupply: coin.circulating_supply,
      maxSupply: coin.max_supply,
      favorite: false,
      sparkline: coin.sparkline_in_7d.price
    }));
  }
);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const cryptoIndex = state.cryptos.findIndex(crypto => crypto.id === action.payload);
      if (cryptoIndex !== -1) {
        state.cryptos[cryptoIndex].favorite = !state.cryptos[cryptoIndex].favorite;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  }
});

export const { toggleFavorite } = cryptoSlice.actions;

export const selectAllCryptos = (state: RootState) => state.crypto.cryptos;
export const selectCryptoById = (state: RootState, cryptoId: string) => 
  state.crypto.cryptos.find(crypto => crypto.id === cryptoId);

export default cryptoSlice.reducer;