var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * News Model
 * ==========
 */

var News = new keystone.List('News', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
})

News.add({
  title: { type: String, required: true, default: '', index: true },
  author: { type: Types.Name, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
	publishedDate: { type: Types.Datetime, dependsOn: { state: 'published' } },
  image: { type: Types.CloudinaryImage, autoCleanup: true, folder: 'community/news' },
  industry: { type: Types.Relationship, ref: 'Industry' },
  sector: { type: Types.Relationship, ref: 'Sector', filters: { industry: ':industry' } },
  commodity: { type: Types.Relationship, ref: 'Commodity', filters: { sector: ':sector' } },
  content: {
		brief: { type: Types.Textarea, height: 150, max: 250 },
		extended: { type: Types.Textarea, height: 400 },
	}
});

News.register();
