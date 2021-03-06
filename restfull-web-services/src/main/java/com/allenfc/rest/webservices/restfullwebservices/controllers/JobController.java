package com.allenfc.rest.webservices.restfullwebservices.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.allenfc.rest.webservices.restfullwebservices.models.Job;
import com.allenfc.rest.webservices.restfullwebservices.services.JobService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	public JobController(JobService jobService) {
		this.jobService = jobService;
	}

	@GetMapping(path="/jobs-list")
	public List<Job> getAllItems() {
		
		return jobService.findAll();
	}
	
	@GetMapping(path="/jobs/{id}")
	public Job getJobById(@PathVariable long id) {
		return jobService.findJobById(id);
	}
	
	@DeleteMapping(path="/jobs/delete/{id}")
	public ResponseEntity<Void> deleteJob(@PathVariable long id) {
		Job job = jobService.deleteJobById(id);
		//return job;
		if(job != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping(path="/job/update/{id}")
	public ResponseEntity<Job> updateJob(
			@PathVariable long id, 
			@RequestBody Job job) {
		Job updatedJob = jobService.save(job);
		
		return new ResponseEntity<Job>(updatedJob, HttpStatus.OK);
		
	}
	
	@PostMapping(path="/job/create")
	public ResponseEntity<Void> createdItem(
			@RequestBody Job job) {
		Job createdJob = jobService.save(job);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdJob.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	@GetMapping(path="*")
	public String getError() {
		return "Error Path";
	}
}













