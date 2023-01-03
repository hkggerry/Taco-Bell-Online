class Category < ApplicationRecord

    has_many :menu_categories
    has_one :menu, through: :menu_categories

    
end
