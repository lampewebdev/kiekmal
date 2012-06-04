class Kategorie < ActiveRecord::Base
  attr_accessible :bild, :markerbild, :name
	has_many :maps
	has_many :markers

	validates_presence_of :name, :bild, :markerbild
end
