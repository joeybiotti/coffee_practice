// Generated by CoffeeScript 1.12.7
(function() {
  var FiftyCent, all, awardMedals, bad, city, contenders, copy, countdown, drink, drinks, end, fizz_buzz, gold, good, grade, gucci, inner, j, k, len, middle, name, num, numbers, numbers1, outer, output, ref, ref1, rest, silver, sportsTeams, start, swag, title,
    slice = [].slice;

  console.log("CoffeeScript test");

  sportsTeams = function(baseball, team) {
    if (team == null) {
      team = "Red Sox";
    }
    return "Boston's " + baseball + " team is the " + team + ".";
  };


  /* Below is a lil something about Guwop */

  name = "Gucci Mane";

  title = "Trap God";

  city = "ATL";

  gucci = {
    name: name,
    title: title,
    city: city
  };

  output = gucci.name + " is the " + gucci.title + " from " + gucci.city;


  /* local scoped vars */

  outer = 1;

  changeNumbers(function() {
    var inner;
    inner = -1;
    return outer = 10;
  });

  inner = changeNumbers();


  /* if else unless */

  if (fresh) {
    swag = inEffect;
  }

  if (stylin && profilin) {
    makeItRain();
    beTrill();
  } else {
    getRight();
  }

  FiftyCent = broke ? getRich : die;


  /* splats! */

  gold = silver = rest = "unknown";

  awardMedals = function() {
    var first, others, second;
    first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    gold = first;
    silver = second;
    return rest = others;
  };

  contenders = ["Mike Tyson", "Lenox Lewis", "Bo Jackson", "Larry Bird", "Michael Jordan", "Tom Brady"];

  awardMedals.apply(null, contenders);

  alert("Gold " + gold + "\nSilver " + silver + "\nEveryone else " + (rest.join(",")));

  good = ['books', 'movies', 'friends'];

  bad = ['bills', 'flat tires', 'chores'];

  all = slice.call(good).concat(slice.call(bad), ['beer']);


  /* loops */

  drink = function(drinks) {
    return drinks + " drank";
  };

  ref = ['soda', 'coffee', 'beer', 'wine'];
  for (j = 0, len = ref.length; j < len; j++) {
    drinks = ref[j];
    drink(drinks);
  }

  countdown = (function() {
    var k, results;
    results = [];
    for (num = k = 10; k >= 1; num = --k) {
      results.push(num);
    }
    return results;
  })();

  if (this.drinkingBeer) {
    while (person > thirsty) {
      drink();
    }
    while (!(person > thirsty)) {
      stop();
    }
  }


  /* slicin' and splicin' */

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  start = numbers.slice(0, 3);

  middle = numbers.slice(3, -2);

  end = numbers.slice(-2);

  copy = numbers.slice(0);

  numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  [].splice.apply(numbers1, [3, 4].concat(ref1 = [-3, -4, -5, -6])), ref1;


  /* expressions */

  grade = function(student) {
    if (student.didWell) {
      return "A+";
    } else if (student.didOk) {
      if (student.tried) {
        return "B";
      } else {
        return "C";
      }
    } else {
      return "D";
    }
  };


  /* FizzBuzz because why not? */

  fizz_buzz = function(i) {
    if (i % 15 === 0) {
      return "FizzBuzz";
    } else if (i % 5 === 0) {
      return "Buzz";
    } else if (i % 3 === 0) {
      return "Fizz";
    } else {
      return i;
    }
  };

  for (num = k = 1; k <= 100; num = ++k) {
    console.log(fizz_buzz(num));
  }

}).call(this);
