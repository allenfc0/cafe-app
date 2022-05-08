package com.allenfc.rest.webservices.restfullwebservices.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.allenfc.rest.webservices.restfullwebservices.models.Job;

@Service
public class JobService {
	private static List<Job> jobs = new ArrayList<Job>();
	private static int idCounter = 0;
	
	static {
		jobs.add(new Job(++idCounter, "Dough Master", "become the master of dough", 15));
		jobs.add(new Job(++idCounter, "Evening Manager", "Manage team memebers", 20));
		jobs.add(new Job(++idCounter, "Cashier", "get customers on their way by handling payments", 14.50));
	}
	
	public List<Job> findAll() {
		return jobs;
	}
	
	public Job findJobById(long id) {
		for(Job job : jobs) {
			if(job.getId() == id) {
				return job;
			}
		}
		return null;
	}
	
	public Job deleteJobById(long id) {
		Job job = findJobById(id);
		if(job == null) return null;
		
		if(jobs.remove(job)) return job;
		
		return null;
	}
	
	//handles creating and updating Job entity
		public Job save(Job job) {
			if(job.getId() == -1 || job.getId() == 0) {
				job.setId(++idCounter);
				jobs.add(job);
			} else {
				//this.deleteItemById(job.getId());
				jobs.set((int)job.getId() - 1, job);
			}
			return job;
		}
}














