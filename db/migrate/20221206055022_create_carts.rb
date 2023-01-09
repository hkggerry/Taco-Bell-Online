class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :customer_id
      t.integer :menu_id
      t.integer :quantity
      t.decimal :total
      t.timestamps
    end
  end
end
