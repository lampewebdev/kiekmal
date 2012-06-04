class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :name
      t.text :beschreibung
      t.integer :user_id
      t.integer :kategorie_id
      t.timestamps
    end
  end
end
