class Menu < ApplicationRecord
    has_many :cart

    has_many :menu_categories
    has_many :categories, through: :menu_categories
end
