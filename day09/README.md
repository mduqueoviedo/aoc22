# First star

The challenge invites you to recreate the whole map, but as it's only x,y positions what we are manipulating here, I decided to use single position comparison. The solution can probably be cleaned up / DRYed a lot, but I am a verbose person.

# Second star

I was a bit scared my simplified solution wouldn't be enough for the second part, but I was lucky. The logic still applied, but now I converted the two separated head/tail variables into a rope Array and run the comparisons to apply movements between the subsequent elements.

I got stuck for a while and my whole problem is that I was using `Array(10).fill([0,0])` to create the rope. What's the problem? All the items have the same reference!! After scratching my head for a while I looked for a way to create an array of 10 different references.
