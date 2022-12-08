## First star

We need to find the character in common between two strings. I didn't reinvent the wheel and
splitted one of the strings in an array, just to apply a `find` which a `String.includes` over the second string.

Additionally, it's needed to code a small function to calculate priority, it's base in ASCII code `item.charCodeAt(0)`, which to be honest was a bit anticlimatic (didn't find a lot of sense for this today).

## Second star

Very similar, now there's the need to find a common item between groups of three lines.
I changed the parsing function to group the strings and then apply a similar logic than in the first star.
