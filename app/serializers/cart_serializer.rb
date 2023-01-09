class CartSerializer < ActiveModel::Serializer
  belongs_to :menu
  attributes :id, :customer_id, :menu_id, :quantity, :total

  def total
(self.object.menu.price.to_f)*(self.object.quantity)
  end 

end
