import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AppGridService {

  symbolReqUrl = 'https://demo_feed.tradingview.com/search?query=&type=stock&exchange=NYSE&limit=200';
  askAndBidReqParentUrl = 'https://demo_feed.tradingview.com/quotes?symbols=';

  parseSymbols(symbols: any) {
    symbols.forEach( (symbol) => {
        this.askAndBidReqParentUrl += 'NYSE%3A' + symbol.symbol + '%2C';
    });
    return this.askAndBidReqParentUrl = this.askAndBidReqParentUrl.slice(0, -3);
  }

  constructor(private http: HttpClient) {
    this.http = http;
  }

  async getAskAndBid() {
    const response = await this.http.get(this.symbolReqUrl).toPromise();
    const secondResponse = await this.http.get(this.parseSymbols(response)).toPromise();
    return secondResponse;
  }
}
