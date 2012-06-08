class Markeraddlatlng < ActiveRecord::Migration
  def change
			add_column :markers, :lat, :float
			add_column :markers, :lng, :float
  end
end
