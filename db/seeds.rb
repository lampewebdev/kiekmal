# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Kategorien = Kategorie.create([{name: 'Essen', markerbild: "/butcher.png", bild: "/Preview.png"},
															{name: 'Bars', markerbild: "/r.png", bild: "/Preview.png"},
															{name: 'Kultur', markerbild: "/museum_science.png", bild: "/Preview.png"},
															{name: 'Sonstiges', markerbild: "/radiation.png", bild: "/Preview.png"}])