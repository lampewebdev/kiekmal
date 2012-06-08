class Marker < ActiveRecord::Base
  attr_accessible :beschreibung, :bild, :kategorie_id, :name, :map_id, :lat, :lng
	belongs_to :kategorie
	belongs_to :map
	validates_presence_of :name, :kategorie_id
end
