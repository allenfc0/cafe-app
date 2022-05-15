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

import com.allenfc.rest.webservices.restfullwebservices.models.Item;
import com.allenfc.rest.webservices.restfullwebservices.models.TestingBean;
import com.allenfc.rest.webservices.restfullwebservices.services.ItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@GetMapping(path="/")
	public String home() {
		return "hello";
	}
	
	@GetMapping(path="/testing")
	public TestingBean helloWorld() {
		return new TestingBean("hello testing");
	}
	
	@GetMapping(path="/items-list")
	public List<Item> getAllItems() {
		
		return itemService.findAll();
	}
	
	@GetMapping(path="items/{id}")
	public Item getItemById(@PathVariable long id) {
		return itemService.findItemById(id);
		
	}
	
	@DeleteMapping(path="/item/delete/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable long id) {
		Item item = itemService.deleteItemById(id);
		//return job;
		if(item != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping(path="/item/update/{id}")
	public ResponseEntity<Item> updateItem(
			@PathVariable long id, 
			@RequestBody Item item) {
		Item updatedItem = itemService.save(item);
		
		return new ResponseEntity<Item>(updatedItem, HttpStatus.OK);
		
	}
	
	@PostMapping(path="/item/create")
	public ResponseEntity<Void> createdItem(
			@RequestBody Item item) {
		Item createdItem = itemService.save(item);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdItem.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
}
