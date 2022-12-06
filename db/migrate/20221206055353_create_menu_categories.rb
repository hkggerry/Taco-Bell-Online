class CreateMenuCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_categories do |t|
      t.integer :menu_id
      t.integer :category_id

      t.timestamps
    end
  end
end
