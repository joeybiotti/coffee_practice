// Generated by CoffeeScript 1.12.7
(function() {
  var Account, Animal, FiftyCent, Horse, Snake, all, awardMedals, bad, city, contenders, copy, countdown, countdown1, drink, drinks, end, error, fizz_buzz, gold, good, grade, gucci, inner, j, k, len, middle, name, num, numbers, numbers1, oldest, one, outer, output, perfectSquares, ref, ref1, rest, sam, silver, six, sleep, sportsTeams, start, swag, three, title, tom, two, ufo, vol,
    slice = [].slice,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

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

  oldest = 50 > 45 ? "Jim" : "Bob";

  six = (one = 1) + (two = 2) + (three = 3);

  alert((function() {
    try {
      return DoesNotWork / void 0;
    } catch (error1) {
      error = error1;
      return "And the error is... " + error;
    }
  })());

  one = 1;

  if (one == null) {
    one = 12;
  }

  ufo = typeof flyingSaucer !== "undefined" && flyingSaucer !== null ? flyingSaucer : "plane";

  $('body').click(function(e) {
    return $('.box').fadeIn('fast').addClass('show');
  }).css('background', 'white');


  /* operators */

  -7 % 5 === 2;

  modulo(-7, 5) === 3;

  if (ignition === true) {
    launch();
  }

  if (band !== SpinalTap) {
    vol = 10;
  }

  print(inspect("practice with " + name));


  /* FAT arrows */

  Account = function(customer, cart) {
    this.customer = customer;
    return this.cart = cart;
  };

  $('.shopping_cart').on('click', (function(_this) {
    return function(event) {
      return _this.customer.purchase(_this.cart);
    };
  })(this));

  perfectSquares = function() {
    num = 0;
    while (true) {
      num += 1;
      yeild(num * num);
    }
  };

  window.ps || (window.ps = perfectSquares());


  /* async functions */

  sleep = function(ms) {
    return new Promise(function(resolve) {
      return window.setTimeout(resolve, ms);
    });
  };

  countdown1 = function(seconds) {
    var i, k, ref2;
    for (i = k = ref2 = seconds; ref2 <= 1 ? k <= 1 : k >= 1; i = ref2 <= 1 ? ++k : --k) {
      say(i);
      await(sleep(1000));
    }
    return say('Takeoff!');
  };

  countdown1(3);


  /* classes */

  Animal = (function() {
    function Animal(name1) {
      this.name = name1;
    }

    Animal.prototype.move = function(meters) {
      return alert(this.name + ("moved " + meters + "m."));
    };

    return Animal;

  })();

  Snake = (function(superClass) {
    extend(Snake, superClass);

    function Snake() {
      return Snake.__super__.constructor.apply(this, arguments);
    }

    Snake.prototype.move = function() {
      alert("Slithering");
      return Snake.__super__.move.call(this, 5);
    };

    return Snake;

  })(Animal);

  Horse = (function(superClass) {
    extend(Horse, superClass);

    function Horse() {
      return Horse.__super__.constructor.apply(this, arguments);
    }

    Horse.prototype.move = function() {
      alert("Galloping");
      return Horse.__super__.move.call(this, 50);
    };

    return Horse;

  })(Animal);

  sam = new Snake("Steve the Snake");

  tom = new Horse("Harry the Horse");

  sam.move();

  tom.move();


  /* switch stmts */

  switch (day) {
    case "Monday":
      go(work);
      break;
    case "Tuesday":
      go(school);
      break;
    case "Friday":
    case "Saturday":
      if (day === weekend) {
        go(drink);
        go(relax);
      }
      break;
    case "Sunday":
      go(sleepIn);
      break;
    default:
      wakeUpEarly;
  }


  /* Try/Catch/Finally...? */

  try {
    allHellBreaksLoose();
    catsAndDogsLivingTogether();
  } catch (error1) {
    error = error1;
    print(error);
  } finally {
    cleanUp();
  }


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
