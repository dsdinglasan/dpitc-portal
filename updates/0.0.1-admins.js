/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 
			'name.first': 'Roinand', 
			'name.last': 'Aguila', 
			'email': 'aroinand@gmail.com', 
			'password': 'admin', 
			'isAdmin': true,
			'__ref': 'admin'
		}
	],


	/*ELearning Fixtures*/

  /*
    LUser
  */

  LUser: [
    {
      'name.first': 'Juan', 
      'name.last': 'Dela Cruz', 
      'email': 'jdelacruz@gmail.com', 
      'password': 'password', 
      '__ref': 'Juan'
    },
    {
      'name.first': 'John', 
      'name.last': 'Smith', 
      'email': 'jsmith@gmail.com', 
      'password': 'password', 
      '__ref': 'John'
    },
    {
      'name.first': 'Jane', 
      'name.last': 'Doe', 
      'email': 'jdoe@gmail.com', 
      'password': 'password', 
      '__ref': 'Jane'
    },
    {
      'name.first': 'Albert', 
      'name.last': 'Kim', 
      'email': 'akim@gmail.com', 
      'password': 'password', 
      '__ref': 'Albert'
    },
    {
      'name.first': 'Bryan', 
      'name.last': 'Kim', 
      'email': 'bkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Bryan'
    },
    {
      'name.first': 'Carl', 
      'name.last': 'Kim', 
      'email': 'ckim@gmail.com', 
      'password': 'password', 
      '__ref': 'Lee'
    },
    {
      'name.first': 'Daniel', 
      'name.last': 'Kim', 
      'email': 'dkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Daniel'
    },
    {
      'name.first': 'Ellen', 
      'name.last': 'Kim', 
      'email': 'ekim@gmail.com', 
      'password': 'password', 
      '__ref': 'Ellen'
    },
    {
      'name.first': 'Ferdinand', 
      'name.last': 'Kim', 
      'email': 'fkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Ferdinand'
    },
    {
      'name.first': 'Gerald', 
      'name.last': 'Kim', 
      'email': 'gkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Gerald'
    },
    {
      'name.first': 'Harold', 
      'name.last': 'Kim', 
      'email': 'hkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Harold'
    },
    {
      'name.first': 'Irish', 
      'name.last': 'Kim', 
      'email': 'ikim@gmail.com', 
      'password': 'password', 
      '__ref': 'Irish'
    },
    {
      'name.first': 'Jeff', 
      'name.last': 'Kim', 
      'email': 'jkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Jeff'
    },
    {
      'name.first': 'Karl', 
      'name.last': 'Kim', 
      'email': 'kkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Karl'
    },
    {
      'name.first': 'Logan', 
      'name.last': 'Kim', 
      'email': 'lkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Logan'
    },
    {
      'name.first': 'Manuel', 
      'name.last': 'Kim', 
      'email': 'mkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Manuel'
    },
    {
      'name.first': 'Natalie', 
      'name.last': 'Kim', 
      'email': 'nkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Natalie'
    },
    {
      'name.first': 'Oliver', 
      'name.last': 'Kim', 
      'email': 'okim@gmail.com', 
      'password': 'password', 
      '__ref': 'Oliver'
    },
    {
      'name.first': 'Patricia', 
      'name.last': 'Kim', 
      'email': 'pkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Patricia'
    },
    {
      'name.first': 'Queen', 
      'name.last': 'Kim', 
      'email': 'qkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Queen'
    },
    {
      'name.first': 'Rona', 
      'name.last': 'Kim', 
      'email': 'rkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Rona'
    },
    {
      'name.first': 'Sally', 
      'name.last': 'Kim', 
      'email': 'skim@gmail.com', 
      'password': 'password', 
      '__ref': 'Sally'
    },
    {
      'name.first': 'Tim', 
      'name.last': 'Kim', 
      'email': 'tkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Tim'
    },
    {
      'name.first': 'Uvin', 
      'name.last': 'Kim', 
      'email': 'ukim@gmail.com', 
      'password': 'password', 
      '__ref': 'Uvin'
    },
    {
      'name.first': 'Vince', 
      'name.last': 'Kim', 
      'email': 'vkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Vince'
    },
    {
      'name.first': 'Wilson', 
      'name.last': 'Kim', 
      'email': 'wkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Wilson'
    },
    {
      'name.first': 'Xyrus', 
      'name.last': 'Kim', 
      'email': 'xkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Xyrus'
    },
    {
      'name.first': 'Yvette', 
      'name.last': 'Kim', 
      'email': 'ykim@gmail.com', 
      'password': 'password', 
      '__ref': 'Yvette'
    },
    {
      'name.first': 'Zend', 
      'name.last': 'Kim', 
      'email': 'zkim@gmail.com', 
      'password': 'password', 
      '__ref': 'Zend'
    },
    {
      'name.first': 'Henry', 
      'name.last': 'Lee', 
      'email': 'hlee@gmail.com', 
      'password': 'password', 
      '__ref': 'Henry'
    },
    {
      'name.first': 'Angelica', 
      'name.last': 'Lee', 
      'email': 'alee@gmail.com', 
      'password': 'password', 
      '__ref': 'Angelica'
    },
    {
      'name.first': 'Kris', 
      'name.last': 'Lee', 
      'email': 'klee@gmail.com', 
      'password': 'password', 
      '__ref': 'Kris'
    },
    {
      'name.first': 'Luhan', 
      'name.last': 'Lee', 
      'email': 'llee@gmail.com', 
      'password': 'password', 
      '__ref': 'Luhan'
    },
    {
      'name.first': 'Amber', 
      'name.last': 'Lee', 
      'email': 'alee@gmail.com', 
      'password': 'password', 
      '__ref': 'Amber'
    },
    {
      'name.first': 'Victoria', 
      'name.last': 'Lee', 
      'email': 'vlee@gmail.com', 
      'password': 'password', 
      '__ref': 'Victoria'
    },
    {
      'name.first': 'Krystal', 
      'name.last': 'Lee', 
      'email': 'klee@gmail.com', 
      'password': 'password', 
      '__ref': 'Krystal'
    },
    {
      'name.first': 'Gary', 
      'name.last': 'Lee', 
      'email': 'glee@gmail.com', 
      'password': 'password', 
      '__ref': 'Gary'
    },
    {
      'name.first': 'Joon', 
      'name.last': 'Lee', 
      'email': 'jlee@gmail.com', 
      'password': 'password', 
      '__ref': 'Joon'
    },
    {
      'name.first': 'Cena', 
      'name.last': 'Lee', 
      'email': 'clee@gmail.com', 
      'password': 'password', 
      '__ref': 'Cena'
    },
    {
      'name.first': 'Justin', 
      'name.last': 'Lee', 
      'email': 'jlee@gmail.com', 
      'password': 'password', 
      '__ref': 'Justin'
    }
  ],


  /*
    Categories:
      LIndustry
      - LSector
        - ISP
  */

  LIndustry: [
    {
      'name': 'Agriculture',
      '__ref': 'agri-industry'
    },
    {
      'name': 'Aquatic Resources',
      '__ref': 'aqua-industry'
    },
    {
      'name': 'Natural Resources',
      '__ref': 'natural-industry'
    }
  ],

  LSector: [
    {
      'name': 'Crops',
      'industry': 'agri-industry',
      '__ref': 'crops-sector'
    },
    {
      'name': 'Livestock',
      'industry': 'agri-industry',
      '__ref': 'livestock-sector'
    },
    {
      'name': 'Inland Aquatic',
      'industry': 'aqua-industry',
      '__ref': 'inlandaq-sector'
    },
    {
      'name': 'Marine Resources',
      'industry': 'aqua-industry',
      '__ref': 'marineres-sector'
    },
    {
      'name': 'Ocean Environment Services (OES)',
      'industry': 'aqua-industry',
      '__ref': 'oes-sector'
    },
    {
      'name': 'Forestry',
      'industry': 'natural-industry',
      '__ref': 'forestry-sector'
    },
    {
      'name': 'Inland Environment Services (IES)',
      'industry': 'natural-industry',
      '__ref': 'ies-sector'
    }
    
  ],

  ISP: [
    {
      'name': 'Corn',
      'sector': 'crops-sector',
      '__ref': 'corn-isp'
    },
    {
      'name': 'Abaca',
      'sector': 'crops-sector',
      '__ref': 'abaca-isp'
    },
    {
      'name': 'Banana',
      'sector': 'crops-sector',
      '__ref': 'banana-isp'
    },
    {
      'name': 'Coconut',
      'sector': 'crops-sector',
      '__ref': 'coconut-isp'
    },
    {
      'name': 'Coffee',
      'sector': 'crops-sector',
      '__ref': 'coffee-isp'
    },
    {
      'name': 'Legume',
      'sector': 'crops-sector',
      '__ref': 'legume-isp'
    },
    {
      'name': 'Mango',
      'sector': 'crops-sector',
      '__ref': 'mango-isp'
    },
    {
      'name': 'Rice',
      'sector': 'crops-sector',
      '__ref': 'rice-isp'
    },
    {
      'name': 'Rootcrop',
      'sector': 'crops-sector',
      '__ref': 'rootcrop-isp'
    },
    {
      'name': 'Sugarcane',
      'sector': 'crops-sector',
      '__ref': 'sugarcane-isp'
    },
    {
      'name': 'Tropical Fruit',
      'sector': 'crops-sector',
      '__ref': 'tropicalfruit-isp'
    },
    {
      'name': 'Vegetable',
      'sector': 'crops-sector',
      '__ref': 'vegetable-isp'
    },
    {
      'name': 'Feed Resources (Livestock)',
      'sector': 'livestock-sector',
      '__ref': 'feedres-l-isp'
    },
    {
      'name': 'Dairy Goat',
      'sector': 'livestock-sector',
      '__ref': 'dairygoat-isp'
    },
    {
      'name': 'Slaughter Goat',
      'sector': 'livestock-sector',
      '__ref': 'slaughtergoat-isp'
    },
    {
      'name': 'Dairy Buffalo',
      'sector': 'livestock-sector',
      '__ref': 'dairybuffalo-isp'
    },
    {
      'name': 'Swine',
      'sector': 'livestock-sector',
      '__ref': 'swine-isp'
    },
    {
      'name': 'Duck',
      'sector': 'livestock-sector',
      '__ref': 'duck-isp'
    },
    {
      'name': 'Native Chicken',
      'sector': 'livestock-sector',
      '__ref': 'nativechicken-isp'
    },
    {
      'name': 'Feed Resources (Inland Aquatic)',
      'sector': 'inlandaq-sector',
      '__ref': 'feedres-ia-isp'
    },
    {
      'name': 'Milkfish',
      'sector': 'inlandaq-sector',
      '__ref': 'milkfish-isp'
    },
    {
      'name': 'Mangrove Crab (Mudcrab)',
      'sector': 'inlandaq-sector',
      '__ref': 'mudcrab-isp'
    },
    {
      'name': 'Tilapia',
      'sector': 'inlandaq-sector',
      '__ref': 'tilapia-isp'
    },
    {
      'name': 'Shrimp',
      'sector': 'inlandaq-sector',
      '__ref': 'shrimp-isp'
    },
    {
      'name': 'Mussel',
      'sector': 'inlandaq-sector',
      '__ref': 'mussel-isp'
    },
    {
      'name': 'Blue Swimming Crab',
      'sector': 'marineres-sector',
      '__ref': 'bscrab-isp'
    },
    {
      'name': 'Abalone',
      'sector': 'marineres-sector',
      '__ref': 'abalone-isp'
    },
    {
      'name': 'Oyster',
      'sector': 'marineres-sector',
      '__ref': 'oyster-isp'
    },
    {
      'name': 'Sardines',
      'sector': 'marineres-sector',
      '__ref': 'sardines-isp'
    },
    {
      'name': 'Sea Cucumber',
      'sector': 'marineres-sector',
      '__ref': 'seacucumber-isp'
    },
    {
      'name': 'Seaweeds',
      'sector': 'marineres-sector',
      '__ref': 'seaweeds-isp'
    },
    {
      'name': 'Tuna',
      'sector': 'marineres-sector',
      '__ref': 'tuna-isp'
    },
    {
      'name': 'Bathymetry',
      'sector': 'oes-sector',
      '__ref': 'bathymetry-isp'
    },
    {
      'name': 'Corals',
      'sector': 'oes-sector',
      '__ref': 'corals-isp'
    },
    {
      'name': 'Fishing Maps',
      'sector': 'oes-sector',
      '__ref': 'fishingmaps-isp'
    },
    {
      'name': 'Harmful Algal Blooms',
      'sector': 'oes-sector',
      '__ref': 'algalblooms-isp'
    },
    {
      'name': 'Cacao',
      'sector': 'forestry-sector',
      '__ref': 'cacao-isp'
    },
    {
      'name': 'Bamboo',
      'sector': 'forestry-sector',
      '__ref': 'bamboo-isp'
    },
    {
      'name': 'Sago',
      'sector': 'forestry-sector',
      '__ref': 'sago-isp'
    },
    {
      'name': 'Rubber',
      'sector': 'forestry-sector',
      '__ref': 'rubber-isp'
    },
    {
      'name': 'Industrial Tree Plant',
      'sector': 'forestry-sector',
      '__ref': 'itreeplant-isp'
    },
    {
      'name': 'Biodiversity',
      'sector': 'forestry-sector',
      '__ref': 'biodiversity-isp'
    },
    {
      'name': 'Climate Change',
      'sector': 'forestry-sector',
      '__ref': 'climatechange-isp'
    },
    {
      'name': 'Watershed',
      'sector': 'forestry-sector',
      '__ref': 'watershed-isp'
    },
    {
      'name': 'Mangrove',
      'sector': 'forestry-sector',
      '__ref': 'mangrove-isp'
    },
  ],

  /*
    Learning Objects:
      - Course
        - Chapter
          - LearningObject
            - LOVideo
            - ISP

  */

  LOVideo: [
    {
      'title': 'Stages Corn',
      'url': 'https://www.youtube.com/watch?v=VlSmx5Tck-s&t=3s&index=1&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'VlSmx5Tck-s',
      '__ref': 'stagescorn-yt'
    },
    {
      'title': 'Soil Fertilization',
      'url': 'https://www.youtube.com/watch?v=BPiQTm2uqo0&index=2&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'BPiQTm2uqo0',
      '__ref': 'soilfertilization-yt'
    },
    {
      'title': 'Land Preparation',
      'url': 'https://www.youtube.com/watch?v=s8xBIWP83cg&index=3&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 's8xBIWP83cg',
      '__ref': 'landpreparation-yt'
    },
    {
      'title': 'Grain Quality',
      'url': 'https://www.youtube.com/watch?v=wqQzFz0WdtE&index=4&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'wqQzFz0WdtE',
      '__ref': 'grainquality-yt'
    },
    {
      'title': 'Feeding Program',
      'url': 'https://www.youtube.com/watch?v=LlR9jsIg_Ik&index=5&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'LlR9jsIg_Ik',
      '__ref': 'feedingprogram-yt'
    },
    {
      'title': 'Biotech BtCorn ',
      'url': 'https://www.youtube.com/watch?v=Yt2MkxFeono&t=120s&index=14&list=PLbdcQpXzx9ZVRXKNzyGJW9Nsr_wj8TMPJ',
      'videoId': 'Yt2MkxFeono',
      '__ref': 'biotechbtcorn-yt'
    },

  ],

  LearningObject: [
    {
      'title': 'Stages Corn',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque. ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      
      'video': 'stagescorn-yt',
      '__ref': 'stagescorn-lo',

    },
    { 
      'title': 'Soil Fertilization',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'video': 'soilfertilization-yt',
      '__ref': 'soilfertilization-lo',
    },
    { 
      'title': 'Land Preparation',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
       
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica'],
      'happy': ['Henry', 'Irish', 'Joon', 'Jeff', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'sad': ['Ferdinand', 'Gerald', 'Harold'],
      
      'video': 'landpreparation-yt',
      '__ref': 'landpreparation-lo',
    },
    { 
      'title': 'Grain Quality',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica'],
      'happy': ['Juan', 'John'],
      'sad': ['Ferdinand', 'Gerald', 'Harold'],
      
      'video': 'grainquality-yt',
      '__ref': 'grainquality-lo',
    },
    { 
      'title': 'Feeding Program',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,
      'updatedAt': Date.now,
      
      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'video': 'feedingprogram-yt',
      '__ref': 'feedingprogram-lo',
    },
    { 
      'title': 'Biotech BtCorn',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'isp': 'corn-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'tags': ['corn', 'agriculture'],
      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now,
      'video': 'biotechbtcorn-yt',
      '__ref': 'biotechbtcorn-lo',
    },
    { 
      'title': 'Planting Abaca',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Abaca description',
        'extended': 'Extended description',
      },
      'isp': 'abaca-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['abaca', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingabaca-lo'
    },
    { 
      'title': 'Planting Banana',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Banana description',
        'extended': 'Extended description',
      },
      'isp': 'banana-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['banana', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Jane', 'Amber', 'Angelica', 'Albert', 'Bryan', 'Cena'],
      'sad': ['Ferdinand', 'Gerald', 'Harold', 'Henry', 'Irish', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingbanana-lo'
    },
    { 
      'title': 'Planting Coconut',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Coconut description',
        'extended': 'Extended description',
      },
      'isp': 'coconut-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['coconut', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Zend'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingcoconut-lo'
    },
    { 
      'title': 'Planting Coffee',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Coffee description',
        'extended': 'Extended description',
      },
      'isp': 'coffee-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['coffee', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingcoffee-lo'
    },
    { 
      'title': 'Planting Mungbean',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Mungbean description',
        'extended': 'Extended description',
      },
      'isp': 'legume-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Mungbean',
      'tags': ['mungbean', 'legume', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'mungbean-lo',
    },
    { 
      'title': 'Planting Peanut',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Peanut description',
        'extended': 'Extended description',
      },
      'isp': 'legume-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Peanut',
      'tags': ['peanut', 'legume', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'peanut-lo',
    },
    { 
      'title': 'Planting Mango',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Mango description',
        'extended': 'Extended description',
      },
      'isp': 'mango-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['mango', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingmango-lo'
    },
    { 
      'title': 'Planting Rice',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Rice description',
        'extended': 'Extended description',
      },
      'isp': 'rice-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['rice', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      
      'updatedAt': Date.now,
      '__ref': 'plantingrice-lo'
    },
    { 
      'title': 'Planting Sweet Potato',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Sweet Potato description',
        'extended': 'Extended description',
      },
      'isp': 'rootcrop-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Sweet Potato',
      'tags': ['sweet potato','rootcrop', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      'updatedAt': Date.now,
      '__ref': 'sweetpotato-lo',
    },
    { 
      'title': 'Planting White Potato',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting White Potato description',
        'extended': 'Extended description',
      },
      'isp': 'rootcrop-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'White Potato',
      'tags': [ 'white potato', 'rootcrop', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'whitepotato-lo',
    },
    { 
      'title': 'Planting Sugarcane',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Sugarcane description',
        'extended': 'Extended description',
      },
      'isp': 'sugarcane-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['sugarcane', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'sugarcane-lo'
    },
    { 
      'title': 'Planting Pineapple',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Pineapple description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Pineapple',
      'tags': ['pineapple', 'tropical fruit', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Xyrus'],
      
      'updatedAt': Date.now,
      '__ref': 'pineapple-lo',
    },
    { 
      'title': 'Planting Papaya',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Papaya description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Papaya',
      'tags': ['papaya', 'tropical fruit', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Vince', 'Victoria', 'Wilson', 'Xyrus', 'Yvette', 'Zend', 'Justin', 'Krystal', 'Kris', 'Karl', 'Luhan', 'Logan'],
      'happy': ['Logan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'papaya-lo',
    },
    { 
      'title': 'Planting Citrus',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Citrus description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Citrus',
      'tags': ['citrus', 'tropical fruit', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now,
      '__ref': 'citrus-lo',
    },
    { 
      'title': 'Planting Jackfruit',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Jackfruit description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Jackfruit',
      'tags': ['jackfruit', 'tropical fru', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now,
      '__ref': 'jackfruit-lo',
    },
    { 
      'title': 'Planting Durian',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Durian description',
        'extended': 'Extended description',
      },
      'isp': 'tropicalfruit-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': 'Durian',
      'tags': ['durian', 'tropical fruit', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      
      'updatedAt': Date.now,
      '__ref': 'durian-lo',
    },
    { 
      'title': 'Planting Vegetable',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Planting Vegetable description',
        'extended': 'Extended description',
      },
      'isp': 'vegetable-isp',
      'sector': 'crops-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['vegetable', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Feed Resources',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Feed Resources description',
        'extended': 'Extended description',
      },
      'isp': 'feedres-l-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['feed resources', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Dairy Goat',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Dairy Goat description',
        'extended': 'Extended description',
      },
      'isp': 'dairygoat-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['dairy goat', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      'happy': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Slaughter Goat',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Slaughter Goat description',
        'extended': 'Extended description',
      },
      'isp': 'slaughtergoat-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['slaughter goat', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Dairy Buffalo',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Dairy Buffalo description',
        'extended': 'Extended description',
      },
      'isp': 'dairybuffalo-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['dairy buffalo', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John'],
      'happy': ['Juan'],
      'sad': ['Kris'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Swine',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Swine description',
        'extended': 'Extended description',
      },
      'isp': 'swine-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['corn', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Ferdinand', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Duck',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Duck description',
        'extended': 'Extended description',
      },
      'isp': 'duck-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['duck', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Native Chicken',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Native Chicken description',
        'extended': 'Extended description',
      },
      'isp': 'nativechicken-isp',
      'sector': 'livestock-sector',
      'industry': 'agri-industry',
      'specificCommodity': null,
      'tags': ['native chicken', 'agriculture'],

      'createdAt': Date.now,  
      
      'likes': ['John'],
      'happy': ['Juan', 'John'],
      'sad': [],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Aquafeeds',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Aquafeeds description',
        'extended': 'Extended description',
      },
      'isp': 'feedres-ia-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': 'Aquafeeds',
      'tags': ['aquafeeds', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now,
      '__ref': 'aquafeeds-lo',
    },
    { 
      'title': 'Learning about Milkfish',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Milkfish description',
        'extended': 'Extended description',
      },
      'isp': 'milkfish-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['milkfish', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Mangrove Crab (Mudcrab)',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mangrove Crab (Mudcrab) description',
        'extended': 'Extended description',
      },
      'isp': 'mudcrab-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['mangrove crab', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver'],
      'happy': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Tilapia',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Tilapia description',
        'extended': 'Extended description',
      },
      'isp': 'tilapia-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['tilapia', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Shrimp',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Shrimp description',
        'extended': 'Extended description',
      },
      'isp': 'shrimp-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['shrimp', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'sad': ['Juan'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Mussel',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mussel description',
        'extended': 'Extended description',
      },
      'isp': 'mussel-isp',
      'sector': 'inlandaq-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['mussel', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Blue Swimming Crab',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Blue Swimming Crab description',
        'extended': 'Extended description',
      },
      'isp': 'bscrab-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['blue swimming crab', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Abalone',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Abalone description',
        'extended': 'Extended description',
      },
      'isp': 'abalone-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['abalone', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Juan', 'John', 'Jane', 'Justin'],
      'happy': ['Juan'],
      'sad': ['Juan'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Oyster',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Oyster description',
        'extended': 'Extended description',
      },
      'isp': 'oyster-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['oyster', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Sardines',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sardines description',
        'extended': 'Extended description',
      },
      'isp': 'sardines-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['sardines', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Sea Cucumber',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sea Cucumber description',
        'extended': 'Extended description',
      },
      'isp': 'seacucumber-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['sea cucumber', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Juan'],
      'happy': ['Juan'],
      'sad': ['John', 'Jane', 'Justin'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Seaweeds',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Seaweeds description',
        'extended': 'Extended description',
      },
      'isp': 'seaweeds-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['seaweeds', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Tuna',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Tuna description',
        'extended': 'Extended description',
      },
      'isp': 'tuna-isp',
      'sector': 'marineres-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['tuna', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend'],
      'happy': ['Sally', 'Tim', 'Uvin', 'Victoria', 'Vince', 'Wilson', 'Xyrus', 'Zend', 'Juan', 'John', 'Jane'],
      'sad': ['Justin', 'Joon', 'Jeff', 'Krystal', 'Kris', 'Karl', 'Logan', 'Luhan', 'Manuel', 'Natalie', 'Oliver', 'Patricia', 'Queen', 'Rona'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Bathymetry',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Bathymetry description',
        'extended': 'Extended description',
      },
      'isp': 'bathymetry-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['bathymetry', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel', 'Ellen'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Corals',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Corals description',
        'extended': 'Extended description',
      },
      'isp': 'corals-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['corals', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Gerald', 'Gary', 'Harold', 'Henry', 'Irish', 'Juan', 'John', 'Juan', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'happy': ['Ferdinand','Juan', 'John', 'Gerald', 'Gary', 'Harold', 'Henry', 'Irish'],
      'sad': ['Amber', 'Angelica', 'Albert', 'Bryan', 'Cena', 'Daniel'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Fishing Maps',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Fishing Maps description',
        'extended': 'Extended description',
      },
      'isp': 'fishingmaps-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['fishing maps', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris', 'Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Harmful Algal Blooms',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Harmful Algal Blooms description',
        'extended': 'Extended description',
      },
      'isp': 'algalblooms-isp',
      'sector': 'oes-sector',
      'industry': 'aqua-industry',
      'specificCommodity': null,
      'tags': ['algal blooms', 'aquatic resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Cacao',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Cacao description',
        'extended': 'Extended description',
      },
      'isp': 'cacao-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['cacao', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Henry', 'Harold'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Bamboo',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Bamboo description',
        'extended': 'Extended description',
      },
      'isp': 'bamboo-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['bamboo', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Harold', 'Juan', 'John', 'Jane', 'Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Sago',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Sago description',
        'extended': 'Extended description',
      },
      'isp': 'sago-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['sago', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Angelica', 'Bryan', 'Gary', 'Gerald', 'Irish'],
      'sad': ['Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Rubber',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Rubber description',
        'extended': 'Extended description',
      },
      'isp': 'rubber-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['rubber', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Daniel', 'Ferdinand'],
      'sad': ['Angelica', 'Bryan', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Industrial Tree Plantation',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Industrial Tree Plantation description',
        'extended': 'Extended description',
      },
      'isp': 'itreeplant-isp',
      'sector': 'forestry-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['industrial tree plantation', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Harold', 'Juan', 'John'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Biodiversity',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Biodiversity description',
        'extended': 'Extended description',
      },
      'isp': 'biodiversity-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['biodiversity', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris', 'Ferdinand', 'Henry', 'Harold'],
      'happy': ['Gary', 'Gerald', 'Irish'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Climate Change',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Climate Change description',
        'extended': 'Extended description',
      },
      'isp': 'climatechange-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['climate change', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Angelica', 'Bryan', 'Daniel', 'Ferdinand'],
      'sad': ['Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Watershed',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Watershed description',
        'extended': 'Extended description',
      },
      'isp': 'watershed-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['watershed', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      'sad': ['Angelica'],
      
      'updatedAt': Date.now
    },
    { 
      'title': 'Learning about Mangrove',
      'state': 'published',
      'author': 'admin',
      'publishedAt': Date.now,
      'content': {
        'brief': 'Learning about Mangrove description',
        'extended': 'Extended description',
      },
      'isp': 'mangrove-isp',
      'sector': 'ies-sector',
      'industry': 'natural-industry',
      'specificCommodity': null,
      'tags': ['mangrove', 'natural resources'],

      'createdAt': Date.now,  
      
      'likes': ['Amber', 'Albert', 'Cena', 'Ellen', 'Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'happy': ['Gary', 'Gerald', 'Irish', 'Karl', 'Krystal', 'Kris'],
      'sad': ['Angelica', 'Bryan', 'Daniel', 'Ferdinand', 'Henry', 'Harold', 'Juan', 'John', 'Jane', 'Justin', 'Joon', 'Jeff'],
      
      'updatedAt': Date.now
    },
  ],
  

  Chapter: [
    {
      'title': 'Corn Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'biotechbtcorn-lo', 
        'feedingprogram-lo', 
        'grainquality-lo',
        'landpreparation-lo',
        'soilfertilization-lo',
        'stagescorn-lo'
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
      '__ref': 'corn-chapter',
    },
    {
      'title': 'Legume Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'mungbean-lo',
        'peanut-lo'
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
      '__ref': 'legume-chapter',
    },
    {
      'title': 'Rootcrop Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'sweetpotato-lo',
        'whitepotato-lo'
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
      '__ref': 'rootcrop-chapter',
    },
    {
      'title': 'Tropical Fruit Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'durian-lo',
        'jackfruit-lo',
        'citrus-lo',
        'papaya-lo',
        'pineapple-lo'
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
      '__ref': 'tropicalfruit-chapter',
    },
    {
      'title': 'Feed Resources Chapter',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'aquafeeds-lo'
      ],
     
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
      '__ref': 'feedres-chapter',
    },

  ],

  Course: [
    {
      'title': 'Agriculture Course',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'corn-chapter',
        'tropicalfruit-chapter',
        'rootcrop-chapter',
        'legume-chapter'
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
    },
    {
      'title': 'Aquatic Resources Course',
      'state': 'published',
      'author': 'admin',
      'content': {
        'brief': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem ligula, varius non vulputate at, sagittis at neque.  ',
        'extended': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia nibh felis, in placerat felis hendrerit quis. Aenean sit amet risus consectetur nulla pellentesque lacinia et quis sem. Etiam non ullamcorper quam, cursus posuere est. Curabitur lectus nulla, pellentesque ultrices rutrum sed, congue porta sem. Nullam vitae posuere diam. Sed velit metus, tristique et ipsum eget, gravida eleifend dui.  ',
      },
      'publishedAt': Date.now,
      'outline': [
        'feedres-chapter',
      ],
      
      'likes': ['Juan', 'John', 'Jane'],
      'happy': ['Juan', 'John'],
      'sad': ['Juan'],
      
      
    }
  ],

  LOComment: [
    { 
      'content': 'Hello po!', 
      'author': 'Angelica', 
      'learningObject': 'aquafeeds-lo',
      'dateCreated': '2017-01-12'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Amber', 
      'learningObject': 'pineapple-lo',
      'dateCreated': '2017-01-28'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Albert', 
      'learningObject': 'papaya-lo',
      'dateCreated': '2017-01-18'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Bryan', 
      'learningObject': 'citrus-lo',
      'dateCreated': '2017-01-10'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Cena', 
      'learningObject': 'jackfruit-lo',
      'dateCreated': '2017-02-09'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Daniel', 
      'learningObject': 'durian-lo',
      'dateCreated': '2017-02-26'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Ellen', 
      'learningObject': 'whitepotato-lo',
      'dateCreated': '2017-02-07'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Ferdinand', 
      'learningObject': 'sweetpotato-lo',
      'dateCreated': '2017-03-01'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Gerald', 
      'learningObject': 'peanut-lo',
      'dateCreated': '2017-03-11'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Gary', 
      'learningObject': 'mungbean-lo',
      'dateCreated': '2017-03-09'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Henry', 
      'learningObject': 'stagescorn-lo',
      'dateCreated': '2017-03-16'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Harold', 
      'learningObject': 'soilfertilization-lo',
      'dateCreated': '2017-03-19'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Irish', 
      'learningObject': 'landpreparation-lo',
      'dateCreated': '2017-03-20'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Juan', 
      'learningObject': 'biotechbtcorn-lo',
      'dateCreated': '2017-03-21'
    },
    { 
      'content': 'Hello po!', 
      'author': 'John', 
      'learningObject': 'feedingprogram-lo',
      'dateCreated': '2017-03-22'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Jane', 
      'learningObject': 'grainquality-lo',
      'dateCreated': '2017-03-25'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Justin', 
      'learningObject': 'sugarcane-lo',
      'dateCreated': '2017-03-26'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Joon', 
      'learningObject': 'plantingrice-lo',
      'dateCreated': '2017-03-20'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Jeff', 
      'learningObject': 'plantingmango-lo',
      'dateCreated': '2017-03-23'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Kris', 
      'learningObject': 'plantingcoffee-lo',
      'dateCreated': '2017-03-23'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Karl', 
      'learningObject': 'plantingcoconut-lo',
      'dateCreated': '2017-03-24'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Krystal', 
      'learningObject': 'plantingbanana-lo',
      'dateCreated': '2017-03-28'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Luhan', 
      'learningObject': 'plantingabaca-lo',
      'dateCreated': '2017-03-22'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Logan', 
      'learningObject': 'pineapple-lo',
      'dateCreated': '2017-03-17'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Manuel', 
      'learningObject': 'aquafeeds-lo',
      'dateCreated': '2017-03-16'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Natalie', 
      'learningObject': 'papaya-lo',
      'dateCreated': '2017-03-17'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Oliver', 
      'learningObject': 'citrus-lo',
      'dateCreated': '2017-03-04'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Patricia', 
      'learningObject': 'jackfruit-lo',
      'dateCreated': '2017-04-05'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Queen', 
      'learningObject': 'whitepotato-lo',
      'dateCreated': '2017-04-04'
    },
    { 
      'content': 'Hello po!', 
      'author': 'Rona', 
      'learningObject': 'durian-lo',
      'dateCreated': '2017-04-03'
    },

  ],

  
};
