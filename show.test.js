import Show from "./show"

test("Add number between one or five is added to Ratings", () => {
  var show=new Show("blabla show");
  show.addRating(4);
  expect(show.getRatings()).toStrictEqual([4]);
});

test("Add number between one or five is added to Ratings", () => {
  var show=new Show("blabla show");
  show.addRating(1);
  show.addRating(3)
  expect(show.getRatings()).toStrictEqual([1, 3]);
});

test("If rating is negative then it should be ignored", () => {
  var show=new Show("blabla show");
  show.addRating(-2);
  expect(show.getRatings()).toStrictEqual([]);
});

test("If rating is over 5 then it should be ignored", () => {
  var show=new Show("blabla show");
  show.addRating(7);
  expect(show.getRatings()).toStrictEqual([]);
});

test("Add number between one and five should calculate average rating", () => {
  var show=new Show("blabla show");
  show.addRating(1);
  show.addRating(3);
  console.log(show.getRatings())
  expect(show.averageRating()).toBe(2);
});
