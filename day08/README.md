## First star

It was about time to get a 2-dimensional array (zone map) challenge! I think I learned how to use these by working Advent of Code challenges.

This year I decided to stop wasting my time and code cleanliness and assuming than parsing the input regularly (split by line and then split each line by characters) what you get is `map[y][x]` instead of `map[x][y]`.

The important part after modelling the problem is making sure we get the right portions to evaluate, this is a "cross" from the point we need. I did this with `slice()` again, and got help from `map()` in the case of vertical lines.

If this works, first star is straightforward because we can use `every()` to make sure rest of the trees are lower.

Careful though! My first approach worked with the test input but not with the real one because of a bug. Grrr!

## Secomd star

With the right modelling, there's still a bit of a challenge here. We need to keep the order of the "cross" segments and move over them to calculate the "scenic score". Look at the `reverse()` for the up and left parts!

I've gone super verbose in today's challenge, creating different functions and everything, but when the input is so big, better to be sure where the problem is happening exactly!
