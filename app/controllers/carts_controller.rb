class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts.to_json(except: [:created_at, :updated_at], include: [menu: {only:[:name, :price, :image_url]}])
      end

      def create
        cart = Cart.create(params.permit(:customer_id, :menu_id))
          render json: cart, status: :created
      end
    
end
