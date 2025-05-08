import { PriceUpdate } from '../types';
import { store } from '../app/store';
import { updatePrices } from '../features/crypto/cryptoSlice';

export class MockWebSocket {
  private interval: number | null = null;

  constructor(private updateFrequency: number = 2000) {}

  connect(): void {
    if (this.interval !== null) return;
    
    this.interval = setInterval(() => {
      const state = store.getState();
      const cryptos = state.crypto.cryptos;
      
      const updates: PriceUpdate[] = cryptos.map(crypto => {
        // Generate random price fluctuation (between -1.5% and +1.5%)
        const priceChange = crypto.price * (Math.random() * 0.03 - 0.015);
        const newPrice = crypto.price + priceChange;
        
        // Generate random percentage changes
        const newPriceChange1h = crypto.priceChange1h + (Math.random() * 0.4 - 0.2);
        const newPriceChange24h = crypto.priceChange24h + (Math.random() * 0.6 - 0.3);
        const newPriceChange7d = crypto.priceChange7d + (Math.random() * 0.8 - 0.4);
        
        // Generate random volume change (between -3% and +3%)
        const volumeChange = crypto.volume24h * (Math.random() * 0.06 - 0.03);
        const newVolume = crypto.volume24h + volumeChange;
        
        return {
          id: crypto.id,
          price: newPrice,
          priceChange1h: newPriceChange1h,
          priceChange24h: newPriceChange24h,
          priceChange7d: newPriceChange7d,
          volume24h: newVolume
        };
      });
      
      store.dispatch(updatePrices(updates));
    }, this.updateFrequency);
  }

  disconnect(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

export const mockWebSocket = new MockWebSocket();