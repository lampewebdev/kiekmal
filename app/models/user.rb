class User < ActiveRecord::Base
  attr_accessible :email, :name, :provider, :uid
  has_many :maps,:dependent => :destroy
	 def self.create_with_omniauth(auth)
	  create! do |user|
	    user.provider = auth["provider"]
	    user.uid = auth["uid"]
	    user.name = auth["info"]["name"]
	    user.email = auth["info"]["email"]
	  end
	end
end
