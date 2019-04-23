## Question
Implement a job scheduler which takes in a function *_f_* and an integer _*n*_, and calls _f_ after _n_ milliseconds.

## Clarifications

  * Scheduler will be fixed size(for sake of sanity). Let it be _k_
  * Scheduler will assign a unique _id_ to every job such as `1 <= id <= k`
  * After jobs is done _id_ will return to pull of possibles ids for the next jobs
  * If scheduled job can't be added at the moment -> throw an error

## Approach
  I use _min heap_ structure to store all possible ids. This way I also can guarantee that job will get the smallest id possible at the moment.

  _schedule_ method will schedule one job given to it. It will throw an error when there is no id available for the job.

  _scheduleBatch_ method will schedule all jobs had passed. If some jobs cannot be scheduled at the moment - method will schedule another launch.

## Complexity
  ### Time
  `log(k)` time to get an id for the job(reorganizing heap).
  ### Space
  `log(k)` space to store jobs ids.
  Where _k_ is a size of job schedule(aka max number of scheduled jobs)