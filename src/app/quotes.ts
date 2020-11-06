export class Quote {
  showQuot: boolean;
  constructor(public Author: string,public quot: string,public completeDate: Date){
    this.showQuot=false;
  }
}