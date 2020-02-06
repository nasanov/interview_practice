
# [Daily Coding Problem](https://dailycodingproblem.com/)

Daily Coding Problem is a mailing list for coding interview problems. Get exceptionally good at coding interviews by solving one problem every day.
See their [blog](https://dailycodingproblem.com/blog).

---

### Problem 297

This problem was asked by Amazon.

At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. For example, in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

    preferences = {
        0: [0, 1, 3, 6],
        1: [1, 4, 7],
        2: [2, 4, 7, 5],
        3: [3, 2, 5],
        4: [5, 8]
    }

A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.

[Solution](https://github.com/ivankozlovcodes/interview_practice/blob/master/daily_coding_problem/297/solution.py)

---

### Problem 298

A girl is walking along an apple orchard with a bag in each hand. She likes to pick apples from each tree as she goes along, but is meticulous about not putting different kinds of apples in the same bag.

Given an input describing the types of apples she will pass on her path, in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

For example, given the input `[2, 1, 2, 3, 3, 1, 3, 5]`, the longest portion will involve types `1` and `3`, with a length of four.

[Solution](https://github.com/ivankozlovcodes/interview_practice/blob/master/daily_coding_problem/298/solution.py)

---

### Problem 299

A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where A, B, and C are houses, and arrows represent pipes:

        A <--> B <--> C <--> plant

Each pipe has an associated cost, which the utility company would like to minimize. Given an undirected graph of pipe connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from plant to A, plant to B, and B to C, for a total cost of 16.

        pipes = {
            'plant': {'A': 1, 'B': 5, 'C': 20},
            'A': {'C': 15},
            'B': {'C': 10},
            'C': {}
        }

[Solution](https://github.com/ivankozlovcodes/interview_practice/blob/master/daily_coding_problem/299/solution.py)