class CreateKategories < ActiveRecord::Migration
  def change
    create_table :kategories do |t|
      t.string :name
      t.string :bild
      t.string :markerbild
      t.timestamps
    end
  end
end
