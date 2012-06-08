class Map < ActiveRecord::Base
  attr_accessible :beschreibung, :kategorie_id, :name, :user_id
  belongs_to :user
  belongs_to :kategorie
  has_many :markers,  :dependent => :destroy

  validates_presence_of :kategorie_id, :user_id, :name
  
end
