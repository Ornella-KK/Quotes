export class Quote {
  showQuot: boolean;
  constructor(public Author: string,public quot: string, public downvote:number,public upvote:number,public completeDate: Date){
    this.showQuot=false;
  }
}