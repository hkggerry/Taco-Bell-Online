class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :menu_id, :quantity, :total

  def total
    byebug
  end
  
end
