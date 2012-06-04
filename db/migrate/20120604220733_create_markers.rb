class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :name
      t.text :beschreibung
      t.string :bild
      t.integer :kategorie_id
      t.integer :map_id
      t.timestamps
    end
  end
end
