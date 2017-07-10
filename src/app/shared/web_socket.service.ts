import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";
import "rxjs/Rx";
/**
 * Created by cnpc on 2017/7/4.
 */
export class WebSocketService {
  ws: WebSocket;
  constructor() {};
  createObservableSocket(url: string,id: number) : Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onclose = (event) => observer.complete();
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onopen = (event) => this.sendMessage({productId: id});
        return () => this.ws.close(); // 调用unsubscribe时执行，关闭socket连接
      }
    ).map(message => JSON.parse(message));
  }
  sendMessage(message: any){
    this.ws.send(JSON.stringify(message));
  }
}
