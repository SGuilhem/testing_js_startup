export default class Show {
  constructor(title, numberOfSeasons = 0) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
  }

  addRating(rating) {
    if (rating >= 0 && rating <= 5) {
      this.ratings.push(rating)
    }
  }

  getRatings() {
    return this.ratings;
  }

  averageRating() {
    if (this.ratings.length == 0) {
      return 0;
    }
    let sum = 0;
    this.ratings.forEach(rating => sum += rating);
    return sum / this.ratings.length;
  }

}
