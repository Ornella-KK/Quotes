import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Marilyn Monroe','I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.',0,0, new Date(2020,6,13)),
    new Quote('Helen Keller','When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',0,0, new Date(2019,4,5)),
    new Quote('Mother Teresa','Let us always meet each other with smile, for the smile is the beginning of love.', 0,0, new Date(2018,2,1)),
    new Quote('Leonardo Da Vinci','It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.', 0,0, new Date(2020,9,28)),
    new Quote('H. Jackson Brown, Jr.','Remember that the happiest people are not those getting more, but those giving more.', 0,0, new Date(2005,5,20)),
    new Quote('Albert Einstein','If you want to live a happy life, tie it to a goal, not to people or things.', 0,0, new Date(2016,11,6)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuot = !this.quotes[index].showQuot;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].Author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
