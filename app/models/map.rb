class Map < ActiveRecord::Base
  attr_accessible :beschreibung, :name, :user_id
  belongs_to :user
  has_many :markers,  :dependent => :destroy

  validates_presence_of :user_id, :name
  
end
