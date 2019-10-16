import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AppGridService {

  symbolReqUrl = 'https://demo_feed.tradingview.com/search?query=&type=stock&exchange=NYSE&limit=100';
  askAndBidReqParentUrl = 'https://demo_feed.tradingview.com/quotes?symbols=';
  preReqUrl = 'https://demo_feed.tradingview.com/history?symbol=ACN&resolution=D&from=1522108800&to=1522108800';

  parseSymbols(symbols: any) {
    symbols.forEach((symbol: { symbol: string; }, index) => {
      this.askAndBidReqParentUrl += 'NYSE%3A' + symbol.symbol + '%2C';
    });

    const secondReqUrl: string = this.askAndBidReqParentUrl.slice(0, -3);
    return secondReqUrl;
  }

  constructor(private http: HttpClient) {
    this.http = http;
  }

  async getAskAndBid() {
    this.http.get(this.preReqUrl);
    const response = await this.http.get(this.symbolReqUrl).toPromise();
    const secondResponse = await this.http.get(this.parseSymbols(response)).toPromise();
    return secondResponse;
  }
}
