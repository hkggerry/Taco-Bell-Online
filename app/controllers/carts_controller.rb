class CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]

    def index
        carts = Cart.all
        render json: carts.to_json(except: [:created_at, :updated_at], include: [menu: {only:[:name, :price, :image_url]}])
      end

      def create
        cart = Cart.create(params.permit(:customer_id, :menu_id))
          render json: cart, status: :created
      end

      def destroy
        @cart.destroy
      end

      private

      def set_cart
        @cart = Cart.find(params[:id])
    end
    
end
