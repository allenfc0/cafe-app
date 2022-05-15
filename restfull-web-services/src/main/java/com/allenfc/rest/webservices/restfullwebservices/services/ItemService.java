package com.allenfc.rest.webservices.restfullwebservices.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.allenfc.rest.webservices.restfullwebservices.models.Item;

@Service
public class ItemService {
	private static List<Item> items = new ArrayList<Item>();
	private static long idCounter = 0;
	
	static {
		items.add(new Item(++idCounter, "donut", "round with hole", 2.50));
		items.add(new Item(++idCounter, "coffee", "hot water", 3.00));
		items.add(new Item(++idCounter, "cake", "strawberry flavor", 12.50));
	}
	
	public List<Item> findAll() {
		return items;
	}
	
	public Item findItemById(long id) {
		for(Item item : items) {
			if(item.getId() == id) {
				return item;
			}
		}
		return null;
	}
	
	public Item deleteItemById(long id) {
		Item item = findItemById(id);
		if(item == null) return null;
		
		if(items.remove(item)) return item;
		
		return null;
	}
	
	//handles creating and updating Item entity
	public Item save(Item item) {
		if(item.getId() == -1 || item.getId() == 0) {
			item.setId(++idCounter);
			items.add(item);
		} else {
			//this.deleteItemById(item.getId());
			items.set((int)item.getId() - 1, item);
		}
		return item;
	}
	
}
