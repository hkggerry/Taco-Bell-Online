class MenuCategoriesController < ApplicationController
    def index
        menu_category = MenuCategory.all
        render json: menu_category
    end
end
