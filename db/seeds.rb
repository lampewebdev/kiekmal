# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Kategorien = Kategorie.create([{name: 'Essen', markerbild: "/EssenPicker.png", bild: "/k_essen.jpg"},
															{name: 'Trinken', markerbild: "/TrinkenPicker.png", bild: "/k_trinken.jpg"},
															{name: 'Kultur', markerbild: "/KulturPicker.png", bild: "/k_kultur.jpg"},
															{name: 'Shoppen', markerbild: "/ShoppenPicker.png", bild: "/k_shoppen.jpg"},
															{name: 'Sport', markerbild: "/SportPicker.png", bild: "/k_sport.jpg"},
															{name: 'Sonstiges', markerbild: "/SonstigesPicker.png", bild: "/k_sonstiges.jpg"}])