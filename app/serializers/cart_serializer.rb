class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :menu_id
end
