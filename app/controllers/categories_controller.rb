class CategoriesController < ApplicationController
    def index
        category = Category.all
        render json: category, include: :menu
    end
end
