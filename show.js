class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }

  addRating(rating) {
    if (rating < 0){
      return;
    }
    if (rating > 5){
      return;
    }
    this.ratings.push(rating);
  }

  getRatings() {
    return this.ratings;
  }

  averageRating() {
    this.ratings;
    for (const rating of ratings){
      console.logs(rating);
    }
    this.ratings / this.ratings.length;
    let sum = 0;
    return 0;
  }

}

export {Show };
