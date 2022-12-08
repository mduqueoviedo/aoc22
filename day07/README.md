## First star

Now for a real challenge! When I saw that there was a file system in place, a tree structure was the first thing that came to my mind. I had of course to read some documentation about this, because there's a lot of code to write and I would not want to do it wrong.

The tree is an object whose one of its fields is an array of children/leaves/whatever, so basically it cascades down. To help yourself go through the tree, there are many strategies. First I created a `currentNode` variable, to know at all times where in the tree (file system) am I. This is very similar to what it looks in real life.
To help myself moving up in the tree, every node has a parent field, which has the ID of the parent node.

Speaking of IDs, once again my solution worked with the test input but not with the real input, and it was because folder names can be repeated in different levels. Probably my "move up" function was a bit flawed because it was looking for the first item with the name I provided (coming from the parent field), which does not work when names are not unique. Once I used unique IDs and populated the parent field with those, everything worked.

But I still think it's not very optimal to search the whole tree everytime you need to move up a level in the tree.

Apart from this, to calculate the size of folders, I implemented a recursive function, and I have to say this year it worked almost at the first try. Advent of Code helps!!

## Second star

With the whole infrastructure of the first star, now it's just calculating the size of all folders in the system (as well as the whole used space) and apply a substraction based on the system capacity in the statement. Maybe not too clear in writing, but easier to see in the code.

Definitely the most difficult challenge so far.
