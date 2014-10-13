(function(){
	var app = angular.module('store',[]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(imageNumber){
			this.current = imageNumber || 0;
		};
	});
  
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	
	app.directive('productTitle', function(){
		return{
			restrict: 'E', 
			templateUrl: "product-title.html"
		};
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
		
		this.addReview = function(product){
		    this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	var gems = [ 
		{
			name: 'MSI GT70 DominatorPro-1039',
			description: "MSI GT Series GT70 DominatorPro-1039 Gaming Laptop Intel Core i7 4930MX (3.00GHz) 32GB Memory 1TB HDD 384GB SSD NVIDIA GeForce GTX 880M 8GB 17.3\" Windows 8.1 64-Bit",
			brand: "MSI",
			series: "GT Series",
			overview:"Unleash the Power Unlock the true potential of your games with the 4th generation Intel® Core™ i7 processor. With a 15% increase in performance when compared to the previous generation and advances in lower power consumption, dominate and play longer than ever before.",
			model: "GT70 DominatorPro-1039",
			price: 1599,
			color: 'Alumium Black',
			operation: 'Windows 8.1 64-Bit',
			cpu: 'Intel Core i7-4930MX 3.0GHz',
			screen: '17.3\"',
			memory: '32GB DDR3',
			harddrive: '1TB HDD + 384GB SSD',
			opticaldrive: 'BD Burner',
			graphics: 'NVIDIA Geforce GTX 880M',
			videomemory: '8GB',
			canPurchase: true,
			communication: 'Killer Gaming Network',
			dimensions: '16.85" x 11.34" x 2.17"',
			weight: '8.6lbs',
			cputype: 'Intel Core i7',
			cpuspeed: '4930MX (3.00GHz)',
			cpusup: '8MB L3 Cache / Max Turbo Frequency 3.9 GHz',
			
			images: [
				"images/msi.png",
				"images/msi-ico.jpg",
				"images/msi-ico2.png",

			],
			reviews: [{
				stars: 5,
				body: "Nice and fast computer, I love it",
				author: "rafael@example.org",
				createdOn: 1397490980837,				
			}, 
			{
				stars: 4,
				body: "Speed demon for a laptop, handle everything I've tossed at it, CAD program, gaming and want more",
				author: "reis@example.org",
				createdOn: 1397490980837,
			}]
		},
		{
			name: 'Aorus X7v2-CF1',
			description: "Aorus X7v2-CF1 Gaming Laptop Intel Core i7 4860HQ (2.40GHz) 16GB Memory 1TB HDD 384GB SSD NVIDIA GeForce GTX 860M SLI 8GB GDDR5 17.3\" Windows 8.1",
			brand: "Aorus",
			series: "---",
			overview: "AORUS X7 delivers an immense gaming experience with maximum mobility on a 17-inch machine. Featuring two NVIDIA® GeForce® GTX 765M graphics in SLI and the 4th gen. Intel® Core™ i7 processor delivers an amazing performance in a slate-like chassis - P7393 in 3DMark11 Text. The exclusive Thermal+ Technology achieves class-leading cooling effects with unparalleled reliability and stability. Its understated design yet dynamic outlook marks this state-of-the-art gaming machine as a technically dominant piece of hardware crafted to perfection and precisely tuned to outperform any machine in its class.",
			model: "X7v2-CF1",
			price: 2299,
			color: 'Black',
			operation: 'Windows 8.1',
			cpu: 'Intel Core i7-4860HQ 2.4GHz',
			screen: '17.3\"',
			memory: '16GB DDR3L',
			canPurchase: true,
			harddrive: '1TB HDD + 384GB SSD',
			opticaldrive: '---',
			graphics: 'NVIDIA Geforce GTX 860M SLI',
			videomemory: '8GB GDDR5',
			communication: 'Gigabit LAN and WLAN',
			dimensions: '16.85" x 12.01" x 0.9"',
			weight: '6.61lbs',
			cputype: 'Intel Core i7',
			cpuspeed: '4860HQ (2.40GHz)',
			cpusup: '---',
			  images: [
				"images/aorus.jpg",
				"images/aorus-ico.jpg",
				"images/aorus-ico2.jpg"
			  ],
			  reviews: [{
				stars: 3,
				body: "I think this gem was just OK, could honestly use more shine, IMO.",
				author: "JimmyDean@example.org",
				createdOn: 1397490980837,
			  }, {
				stars: 4,
				body: "Any gem with 12 faces is for me!",
				author: "gemsRock@example.org",
				createdOn: 1397490980837,
			  }]
		}
  ];
})();
	