class Menu < ApplicationRecord
    has_one :cart

    has_many :menu_categories
    has_many :categories, through: :menu_categories
end
