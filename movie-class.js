class Movie {
    constructor(title, studio, rating = 'PG') {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

    getPG(...movies) { return movies.filter((movie)=> movie.rating === 'PG') };
    
  }
  
let jamesBond1 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
let jamesBond2 = new Movie('No Time To Die', 'Eon Productions',);
let jamesBond3 = new Movie('Dr. No', 'Eon Productions', 'PG13');

console.log(new Movie().getPG(jamesBond1, jamesBond2, jamesBond3));