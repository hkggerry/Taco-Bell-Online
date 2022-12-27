class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.decimal :price
      t.string :ingredients
      t.string :image_url
      t.integer :calories

      t.timestamps
    end
  end
end
