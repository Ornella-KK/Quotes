import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {Author:'Marilyn Monroe', quot:'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.'},
    {Author:'Helen Keller',quot:'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'},
    {Author:'Mother Teresa',quot:'Let us always meet each other with smile, for the smile is the beginning of love.'},
    {Author:'Leonardo Da Vinci',quot:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'},
    {Author:'H. Jackson Brown, Jr.',quot:'Remember that the happiest people are not those getting more, but those giving more.'},
    {Author:'Albert Einstein',quot:'If you want to live a happy life, tie it to a goal, not to people or things.'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
