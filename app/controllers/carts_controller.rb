class CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]
  

    def index
        carts = Cart.where(:customer_id => session[:customer_id]).order(:id)
        render json: carts
        # .to_json(except: [:created_at, :updated_at], include: [menu: {only:[:name, :price, :image_url]}])
      end

      def create
        cart = Cart.where(:customer_id => session[:customer_id]).create(params.permit(:menu_id, :quantity))
          render json: cart, status: :created
      end

      def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
        @cart.destroy
      end

      def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :customer_id
        if @cart.update(quantity: params[:quantity])
          render json: @cart
        else
          render json: @cart.errors, status: :unprocessable_entity
        end
      end 

      private

      def set_cart
        @cart = Cart.find(params[:id])
    end

    
    
end
