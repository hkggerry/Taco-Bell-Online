class Category < ApplicationRecord

    has_many :menu_categories
    has_many :menu, through: :menu_categories


end
