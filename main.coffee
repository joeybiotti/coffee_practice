console.log "CoffeeScript test"

sportsTeams = (baseball, team = "Red Sox") ->
    "Boston's #{baseball} team is the #{team}."

### Below is a lil something about Guwop ###

name = "Gucci Mane"
title = "Trap God"
city = "ATL"
gucci = {name, title, city}
output = "#{gucci.name} is the #{gucci.title} from #{gucci.city}"

### local scoped vars ###

outer = 1
changeNumbers ->
    inner = -1
    outer = 10
inner = changeNumbers()

### if else unless ###

swag = inEffect if fresh

if stylin and profilin
    makeItRain()
    beTrill()
else
    getRight()

FiftyCent = if broke then getRich else die

### splats! ###

gold = silver = rest = "unknown"

awardMedals = (first, second, others...) ->
    gold = first
    silver = second
    rest = others

contenders = [
    "Mike Tyson"
    "Lenox Lewis"
    "Bo Jackson"
    "Larry Bird"
    "Michael Jordan"
    "Tom Brady"
]

awardMedals contenders...

alert """
Gold #{gold}
Silver #{silver}
Everyone else #{rest.join ","}
"""

good = ['books', 'movies', 'friends']
bad = ['bills', 'flat tires', 'chores']

all = [good..., bad..., 'beer']

### loops ###
drink = (drinks) -> "#{drinks} drank"
drink drinks for drinks in ['soda', 'coffee', 'beer', 'wine']

countdown = (num for num in [10..1])

if this.drinkingBeer
    drink() while person > thirsty
    stop() until person > thirsty

### slicin' and splicin' ###

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

start = numbers[0..2]

middle = numbers[3...-2]

end = numbers[-2..]

copy = numbers[..]

numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers1[3..6] = [-3, -4, -5, -6]

### expressions ###

grade = (student) ->
    if student.didWell
        "A+"
    else if student.didOk
        if student.tried then "B" else "C"
    else
        "D"
    
oldest = if 50 > 45 then "Jim" else "Bob"

six = (one = 1) + (two = 2) + (three = 3)

alert(
    try 
        DoesNotWork / undefined 
    catch error
        "And the error is... #{error}"
)

one = 1 
one ?= 12

ufo = flyingSaucer ? "plane"

$ 'body'
.click (e) ->
    $ '.box'
    .fadeIn 'fast'
    .addClass 'show'
.css 'background', 'white'

### operators ###

-7 % 5 == 2 
-7 %% 5 == 3

launch() if ignition is on 

vol = 10 if band isnt SpinalTap 

print inspect "practice with #{name}"

### FAT arrows ###

Account = (customer, cart) ->
    @customer = customer 
    @cart = cart

$('.shopping_cart').on 'click', (event) =>
    @customer.purchase @cart

perfectSquares = ->
    num = 0
    loop
        num += 1
        yeild num * num 
    return 

window.ps or= perfectSquares()

### async functions ###

sleep = (ms) ->
    new Promise (resolve) ->
        window.setTimeout resolve, ms

countdown1 = (seconds) ->
    for i in [seconds ..1]
        say i 
        await sleep 1000
    say 'Takeoff!'

countdown1 3

### classes ###

class Animal 
    constructor: (@name) ->

    move: (meters) ->
        alert @name + "moved #{meters}m."

class Snake extends Animal 
    move: ->   
        alert "Slithering"
        super 5 

class Horse extends Animal 
    move: -> 
        alert "Galloping"
        super 50

sam = new Snake "Steve the Snake"
tom = new Horse "Harry the Horse"

sam.move()
tom.move()

### switch stmts ###
switch day 
    when "Monday" then go work 
    when "Tuesday" then go school
    when "Friday", "Saturday"
        if day is weekend
            go drink
            go relax 
    when "Sunday" then go sleepIn
    else wakeUpEarly

### Try/Catch/Finally...?### 
try 
    allHellBreaksLoose()
    catsAndDogsLivingTogether()
catch error
    print error
finally 
    cleanUp()


### FizzBuzz because why not? ###
fizz_buzz = (i) -> 
    if i % 15 == 0
        return "FizzBuzz"
    else if i % 5 == 0
        return "Buzz"
    else if i % 3 == 0
        return "Fizz"
    else 
        return i

console.log fizz_buzz num for num in [1..100]