const MinHeap = require('../../data_structures/minheap');

class JobScheduler {
  /**
   * 
   * @param {Number} size Max number of scheduled jobs
   */
  constructor(size) {
    this.jobs = {};
    const heapArr = new Array(size).fill(0).map((val, idx) => idx + 1);
    this.heap = new MinHeap(heapArr);
  }


  /**
   * Wrapps jobs with custom code before and after job execution
   * @param {Function} job Job to be executed
   * @param {Number} jobId Id of the job assigned by the scheduler
   */
  _jobWrapper(job, jobId) {
    return () => {
      console.log(`Job with id ${jobId} is starting`);
      job();
      console.log(`Job with id ${jobId} is finished`);
      this.heap.insert(jobId);
    }
  }

  /**
   * Schedules a job
   * @param {Function} job Job to be scheduled
   * @param {Number} timeout Timeout in milliseconds
   */
  schedule(job, timeout) {
    if (typeof job !== 'function') {
      throw new Error('Job must be a function!');
    }

    const jobId = this.heap.getMin();
    // if the heap is empty it will return null
    if (!jobId) {
      throw new Error(`Don't have slots for new jobs! You gotta wait a bit.`);
    }
    console.log(`Scheduled job with id ${jobId}`);
    setTimeout(this._jobWrapper(job, jobId), timeout);
  }

  /**
   * Schedules all jobs. If some jobs aren't scheduled - will call itself repeatedly
   * @param {Array} jobs Array of jobs
   * @param {Function} jobs[].func Function to be executed
   * @param {Number} jobs[].timeout Timeout in milliseconds
   */
  scheduleBatch(jobs) {
    const unscheduled = new Array();
    for (const job of jobs) {
      try {
        js.schedule(job.func, job.timeout)
      } catch (e) {
        console.log(e.message);
        unscheduled.push(job);
      }
    }
    // if there are unscheduled jobs - run function again
    if (unscheduled.length > 0) {
      setTimeout(this.scheduleBatch.bind(this, unscheduled), 1000);
    }
  }
}

function test() {
  const js = new JobScheduler(10);
  const jobs = [];
  
  const simpleJob = () => console.log('job is done.');
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
  const createSimpleJob = (message) => () => console.log(message);
  
  for (let i = 0; i < 12; i++) {
    jobs.push({
      func: createSimpleJob(`Job #${i} is done.`),
      timeout: getRandomArbitrary(1000, 10000)
    });
  }
  js.scheduleBatch(jobs);
}

test();