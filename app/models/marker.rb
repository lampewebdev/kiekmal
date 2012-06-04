class Marker < ActiveRecord::Base
  attr_accessible :beschreibung, :bild, :kategorie_id, :name, :map_id
	belongs_to :kategories
	validates_presence_of :name, :map_id, :kategorie_id
end
